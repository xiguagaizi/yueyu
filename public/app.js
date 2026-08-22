// 粤语纠音台 —— 前端全部逻辑：选句 / 听示范 / 录音 / 送评分 / 渲染纠音报告

const $ = (id) => document.getElementById(id);
const state = {
  lessons: [],
  day: null,
  sentence: null,
  mode: 'single', // single = 练一句；lesson = 整课连读一次评分
  take: null, // { blob, name, source }
  filtered: null,
  config: {},
};

/* ---------------------------------- 录音 ---------------------------------- */
// 浏览器 MediaRecorder 默认吐 webm/opus，接口不收；所以直接采 PCM 自己封 16k 单声道 WAV。

const WORKLET_SRC = `
class PCMCollector extends AudioWorkletProcessor {
  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (ch) this.port.postMessage(new Float32Array(ch));
    return true;
  }
}
registerProcessor('pcm-collector', PCMCollector);
`;

const TARGET_RATE = 16000;

function downsample(input, from, to) {
  if (to >= from) return input;
  const ratio = from / to;
  const out = new Float32Array(Math.floor(input.length / ratio));
  for (let i = 0; i < out.length; i++) {
    const start = Math.floor(i * ratio);
    const end = Math.min(Math.floor((i + 1) * ratio), input.length);
    let sum = 0;
    for (let j = start; j < end; j++) sum += input[j];
    out[i] = sum / Math.max(1, end - start);
  }
  return out;
}

function encodeWav(samples, sampleRate) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  const str = (offset, s) => {
    for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i));
  };
  str(0, 'RIFF');
  view.setUint32(4, 36 + samples.length * 2, true);
  str(8, 'WAVE');
  str(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  str(36, 'data');
  view.setUint32(40, samples.length * 2, true);
  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return new Blob([buffer], { type: 'audio/wav' });
}

class WavRecorder {
  constructor(onLevel) {
    this.onLevel = onLevel;
    this.chunks = [];
    this.recording = false;
  }

  async start() {
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: { channelCount: 1, echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    });
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.source = this.ctx.createMediaStreamSource(this.stream);
    this.chunks = [];

    const collect = (data) => {
      this.chunks.push(data);
      let peak = 0;
      for (let i = 0; i < data.length; i += 8) peak = Math.max(peak, Math.abs(data[i]));
      this.onLevel?.(peak);
    };

    try {
      const url = URL.createObjectURL(new Blob([WORKLET_SRC], { type: 'text/javascript' }));
      await this.ctx.audioWorklet.addModule(url);
      URL.revokeObjectURL(url);
      this.node = new AudioWorkletNode(this.ctx, 'pcm-collector');
      this.node.port.onmessage = (e) => collect(e.data);
    } catch {
      // 老浏览器兜底
      this.node = this.ctx.createScriptProcessor(4096, 1, 1);
      this.node.onaudioprocess = (e) => collect(new Float32Array(e.inputBuffer.getChannelData(0)));
    }

    this.sink = this.ctx.createGain();
    this.sink.gain.value = 0; // 静音落地，避免自己听到回声
    this.source.connect(this.node);
    this.node.connect(this.sink);
    this.sink.connect(this.ctx.destination);
    this.recording = true;
  }

  async stop() {
    this.recording = false;
    const rate = this.ctx?.sampleRate || 48000;
    try {
      this.source?.disconnect();
      this.node?.disconnect();
      this.sink?.disconnect();
      this.stream?.getTracks().forEach((t) => t.stop());
      await this.ctx?.close();
    } catch {}

    const total = this.chunks.reduce((n, c) => n + c.length, 0);
    const merged = new Float32Array(total);
    let offset = 0;
    for (const c of this.chunks) {
      merged.set(c, offset);
      offset += c.length;
    }
    this.chunks = [];
    const samples = downsample(merged, rate, TARGET_RATE);
    return { blob: encodeWav(samples, TARGET_RATE), seconds: samples.length / TARGET_RATE };
  }
}

/* ------------------------------- 课文 & 选句 ------------------------------- */

async function loadData() {
  const [cfg, data] = await Promise.all([
    fetch('/api/config').then((r) => r.json()),
    fetch('/api/lessons').then((r) => r.json()),
  ]);
  state.config = cfg;
  state.lessons = data.lessons;

  $('lessonCount').textContent = `${data.lessons.length} 课 / ${data.lessons.reduce((n, l) => n + l.sentences.length, 0)} 句`;
  $('daySelect').innerHTML = data.lessons
    .map((l) => `<option value="${l.day}">Day ${String(l.day).padStart(2, '0')} · ${l.title}${l.hasAudio ? '' : '（无示范音频）'}</option>`)
    .join('');
  selectDay(data.lessons[0].day);
  updateKeyStatus();
}

function selectDay(day) {
  state.day = Number(day);
  state.filtered = null;
  $('daySelect').value = String(day);
  const lesson = state.lessons.find((l) => l.day === state.day);
  renderSentences(lesson.sentences.map((s) => ({ ...s, day: lesson.day })));
  const audio = $('demoAudio');
  if (lesson.hasAudio) {
    audio.src = `/api/audio/${lesson.day}`;
    audio.hidden = false;
    $('demoHint').textContent = '整课连读，用来跟读。';
  } else {
    audio.removeAttribute('src');
    $('demoHint').textContent = '这一课没有对应的示范 mp3。';
  }
  if (state.mode === 'lesson') enterLessonMode();
  else if (lesson.sentences.length) pickSentence(lesson.sentences[0], lesson);
}

function renderSentences(items) {
  const list = $('sentenceList');
  list.innerHTML = items
    .map(
      (s, i) => `<li data-id="${s.id}" data-day="${s.day}">
        <span class="idx">${state.filtered ? `D${s.day}` : `${i + 1}.`}</span>
        <span class="txt">${escapeHtml(s.text)}</span>
      </li>`,
    )
    .join('');
  const first = list.querySelector('li');
  if (first && state.sentence) {
    const active = list.querySelector(`li[data-id="${CSS.escape(state.sentence.id)}"]`);
    active?.classList.add('active');
  }
}

function currentLesson() {
  return state.lessons.find((l) => l.day === state.day);
}

function pickSentence(sentence, lesson) {
  state.sentence = sentence;
  state.mode = 'single';
  const day = lesson ? lesson.day : sentence.day;
  const l = state.lessons.find((x) => x.day === Number(day));
  $('targetTag').textContent = `Day ${String(l.day).padStart(2, '0')} · ${l.title}`;
  $('targetText').textContent = sentence.text;
  $('targetRaw').textContent = sentence.raw !== sentence.text ? `课本原文（带注音提示）：${sentence.raw}` : '';
  $('targetList').hidden = true;
  $('result').hidden = true;
  $('status').textContent = '';
  document.querySelectorAll('#sentenceList li').forEach((li) => li.classList.toggle('active', li.dataset.id === sentence.id));
  $('scoreBtn').disabled = !state.take;
  syncModeButtons();
  // 手机上课文列表在练习区下面，选完自动滚回去
  if (window.innerWidth <= 900) scrollToEl($('target'));
}

/** 整课连读：一次录完全课，一次评分，报告再按句切开 */
function enterLessonMode() {
  const lesson = currentLesson();
  if (!lesson) return;
  state.mode = 'lesson';
  $('targetTag').textContent = `Day ${String(lesson.day).padStart(2, '0')} · ${lesson.title}`;
  $('targetText').textContent = `整课连读 · ${lesson.sentences.length} 句`;
  $('targetRaw').textContent = '按顺序把下面每句读一遍，中间停顿一下，读完再停止录音。一次评分，报告会拆回每一句。';
  $('targetList').hidden = false;
  $('targetList').innerHTML = lesson.sentences.map((s) => `<li>${escapeHtml(s.text)}</li>`).join('');
  $('result').hidden = true;
  $('status').textContent = '';
  document.querySelectorAll('#sentenceList li').forEach((li) => li.classList.remove('active'));
  $('scoreBtn').disabled = !state.take;
  syncModeButtons();
}

function syncModeButtons() {
  $('modeSingle').classList.toggle('on', state.mode === 'single');
  $('modeLesson').classList.toggle('on', state.mode === 'lesson');
  $('randomBtn').hidden = state.mode !== 'single';
}

// 滚到某个元素。个别环境（后台标签、不合成帧）smooth 会静默不动，加个兜底
function scrollToEl(el) {
  const before = window.scrollY;
  const distance = Math.abs(el.getBoundingClientRect().top);
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => {
    if (distance > 24 && Math.abs(window.scrollY - before) < 4) el.scrollIntoView({ block: 'start' });
  }, 400);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
}

/* --------------------------------- 评分 ---------------------------------- */

function setTake(blob, name, source, extra = '') {
  state.take = { blob, name, source };
  const audio = $('myAudio');
  if (audio.src) URL.revokeObjectURL(audio.src);
  audio.src = URL.createObjectURL(blob);
  audio.hidden = false;
  $('takeInfo').textContent = `${source} · ${name} · ${(blob.size / 1024).toFixed(0)} KB${extra}`;
  $('scoreBtn').disabled = !state.sentence;
}

async function score() {
  const lesson = currentLesson();
  if (!state.take) return;
  if (state.mode === 'single' ? !state.sentence : !lesson) return;
  const btn = $('scoreBtn');
  btn.disabled = true;
  $('status').textContent = state.mode === 'lesson' ? '整课评分中，长音频要多等一会…' : '评分中…';
  $('result').hidden = true;

  const fd = new FormData();
  fd.append('audio', state.take.blob, state.take.name);
  if (state.mode === 'lesson') {
    fd.append('segments', JSON.stringify(lesson.sentences.map((s) => s.text)));
  } else {
    fd.append('text', state.sentence.text);
  }
  fd.append('language', $('language').value);
  const key = localStorage.getItem('cantonese_api_key');
  if (key) fd.append('api_key', key);

  try {
    const res = await fetch('/api/score', { method: 'POST', body: fd });
    const data = await res.json();
    if (!res.ok) {
      renderError(data.error || `HTTP ${res.status}`, data);
      return;
    }
    renderResult(data);
    pushHistory(data);
    $('status').textContent = `完成，用时 ${(data.elapsedMs / 1000).toFixed(1)}s`;
  } catch (err) {
    renderError(err.message || String(err));
  } finally {
    btn.disabled = false;
  }
}

function renderError(message, payload) {
  const box = $('result');
  box.hidden = false;
  box.innerHTML = `<div class="error-box"><strong>评分失败：</strong>${escapeHtml(message)}</div>${
    payload ? `<details class="raw"><summary>接口原始返回</summary><pre>${escapeHtml(JSON.stringify(payload, null, 2))}</pre></details>` : ''
  }`;
  $('status').textContent = '';
}

// 逐音节卡片 / 粤拼对照：评分结果和历史详情共用
function syllablesHtml(items) {
  return items
    .map(
      (it) => `<div class="syl ${it.kind}" title="${escapeHtml(it.hint || '正确')}">
        <div class="char">${escapeHtml(it.char || (it.kind === 'extra' ? '＋' : '—'))}</div>
        <div class="exp">${escapeHtml(it.expected || '')}</div>
        <div class="act" style="color:${it.kind === 'tone' ? 'var(--tone)' : 'var(--bad)'}">${escapeHtml(it.actual || '✗')}</div>
      </div>`,
    )
    .join('');
}

function accColor(acc) {
  return acc >= 90 ? 'var(--accent)' : acc >= 70 ? 'var(--warn)' : 'var(--bad)';
}

/** 整课报告：全对的句子只留一行，有问题的展开逐字卡片 */
function groupsHtml(groups) {
  return `<div><div class="section-title">逐句拆解（全对的只列一行）</div>${groups
    .map((g, i) => {
      // 句间的呼吸声、杂音会算成「多读」，本句该读的字全对就不必展开
      const perfect = !g.items.some((it) => it.expected && it.kind !== 'ok');
      return `<div class="seg">
        <div class="seg-head">
          <span class="seg-idx">${i + 1}</span>
          <span class="seg-text">${escapeHtml(g.text)}</span>
          ${g.counts.extra ? `<span class="muted tiny">句间多 ${g.counts.extra} 个音</span>` : ''}
          <span class="seg-acc" style="color:${accColor(g.accuracy)}">${perfect ? '✓ 全对' : g.accuracy + '%'}</span>
        </div>
        ${perfect ? '' : `<div class="syllables">${syllablesHtml(g.items.filter((it) => it.expected))}</div>`}
      </div>`;
    })
    .join('')}</div>`;
}

function jpCompareHtml(expected, transcribed) {
  return `<div class="jp-compare">
    <div><span class="k">标准粤拼 </span>${escapeHtml(expected || '—')}</div>
    <div><span class="k">听你读成 </span>${escapeHtml(transcribed || '—')}</div>
  </div>`;
}

function ringColor(score, threshold) {
  if (score >= threshold) return 'var(--accent)';
  if (score >= threshold - 20) return 'var(--warn)';
  return 'var(--bad)';
}

function renderResult(data) {
  const box = $('result');
  box.hidden = false;
  const a = data.analysis;
  const score = Math.round(data.score ?? 0);
  const passed = data.passed ?? score >= data.threshold;

  const headline = passed
    ? data.analysis?.groups
      ? '过关！整课连读一次过'
      : '过关！这句可以收进「已掌握」了'
    : score >= data.threshold - 15
      ? '很接近了，差在下面这几个音'
      : '还有明显偏差，先照着示范再听两遍';

  const badges = (data.mock ? '<span class="badge bad">模拟数据 · 未调用真实接口</span>' : '') + (a
    ? [
        a.counts.ok ? `<span class="badge ok">正确 ${a.counts.ok}</span>` : '',
        a.counts.tone ? `<span class="badge tone">声调错 ${a.counts.tone}</span>` : '',
        a.counts.initial ? `<span class="badge warn">声母错 ${a.counts.initial}</span>` : '',
        a.counts.final ? `<span class="badge warn">韵母错 ${a.counts.final}</span>` : '',
        a.counts.syllable ? `<span class="badge bad">整体错 ${a.counts.syllable}</span>` : '',
        a.counts.missing ? `<span class="badge bad">漏读 ${a.counts.missing}</span>` : '',
        a.counts.extra ? `<span class="badge bad">多读 ${a.counts.extra}</span>` : '',
      ].join('')
    : '');

  const isLesson = Boolean(a?.groups);
  const syllables = a ? syllablesHtml(a.items) : '';

  const wordScores = Array.isArray(data.wordScores) && data.wordScores.length
    ? `<div><div class="section-title">逐词得分</div><div class="syllables">${data.wordScores
        .map(
          (w) => `<div class="syl ${w.score >= 80 ? 'ok' : w.score >= 60 ? 'final' : 'syllable'}">
            <div class="char">${escapeHtml(w.word)}</div><div class="exp">${Math.round(w.score)}</div></div>`,
        )
        .join('')}</div></div>`
    : '';

  box.innerHTML = `
    <div class="score-row">
      <div class="ring" style="--pct:${score};--ring-color:${ringColor(score, data.threshold)}">
        <div><div class="num">${score}</div><div class="unit">/ 100</div></div>
      </div>
      <div class="verdict">
        <div class="headline">${headline}</div>
        <div class="muted tiny">${
          isLesson ? `整课连读 ${a.groups.length} 句` : `目标：${escapeHtml(data.text)}`
        } ｜ 合格线 ${data.threshold} ｜ ${passed ? '已通过' : '未通过'}${a ? ` ｜ 音节正确率 ${a.syllableAccuracy}%` : ''}</div>
        <div class="badges">${badges}</div>
      </div>
    </div>

    ${
      a
        ? `${
            isLesson
              ? groupsHtml(a.groups)
              : `<div>
            <div class="section-title">逐字对照（下边框颜色＝错因，鼠标悬停看解释）</div>
            <div class="syllables">${syllables}</div>
          </div>`
          }
          ${jpCompareHtml(data.expectedJyutping, data.transcribedJyutping)}
          <div>
            <div class="section-title">改进建议</div>
            <ul class="tips">${a.tips.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>
          </div>`
        : ''
    }
    ${wordScores}
    <details class="raw"><summary>接口原始返回</summary><pre>${escapeHtml(JSON.stringify(data, null, 2))}</pre></details>
  `;
  scrollToEl(box);
}

/* --------------------------------- 历史 ---------------------------------- */

const HISTORY_LIMIT = 50;
const AUDIO_KEEP = 10; // 本次会话内保留可回放的录音条数
const sessionAudio = new Map(); // 记录 id -> objectURL（刷新页面就没了，不进 localStorage）

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem('yueyu_history') || '[]');
  } catch {
    return [];
  }
}

function pushHistory(data) {
  const a = data.analysis;
  const id = `h${Date.now()}`;
  const list = loadHistory();
  list.unshift({
    id,
    at: new Date().toLocaleString('zh-CN', { hour12: false }),
    day: state.day,
    sentenceId: state.mode === 'lesson' ? null : state.sentence?.id || null,
    source: state.take?.source || '',
    text: a?.groups ? `整课连读 · Day ${state.day}（${a.groups.length} 句）` : data.text,
    groups: a?.groups ? a.groups.map((g) => ({ text: g.text, accuracy: g.accuracy })) : null,
    score: Math.round(data.score ?? 0),
    passed: Boolean(data.passed ?? data.score >= data.threshold),
    threshold: data.threshold,
    mock: Boolean(data.mock),
    expected: data.expectedJyutping || '',
    transcribed: data.transcribedJyutping || '',
    accuracy: a?.syllableAccuracy ?? null,
    counts: a?.counts || null,
    tips: a?.tips || [],
    // 只留渲染要用的字段，detail 那层不存，省 localStorage
    items: a ? a.items.map(({ char, expected, actual, kind, label, hint }) => ({ char, expected, actual, kind, label, hint })) : [],
  });

  if (state.take) {
    sessionAudio.set(id, URL.createObjectURL(state.take.blob));
    for (const key of [...sessionAudio.keys()].slice(AUDIO_KEEP)) {
      URL.revokeObjectURL(sessionAudio.get(key));
      sessionAudio.delete(key);
    }
  }

  try {
    localStorage.setItem('yueyu_history', JSON.stringify(list.slice(0, HISTORY_LIMIT)));
  } catch {
    // 存不下就砍一半再来
    localStorage.setItem('yueyu_history', JSON.stringify(list.slice(0, 15)));
  }
  renderHistory();
}

function historyDetailHtml(h) {
  if (!h.items?.length) {
    return `<div class="h-detail"><p class="muted tiny">这条是旧格式记录，没存详情。重新练一次就有了。</p></div>`;
  }
  const audio = sessionAudio.get(h.id);
  const c = h.counts || {};
  const badges = [
    h.mock ? '<span class="badge bad">模拟数据</span>' : '',
    c.ok ? `<span class="badge ok">正确 ${c.ok}</span>` : '',
    c.tone ? `<span class="badge tone">声调错 ${c.tone}</span>` : '',
    c.initial ? `<span class="badge warn">声母错 ${c.initial}</span>` : '',
    c.final ? `<span class="badge warn">韵母错 ${c.final}</span>` : '',
    c.syllable ? `<span class="badge bad">整体错 ${c.syllable}</span>` : '',
    c.missing ? `<span class="badge bad">漏读 ${c.missing}</span>` : '',
    c.extra ? `<span class="badge bad">多读 ${c.extra}</span>` : '',
  ].join('');

  return `<div class="h-detail">
    <div class="muted tiny">${escapeHtml(h.source || '录音')} ｜ 合格线 ${h.threshold ?? 90} ｜ ${h.passed ? '已通过' : '未通过'}${
      h.accuracy != null ? ` ｜ 音节正确率 ${h.accuracy}%` : ''
    }</div>
    <div class="badges">${badges}</div>
    ${
      h.groups
        ? `<div>${h.groups
            .map(
              (g, i) =>
                `<div class="seg-head"><span class="seg-idx">${i + 1}</span><span class="seg-text">${escapeHtml(g.text)}</span>` +
                `<span class="seg-acc" style="color:${accColor(g.accuracy)}">${g.accuracy}%</span></div>`,
            )
            .join('')}</div>`
        : ''
    }
    <div class="syllables">${syllablesHtml(h.items)}</div>
    ${jpCompareHtml(h.expected, h.transcribed)}
    ${h.tips?.length ? `<ul class="tips">${h.tips.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>` : ''}
    <div class="controls">
      ${
        h.sentenceId
          ? `<button class="ghost tiny-btn" data-again="${escapeHtml(h.sentenceId)}" data-day="${h.day}" type="button">再练一次</button>`
          : h.groups
            ? `<button class="ghost tiny-btn" data-again-lesson="${h.day}" type="button">再来一次整课</button>`
            : ''
      }
      ${audio ? `<audio controls src="${audio}"></audio>` : '<span class="muted tiny">（刷新过页面，这条的录音已经没了）</span>'}
    </div>
  </div>`;
}

function renderHistory() {
  const list = loadHistory();
  $('history').innerHTML = list.length
    ? list
        .map(
          (h) => `<li data-hid="${escapeHtml(h.id || '')}">
            <div class="h-row" role="button" tabindex="0" aria-expanded="false">
              <span class="h-caret">▸</span>
              <span class="h-score" style="color:${h.passed ? 'var(--accent)' : h.score >= 70 ? 'var(--warn)' : 'var(--bad)'}">${h.score}</span>
              <span class="h-text">${escapeHtml(h.text)}</span>
              ${h.counts?.tone ? `<span class="badge tone">调×${h.counts.tone}</span>` : ''}
              <span class="h-time">${escapeHtml(h.at)}</span>
            </div>
            ${historyDetailHtml(h)}
          </li>`,
        )
        .join('')
    : '<li class="muted tiny">还没有记录</li>';
}

function toggleHistoryItem(li) {
  const open = li.classList.toggle('open');
  li.querySelector('.h-row')?.setAttribute('aria-expanded', String(open));
  li.querySelector('.h-caret').textContent = open ? '▾' : '▸';
}

/* --------------------------------- 交互 ---------------------------------- */

function updateKeyStatus() {
  const local = localStorage.getItem('cantonese_api_key');
  const el = $('keyStatus');
  if (state.config.mock) el.textContent = '当前是 MOCK_SCORE=1 演示模式，不会真的调接口。';
  else if (state.config.hasServerKey) el.textContent = '服务端 .env 已配置 key，可以直接用。';
  else if (local) el.textContent = '当前用浏览器里保存的 key。';
  else el.textContent = '还没有 key：填在这里，或写进服务端 .env。';
  $('apiKey').value = local || '';
  $('keyBtn').textContent = state.config.mock ? '演示模式' : state.config.hasServerKey || local ? 'API Key ✓' : 'API Key ⚠';
}

function search(q) {
  const query = q.trim().toLowerCase();
  if (!query) {
    state.filtered = null;
    selectDay(state.day);
    return;
  }
  const hits = [];
  for (const l of state.lessons) {
    const titleHit = l.title.toLowerCase().includes(query) || `day${l.day}`.includes(query);
    for (const s of l.sentences) {
      if (titleHit || s.text.toLowerCase().includes(query)) hits.push({ ...s, day: l.day });
      if (hits.length >= 300) break;
    }
  }
  state.filtered = hits;
  renderSentences(hits);
}

let recorder = null;
let timerHandle = null;

async function toggleRecord() {
  const btn = $('recBtn');
  if (recorder?.recording) {
    const { blob, seconds } = await recorder.stop();
    recorder = null;
    clearInterval(timerHandle);
    btn.textContent = '🎤 开始录音';
    btn.classList.remove('recording');
    $('meter').style.width = '0%';
    if (seconds < 0.4) {
      $('status').textContent = '录得太短了，再来一次';
      return;
    }
    if (blob.size > 10 * 1024 * 1024) {
      $('status').textContent = `录了 ${Math.round(seconds)}s，超过接口 10MB 上限（约 5 分半），分两次录吧`;
      return;
    }
    setTake(blob, 'take.wav', '麦克风录音', ` · ${seconds.toFixed(1)}s`);
    $('status').textContent = '录好了，可以送评分';
    return;
  }

  try {
    recorder = new WavRecorder((peak) => {
      $('meter').style.width = `${Math.min(100, peak * 180)}%`;
    });
    await recorder.start();
    btn.textContent = '⏹ 停止并保存';
    btn.classList.add('recording');
    const t0 = Date.now();
    timerHandle = setInterval(() => {
      const s = (Date.now() - t0) / 1000;
      $('timer').textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
    }, 200);
  } catch (err) {
    recorder = null;
    $('status').textContent = `拿不到麦克风：${err.message}（浏览器需要 localhost 或 https）`;
  }
}

function bind() {
  $('daySelect').addEventListener('change', (e) => {
    $('search').value = '';
    selectDay(e.target.value);
  });

  $('sentenceList').addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li || !li.dataset.id) return;
    const day = Number(li.dataset.day);
    const lesson = state.lessons.find((l) => l.day === day);
    const sentence = lesson.sentences.find((s) => s.id === li.dataset.id);
    if (day !== state.day) {
      const keepFilter = state.filtered;
      selectDay(day);
      if (keepFilter) {
        state.filtered = keepFilter;
        renderSentences(keepFilter);
      }
    }
    pickSentence(sentence, lesson);
  });

  $('search').addEventListener('input', (e) => search(e.target.value));

  $('randomBtn').addEventListener('click', () => {
    const pool = state.filtered?.length ? state.filtered : state.lessons.find((l) => l.day === state.day).sentences.map((s) => ({ ...s, day: state.day }));
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const lesson = state.lessons.find((l) => l.day === Number(pick.day));
    if (Number(pick.day) !== state.day) selectDay(pick.day);
    pickSentence(lesson.sentences.find((s) => s.id === pick.id) || pick, lesson);
  });

  $('modeSingle').addEventListener('click', () => {
    const lesson = currentLesson();
    if (!lesson) return;
    pickSentence(lesson.sentences.find((s) => s.id === state.sentence?.id) || lesson.sentences[0], lesson);
  });
  $('modeLesson').addEventListener('click', enterLessonMode);

  $('recBtn').addEventListener('click', toggleRecord);
  $('scoreBtn').addEventListener('click', score);
  $('uploadBtn').addEventListener('click', () => $('fileInput').click());
  $('fileInput').addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      $('status').textContent = '文件超过 10MB，接口不收';
      return;
    }
    setTake(file, file.name, '上传文件');
    $('status').textContent = '已选择文件，可以送评分';
  });

  $('rate').addEventListener('change', (e) => {
    $('demoAudio').playbackRate = Number(e.target.value);
  });

  $('keyBtn').addEventListener('click', () => $('keyDialog').showModal());
  $('keyDialog').addEventListener('close', () => {
    const dialog = $('keyDialog');
    if (dialog.returnValue === 'save') {
      const v = $('apiKey').value.trim();
      if (v) localStorage.setItem('cantonese_api_key', v);
      else localStorage.removeItem('cantonese_api_key');
    } else if (dialog.returnValue === 'clear') {
      localStorage.removeItem('cantonese_api_key');
    }
    updateKeyStatus();
  });

  $('clearHistory').addEventListener('click', () => {
    localStorage.removeItem('yueyu_history');
    for (const url of sessionAudio.values()) URL.revokeObjectURL(url);
    sessionAudio.clear();
    renderHistory();
  });

  $('history').addEventListener('click', (e) => {
    const againLesson = e.target.closest('[data-again-lesson]');
    if (againLesson) {
      e.stopPropagation();
      const day = Number(againLesson.dataset.againLesson);
      $('search').value = '';
      state.mode = 'lesson';
      if (day !== state.day) selectDay(day);
      else enterLessonMode();
      if (window.innerWidth > 900) scrollToEl($('target'));
      return;
    }
    // 「再练一次」跳回那句，别顺带把详情折叠了
    const again = e.target.closest('[data-again]');
    if (again) {
      e.stopPropagation();
      const day = Number(again.dataset.day);
      const lesson = state.lessons.find((l) => l.day === day);
      const sentence = lesson?.sentences.find((s) => s.id === again.dataset.again);
      if (!sentence) return;
      $('search').value = '';
      if (day !== state.day) selectDay(day);
      pickSentence(sentence, lesson);
      if (window.innerWidth > 900) scrollToEl($('target'));
      return;
    }
    if (e.target.closest('audio')) return; // 点播放器不折叠
    const li = e.target.closest('li[data-hid]');
    if (li) toggleHistoryItem(li);
  });

  $('history').addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const row = e.target.closest('.h-row');
    if (!row) return;
    e.preventDefault();
    toggleHistoryItem(row.parentElement);
  });

  document.addEventListener('keydown', (e) => {
    if (e.target.matches('input, select, textarea') || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.code === 'Space') {
      e.preventDefault();
      const a = $('demoAudio');
      a.paused ? a.play() : a.pause();
    } else if (e.key.toLowerCase() === 'r') {
      e.preventDefault();
      toggleRecord();
    } else if (e.key === 'Enter') {
      score();
    }
  });
}

bind();
renderHistory();
loadData().catch((err) => {
  $('status').textContent = `加载课文失败：${err.message}`;
});
