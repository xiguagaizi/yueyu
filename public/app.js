// 粤语纠音台：整课文同页点读，逐句录音后由底部按钮统一评分。

const $ = (id) => document.getElementById(id);
const CJK = /[\u3400-\u9fff\uF900-\uFAFF]/;
const SENTENCE_PLAY_TITLE = '顺序播放这句每个字的示范读音';
const state = {
  collections: [],
  collection: null,
  lessons: [],
  day: null,
  runs: new Map(),
  config: {},
  checkins: { days: {}, sentences: {}, total: 0, recent: [], recentTotal: 0 },
  filter: 'all',
  query: '',
  date: '',
  sort: 'asc',
  recentOpen: localStorage.getItem('yueyu_recent_open') !== '0',
  historyFilter: 'all',
  historyQuery: '',
  session: 0,
  summarySaved: false,
  batchScoring: false,
  batchProgress: 0,
  lastTodayCount: -1,
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
}

/* ---------------------------------- 录音 ---------------------------------- */

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
  const write = (offset, value) => {
    for (let i = 0; i < value.length; i++) view.setUint8(offset + i, value.charCodeAt(i));
  };
  write(0, 'RIFF');
  view.setUint32(4, 36 + samples.length * 2, true);
  write(8, 'WAVE');
  write(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  write(36, 'data');
  view.setUint32(40, samples.length * 2, true);
  let offset = 44;
  for (const sample of samples) {
    const value = Math.max(-1, Math.min(1, sample));
    view.setInt16(offset, value < 0 ? value * 0x8000 : value * 0x7fff, true);
    offset += 2;
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
      this.node.port.onmessage = (event) => collect(event.data);
    } catch {
      this.node = this.ctx.createScriptProcessor(4096, 1, 1);
      this.node.onaudioprocess = (event) => collect(new Float32Array(event.inputBuffer.getChannelData(0)));
    }

    this.sink = this.ctx.createGain();
    this.sink.gain.value = 0;
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
      this.stream?.getTracks().forEach((track) => track.stop());
      await this.ctx?.close();
    } catch {}

    const total = this.chunks.reduce((size, chunk) => size + chunk.length, 0);
    const merged = new Float32Array(total);
    let offset = 0;
    for (const chunk of this.chunks) {
      merged.set(chunk, offset);
      offset += chunk.length;
    }
    this.chunks = [];
    const samples = downsample(merged, rate, TARGET_RATE);
    return { blob: encodeWav(samples, TARGET_RATE), seconds: samples.length / TARGET_RATE };
  }
}

let recorder = null;
let recordingId = null;
let timerHandle = null;
let playbackAudio = null;
let sentencePlayButton = null;
let sayToken = 0; // 单字点读 / 整句连播共用的代次；stopPlayback 会 +1 作废正在进行的循环
let datepicker = null; // flatpickr 实例：日期筛选弹层日历

function stopPlayback() {
  playbackAudio?.pause();
  playbackAudio = null;
  stopSyllableSources();
  sayToken += 1;
  sentencePlayButton?.classList.remove('speaking');
  if (sentencePlayButton) sentencePlayButton.title = SENTENCE_PLAY_TITLE;
  sentencePlayButton = null;
}

/* ------------------------------- 课程与卡片 ------------------------------- */

async function loadData() {
  const [config, collectionData] = await Promise.all([
    fetch('/api/config').then((response) => response.json()),
    fetch('/api/collections').then((response) => response.json()),
  ]);
  state.config = config;
  state.collections = collectionData.collections || [];
  const saved = localStorage.getItem('yueyu_collection');
  state.collection = state.collections.some((collection) => collection.id === saved)
    ? saved
    : collectionData.defaultCollection;
  $('collection').innerHTML = state.collections.map((collection) => `<option value="${escapeHtml(collection.id)}">${escapeHtml(collection.name)}</option>`).join('');
  $('collection').value = state.collection;
  await loadCollection();
}

async function loadCollection() {
  const query = `?collection=${encodeURIComponent(state.collection)}`;
  const [data, checkins] = await Promise.all([
    fetch(`/api/lessons${query}`).then((response) => response.json()),
    fetch(`/api/checkins${query}`).then((response) => response.json()).catch(() => ({ days: {}, sentences: {}, total: 0, recent: [], recentTotal: 0 })),
  ]);
  state.lessons = data.lessons || [];
  state.checkins = checkins;
  state.day = null;
  state.query = '';
  state.filter = 'all';
  state.date = '';
  $('search').value = '';
  if (datepicker) datepicker.clear(); else $('dateSearch').value = '';
  document.querySelectorAll('#filterChips .chip').forEach((item) => item.classList.toggle('on', item.dataset.filter === 'all'));
  updateStats();
  renderDayList();
  if (state.lessons.length) selectDay(state.lessons[0].day);
}

function currentLesson() {
  return state.lessons.find((lesson) => lesson.day === state.day);
}

function currentRun(sentenceId) {
  if (!state.runs.has(sentenceId)) {
    state.runs.set(sentenceId, {
      take: null,
      result: null,
      scoring: false,
      recording: false,
      error: '',
      restored: false,
      restoredAt: '',
    });
  }
  return state.runs.get(sentenceId);
}

function isDayChecked(day) {
  return Boolean(state.checkins.days[String(day)]?.complete);
}

// 最近打卡时间的展示口径：今天/昨天带时分，同年内「M/D HH:MM」，更早带年份
function lastCheckinText(ts) {
  const d = new Date(Number(ts));
  if (!ts || !Number.isFinite(d.getTime())) return '';
  const now = new Date();
  const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const hm = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  if (sameDay(d, now)) return `今天 ${hm}`;
  if (sameDay(d, new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1))) return `昨天 ${hm}`;
  if (d.getFullYear() === now.getFullYear()) return `${d.getMonth() + 1}/${d.getDate()} ${hm}`;
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

function lessonTagHtml(lesson) {
  const date = lesson.title.match(/^(\d{4}-\d{2}-\d{2})/)?.[1];
  return `Day ${String(lesson.day).padStart(2, '0')}${date ? ` · ${date}` : ''} · ${lesson.sentences.length} 句${isDayChecked(lesson.day) ? ' <span class="checkin-flag">✓ 已完成</span>' : ''}`;
}

const FILTER_LABELS = { all: '全部', todo: '未打卡', done: '已打卡', failed: '未通过' };

// chips 上显示各状态的数量，随搜索/日期过滤联动
function updateFilterChips(pool) {
  const counts = { all: pool.length, todo: 0, done: 0, failed: 0 };
  for (const lesson of pool) {
    const checkin = state.checkins.days[String(lesson.day)];
    if (checkin?.complete) {
      counts.done += 1;
      if (!checkin.passed) counts.failed += 1;
    } else {
      counts.todo += 1;
    }
  }
  document.querySelectorAll('#filterChips .chip').forEach((chip) => {
    const key = chip.dataset.filter;
    chip.innerHTML = `${FILTER_LABELS[key] || ''}<span class="chip-count">${counts[key] ?? 0}</span>`;
  });
}

function renderDayList() {
  const wrap = $('dayList');
  const keepScroll = wrap.scrollTop;
  const query = state.query.toLowerCase();
  const date = state.date;
  const pool = state.lessons.filter((lesson) => {
    if (date && !lesson.title.startsWith(date)) return false;
    if (!query) return true;
    return lesson.title.toLowerCase().includes(query)
      || `day${lesson.day}`.includes(query)
      || lesson.sentences.some((sentence) => sentence.text.toLowerCase().includes(query));
  });
  updateFilterChips(pool);
  const lessons = pool.filter((lesson) => {
    const checkin = state.checkins.days[String(lesson.day)];
    if (state.filter === 'done' && !checkin?.complete) return false;
    if (state.filter === 'todo' && checkin?.complete) return false;
    if (state.filter === 'failed' && (!checkin?.complete || checkin.passed)) return false;
    return true;
  });
  lessons.sort((a, b) => state.sort === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));

  wrap.innerHTML = lessons.map((lesson) => {
    const checkin = state.checkins.days[String(lesson.day)];
    const match = lesson.title.match(/^(\d{4}-\d{2}-\d{2})\s*(.*)$/);
    const date = match ? match[1] : '';
    const title = match ? match[2] : lesson.title;
    let status = '<span class="d-dot" title="未开始"></span>';
    if (checkin?.complete) {
      const bestNote = checkin.maxScore != null && checkin.maxScore > checkin.bestScore ? ` · 历史最高 ${checkin.maxScore} 分` : '';
      status = `<span class="d-score ${checkin.passed ? 'pass' : 'fail'}" title="最新合并 ${checkin.bestScore} 分${bestNote}">${checkin.passed ? '✓' : ''}${checkin.bestScore}</span>`;
    } else if (checkin?.doneCount) {
      status = `<span class="d-progress" title="已评分 ${checkin.doneCount} 句">${checkin.doneCount}/${checkin.sentenceCount}</span>`;
    }
    const classes = ['day-item', checkin?.complete ? 'done' : '', lesson.day === state.day ? 'active' : ''].filter(Boolean).join(' ');
    const lastText = lastCheckinText(checkin?.lastAt);
    return `<li class="${classes}" data-day="${lesson.day}">
      <span class="d-no">${String(lesson.day).padStart(2, '0')}</span>
      <span class="d-main"><span class="d-title">${escapeHtml(title)}</span><span class="d-date">${date}${lesson.hasAudio ? '' : ' · 无示范音频'}</span></span>
      <span class="d-side">${status}${lastText ? `<span class="d-last" title="最近打卡时间">${lastText}</span>` : ''}</span>
    </li>`;
  }).join('');
  if (!lessons.length) wrap.innerHTML = '<li class="day-list-empty">没有符合条件的课文</li>';
  wrap.scrollTop = keepScroll;
}

function updateStats() {
  const completed = state.lessons.filter((lesson) => isDayChecked(lesson.day)).length;
  const sentenceTotal = state.lessons.reduce((total, lesson) => total + lesson.sentences.length, 0);
  $('lessonCount').textContent = `${state.lessons.length} 天 / ${sentenceTotal} 句 · 已完成 ${completed} 天`;
  renderTodayCard();
  renderRecentCheckins();
}

/* 今日打卡卡片：篇数按「今天完成整课打卡」算（该课所有句子都评过分且最后一次落在今天），
   连续天数按有练习记录的日子回推。数字比上一次多时 emoji 弹跳一下，顺便换一句粤语鼓励。 */
const TODAY_TIERS = [
  { min: 6, emoji: '🏆', msg: '今日打卡王就系你，够晒厉害！' },
  { min: 4, emoji: '🌟', msg: '好叻啊！今日进步看得见' },
  { min: 2, emoji: '💪', msg: '状态在线，越读越顺！' },
  { min: 1, emoji: '🌱', msg: '开咗个好头，趁热打铁！' },
  { min: 0, emoji: '🐣', msg: '今日还未打卡，录一句热下身啦～' },
];

function renderTodayCard() {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const dayKey = (d) => `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  let count = 0;
  for (const info of Object.values(state.checkins.days || {})) {
    if (info.complete && (Number(info.lastAt) || 0) >= startOfToday) count += 1;
  }
  const activeDays = new Set();
  for (const info of Object.values(state.checkins.days || {})) {
    if (info.lastAt) activeDays.add(dayKey(new Date(info.lastAt)));
  }
  let streak = 0;
  const cursor = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (!activeDays.has(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  while (activeDays.has(dayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  const tier = TODAY_TIERS.find((item) => count >= item.min);
  const card = $('todayCard');
  card.classList.toggle('done', count > 0);
  $('todayTitle').innerHTML = `今日打卡 <b>${count}</b> 篇`;
  $('todayMsg').textContent = tier.msg;
  $('todayEmoji').textContent = tier.emoji;

  const streakEl = $('todayStreak');
  streakEl.hidden = streak < 2;
  streakEl.textContent = `🔥 连续 ${streak} 天`;

  if (count > state.lastTodayCount && state.lastTodayCount !== -1) {
    const emoji = $('todayEmoji');
    emoji.classList.remove('pop');
    void emoji.offsetWidth; // 重置动画
    emoji.classList.add('pop');
  }
  state.lastTodayCount = count;
}

/* 最近打卡卡：服务器随 /api/checkins 回传本合集过去 12 小时的记录，同一课只保留最新一条（新→旧）。
   样式是一张浅色渐变卡，与上面的筛选 chips 区分开；头部可折叠，点某条跳回那句课文。 */
function renderRecentCheckins() {
  const card = $('recentCard');
  const recent = state.checkins.recent || [];
  if (!recent.length) {
    card.hidden = true;
    return;
  }
  card.hidden = false;
  card.classList.toggle('collapsed', !state.recentOpen);
  $('recentToggle').setAttribute('aria-expanded', String(state.recentOpen));
  $('recentCount').textContent = Number(state.checkins.recentTotal) || recent.length;

  const foot = $('recentFoot');
  const recentTotal = Number(state.checkins.recentTotal) || recent.length;
  foot.hidden = !(state.recentOpen && recentTotal > recent.length);
  foot.textContent = `共 ${recentTotal} 条，只显示最近 ${recent.length} 条`;

  const sentenceMap = new Map();
  for (const lesson of state.lessons) {
    for (const sentence of lesson.sentences) sentenceMap.set(String(sentence.id), sentence.text);
  }
  $('recentList').innerHTML = recent.map((record) => {
    const text = sentenceMap.get(String(record.sentenceId));
    const jumpable = text != null;
    const title = jumpable ? ' title="点击打开这句课文"' : '';
    return `<li class="recent-item${jumpable ? '' : ' static'}" data-day="${record.day}" data-sentence-id="${escapeHtml(record.sentenceId || '')}"${title}>
      <span class="r-time" title="${escapeHtml(new Date(record.ts).toLocaleString('zh-CN', { hour12: false }))}">${escapeHtml(lastCheckinText(record.ts))}</span>
      <span class="r-no">Day ${String(record.day).padStart(2, '0')}</span>
      <span class="r-text">${escapeHtml(text || '（课文里已找不到这句）')}</span>
      ${record.mock ? '<span class="badge bad">模拟</span>' : ''}
      <span class="r-score ${record.passed ? 'pass' : 'fail'}">${record.score}</span>
    </li>`;
  }).join('');
}

function clearRuns() {
  stopPlayback();
  for (const run of state.runs.values()) {
    if (run.take?.url) URL.revokeObjectURL(run.take.url);
  }
  state.runs.clear();
  state.summarySaved = false;
}

function restoreLatestLessonResult(lesson) {
  const entry = loadHistory().find((item) => {
    const sameCollection = item.collection
      ? item.collection === state.collection
      : state.collection === 'original';
    return sameCollection && Number(item.day) === lesson.day && (item.sentences?.length || item.sentenceId);
  });
  if (!entry) return null;

  const savedSentences = entry.sentences?.length
    ? entry.sentences
    : [{ ...entry, id: entry.sentenceId || lesson.sentences[0]?.id }];
  let restored = 0;
  for (const sentence of lesson.sentences) {
    const saved = savedSentences.find((item) => String(item.id) === String(sentence.id));
    if (!saved || saved.score == null) continue;
    const items = Array.isArray(saved.items) ? saved.items : [];
    const expectedCount = items.filter((item) => item.expected).length
      || String(saved.expected || '').trim().split(/\s+/).filter(Boolean).length
      || [...sentence.text].filter((char) => CJK.test(char)).length;
    const threshold = Number(saved.threshold ?? entry.threshold ?? 90);
    const run = currentRun(sentence.id);
    run.result = {
      score: Number(saved.score),
      passed: Boolean(saved.passed ?? Number(saved.score) >= threshold),
      threshold,
      expectedJyutping: saved.expected || '',
      transcribedJyutping: saved.transcribed || '',
      mock: Boolean(saved.mock ?? entry.mock),
      analysis: items.length ? {
        items,
        counts: saved.counts || {},
        tips: saved.tips || [],
        syllableAccuracy: saved.accuracy,
        expectedCount,
      } : null,
    };
    run.restored = true;
    run.restoredAt = entry.at || '';
    restored += 1;
  }
  return restored ? { entry, restored } : null;
}

function recordingFileName(sentenceId, type) {
  const extension = {
    'audio/mpeg': 'mp3',
    'audio/mp4': 'm4a',
    'audio/flac': 'flac',
    'audio/ogg': 'ogg',
  }[type] || 'wav';
  return `saved-${sentenceId}.${extension}`;
}

async function restorePersistedRecordings(lesson, session, previousResult) {
  const candidates = lesson.sentences.filter((sentence) => state.checkins.sentences[sentence.id]);
  if (!candidates.length) return;
  const restored = await Promise.all(candidates.map(async (sentence) => {
    try {
      // no-cache：带 ETag 回服务器验证，没变就 304 不重传；重录过的会拿到新文件
      const response = await fetch(
        `/api/recording/${encodeURIComponent(sentence.id)}?collection=${encodeURIComponent(state.collection)}`,
        { cache: 'no-cache' },
      );
      if (response.status === 404) return false;
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const blob = await response.blob();
      if (session !== state.session || state.day !== lesson.day) return false;
      const run = currentRun(sentence.id);
      if (run.take || run.recording) return false;
      run.take = {
        blob,
        name: recordingFileName(sentence.id, blob.type),
        source: '最后打卡录音',
        extra: ' · 已保存',
        url: URL.createObjectURL(blob),
        persisted: true,
      };
      return true;
    } catch (error) {
      if (session === state.session) console.warn(`加载 ${sentence.id} 的保存录音失败`, error);
      return false;
    }
  }));
  if (session !== state.session || state.day !== lesson.day) return;
  const count = restored.filter(Boolean).length;
  if (count) {
    syncAllCards();
    renderLessonSummary();
  }
  if (previousResult) {
    $('pageStatus').textContent = count
      ? `已显示${previousResult.entry.at ? ` ${previousResult.entry.at}` : ''} 的上一次评分结果，并载入 ${count} 句最后录音。`
      : `已显示${previousResult.entry.at ? ` ${previousResult.entry.at}` : ''} 的上一次评分结果；该旧记录没有已保存录音。`;
  } else if (count) {
    $('pageStatus').textContent = `已载入 ${count} 句最后一次成功评分的录音。`;
  }
}

function selectDay(day) {
  if (recordingId || state.batchScoring) {
    $('pageStatus').textContent = recordingId ? '请先停止当前录音，再切换课文。' : '请等待本次评分完成，再切换课文。';
    return false;
  }
  const lesson = state.lessons.find((item) => item.day === Number(day));
  if (!lesson) return false;
  clearRuns();
  state.session += 1;
  state.day = lesson.day;
  state.batchProgress = 0;
  for (const sentence of lesson.sentences) currentRun(sentence.id);
  const previousResult = restoreLatestLessonResult(lesson);
  state.summarySaved = Boolean(previousResult);

  $('lessonTag').innerHTML = lessonTagHtml(lesson);
  $('lessonTitle').textContent = lesson.title;
  $('sentenceCount').textContent = `${lesson.sentences.length} 句 · 0 句已录`;
  $('pageStatus').textContent = previousResult
    ? `已显示${previousResult.entry.at ? ` ${previousResult.entry.at}` : ''} 的上一次评分结果，正在加载最后录音。`
    : '';

  const demo = $('demoAudio');
  if (lesson.hasAudio) {
    demo.src = `/api/audio/${lesson.day}?collection=${encodeURIComponent(state.collection)}`;
    demo.hidden = false;
    $('originalTrack').hidden = false;
  } else {
    demo.pause();
    demo.removeAttribute('src');
    demo.hidden = true;
    $('originalTrack').hidden = true;
  }

  const slowAudio = $('slowAudio');
  if (lesson.hasSlowAudio) {
    slowAudio.src = `/api/audio/${lesson.day}?collection=${encodeURIComponent(state.collection)}&variant=slow`;
    $('slowTrack').hidden = false;
  } else {
    slowAudio.pause();
    slowAudio.removeAttribute('src');
    $('slowTrack').hidden = true;
  }

  renderSentenceCards();
  syncAllCards();
  renderLessonSummary();
  renderDayList();
  restorePersistedRecordings(lesson, state.session, previousResult);
  return true;
}

function sentenceTextHtml(text) {
  return [...text].map((char) => CJK.test(char)
    ? `<button class="article-char" data-say="${escapeHtml(char)}" type="button" title="点击听「${escapeHtml(char)}」的发音">${escapeHtml(char)}</button>`
    : `<span class="article-punctuation">${escapeHtml(char)}</span>`).join('');
}

// 录音工具条摆位：默认弹在句子最后一行的右侧，右边放不下时回落到句子上方。
// 移动端 / 触屏设备工具条是常显平铺布局（见 style.css 末尾），不做绝对定位。
function positionSentenceTools(sentence) {
  const tools = sentence.querySelector(':scope > .sentence-tools');
  const textEl = sentence.querySelector('.sentence-text');
  if (!tools || !textEl) return;
  if (window.matchMedia('(max-width: 900px), (hover: none)').matches) {
    tools.style.left = '';
    tools.style.top = '';
    tools.style.bottom = '';
    return;
  }
  const last = textEl.lastElementChild;
  const sentenceRect = sentence.getBoundingClientRect();
  const container = sentence.closest('.lesson-article') || document.body;
  const containerRect = container.getBoundingClientRect();
  if (!last) return;
  const lastRect = last.getBoundingClientRect();
  const gap = 10;
  const spaceRight = containerRect.right - lastRect.right - gap;
  const toolsWidth = tools.offsetWidth;
  if (toolsWidth > 0 && toolsWidth <= spaceRight) {
    const toolsHeight = tools.offsetHeight;
    tools.style.left = `${Math.round(lastRect.right - sentenceRect.left + gap)}px`;
    tools.style.top = `${Math.round(lastRect.top - sentenceRect.top + lastRect.height / 2 - toolsHeight / 2)}px`;
    tools.style.bottom = 'auto';
  } else {
    tools.style.left = '0px';
    tools.style.top = 'auto';
    tools.style.bottom = 'calc(100% - 1px)';
  }
}

function sentenceCardHtml(sentence, index) {
  const previous = state.checkins.sentences[sentence.id];
  return `<span class="article-sentence" data-sentence-id="${escapeHtml(sentence.id)}" tabindex="0">
    <button class="sentence-play-btn" data-action="say-sentence" type="button" title="${SENTENCE_PLAY_TITLE}" aria-label="${SENTENCE_PLAY_TITLE}"><svg viewBox="0 0 16 14" aria-hidden="true"><path class="p-play" d="M4 0L16 7L4 14Z"/><rect class="p-stop" x="2" y="1" width="12" height="12" rx="2"/></svg></button>
    <span class="sentence-text">${sentenceTextHtml(sentence.text)}</span>
    <span class="sentence-marker">${previous ? `历史 ${previous.bestScore}` : ''}</span>
    <span class="sentence-tools" role="group" aria-label="第 ${index + 1} 句录音控件">
      <button class="primary record-btn" data-action="record" type="button">🎤 录音</button>
      <span class="timer">00:00</span>
      <button class="ghost play-btn" data-action="play" type="button" hidden>▶ 回放</button>
      <button class="ghost upload-btn" data-action="upload" type="button" title="上传这句话的音频">上传</button>
      <input class="sentence-file" type="file" accept=".wav,.mp3,.m4a,.flac,.ogg,audio/*" hidden />
      <span class="sentence-status"></span>
    </span>
    <span class="meter"><span class="meter-fill"></span></span>
  </span>`;
}

function renderSentenceCards() {
  const lesson = currentLesson();
  $('sentenceCards').innerHTML = lesson
    ? lesson.sentences.map((sentence, index) => sentenceCardHtml(sentence, index)).join('')
    : '';
}

function sentenceById(sentenceId) {
  return currentLesson()?.sentences.find((sentence) => sentence.id === sentenceId);
}

function cardById(sentenceId) {
  return $('sentenceCards').querySelector(`[data-sentence-id="${CSS.escape(sentenceId)}"]`);
}

function countsBadges(counts = {}, mock = false) {
  return [
    mock ? '<span class="badge bad">模拟数据</span>' : '',
    counts.ok ? `<span class="badge ok">正确 ${counts.ok}</span>` : '',
    counts.tone ? `<span class="badge tone">声调错 ${counts.tone}</span>` : '',
    counts.initial ? `<span class="badge warn">声母错 ${counts.initial}</span>` : '',
    counts.final ? `<span class="badge warn">韵母错 ${counts.final}</span>` : '',
    counts.syllable ? `<span class="badge bad">整体错 ${counts.syllable}</span>` : '',
    counts.missing ? `<span class="badge bad">漏读 ${counts.missing}</span>` : '',
    counts.extra ? `<span class="badge bad">多读 ${counts.extra}</span>` : '',
  ].join('');
}

function syllablesHtml(items = []) {
  return items.map((item) => {
    const say = item.char && CJK.test(item.char)
      ? ` data-say="${escapeHtml(item.char)}" role="button" tabindex="0" aria-label="播放${escapeHtml(item.char)}的标准发音"`
      : '';
    return `<div class="syl ${item.kind}"${say} title="${escapeHtml(item.hint || '正确')}">
    <div class="char">${escapeHtml(item.char || (item.kind === 'extra' ? '＋' : '—'))}</div>
    <div class="exp">${escapeHtml(item.expected || '')}</div>
    <div class="act" style="color:${item.kind === 'tone' ? 'var(--tone)' : 'var(--bad)'}">${escapeHtml(item.actual || '✗')}</div>
  </div>`;
  }).join('');
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

function sentenceResultHtml(data, sentenceId = '') {
  const score = Math.round(data.score ?? 0);
  const passed = Boolean(data.passed ?? score >= data.threshold);
  const analysis = data.analysis;
  const take = sentenceId ? currentRun(sentenceId).take : null;
  return `<div class="sentence-score ${passed ? 'passed' : 'failed'}">
    <div class="sentence-score-line">
      <strong style="color:${ringColor(score, data.threshold)}">${score} 分</strong>
      <span>${passed ? '已通过' : '未通过'} · 合格线 ${data.threshold}${analysis ? ` · 音节正确率 ${analysis.syllableAccuracy}%` : ''}</span>
    </div>
    <div class="badges">${countsBadges(analysis?.counts, data.mock)}</div>
    ${analysis ? `<div class="sentence-detail">
      ${take ? `<audio class="syllable-recording" controls preload="metadata" src="${escapeHtml(take.url)}"></audio>` : ''}
      <div class="syllables">${syllablesHtml(analysis.items)}</div>
      ${jpCompareHtml(data.expectedJyutping, data.transcribedJyutping)}
      ${analysis.tips?.length ? `<ul class="tips">${analysis.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join('')}</ul>` : ''}
    </div>` : ''}
  </div>`;
}

function syncSentenceCard(sentenceId) {
  const card = cardById(sentenceId);
  if (!card) return;
  const run = currentRun(sentenceId);
  const previous = state.checkins.sentences[sentenceId];
  const recordButton = card.querySelector('.record-btn');
  const uploadButton = card.querySelector('.upload-btn');
  const playButton = card.querySelector('.play-btn');
  const marker = card.querySelector('.sentence-marker');

  recordButton.textContent = run.recording ? '⏹ 停止' : run.take ? '🎤 重录' : '🎤 录音';
  recordButton.classList.toggle('recording', run.recording);
  recordButton.disabled = Boolean(recordingId && recordingId !== sentenceId) || run.scoring || state.batchScoring;
  uploadButton.disabled = Boolean(recordingId) || run.scoring || state.batchScoring;
  playButton.hidden = !run.take;
  playButton.disabled = run.recording || run.scoring;

  if (run.scoring) marker.textContent = '评分中…';
  else if (run.result) marker.innerHTML = `<strong style="color:${ringColor(run.result.score, run.result.threshold)}">${Math.round(run.result.score)} 分</strong>`;
  else if (run.take) marker.textContent = '● 已录';
  else marker.textContent = previous ? `历史 ${previous.bestScore}` : '';

  card.querySelector('.sentence-status').textContent = run.error || (run.scoring ? '评分中…' : '');
  card.classList.toggle('has-take', Boolean(run.take));
  card.classList.toggle('has-result', Boolean(run.result));
  card.classList.toggle('is-recording', run.recording);
}

function syncAllCards() {
  for (const sentence of currentLesson()?.sentences || []) syncSentenceCard(sentence.id);
  syncBatchActions();
}

function syncBatchActions() {
  const lesson = currentLesson();
  const recorded = lesson?.sentences.filter((sentence) => currentRun(sentence.id).take).length || 0;
  const total = lesson?.sentences.length || 0;
  const button = $('scoreAllBtn');
  button.disabled = !recorded || Boolean(recordingId) || state.batchScoring;
  button.textContent = state.batchScoring
    ? `正在评分 ${state.batchProgress} / ${recorded}`
    : `评分已录音内容${recorded ? `（${recorded} 句）` : ''}`;
  $('batchStatus').textContent = state.batchScoring
    ? '正在逐句评分，请稍候。'
    : '';
  $('sentenceCount').textContent = `已录 ${recorded} / ${total}`;
}

function setTake(sentenceId, blob, name, source, extra = '') {
  const run = currentRun(sentenceId);
  stopPlayback();
  if (run.take?.url) URL.revokeObjectURL(run.take.url);
  run.take = { blob, name, source, extra, url: URL.createObjectURL(blob) };
  run.error = '';
  syncSentenceCard(sentenceId);
  syncBatchActions();
  renderLessonSummary();
}

function scoredRuns() {
  const lesson = currentLesson();
  return lesson ? lesson.sentences.map((sentence) => ({ sentence, run: currentRun(sentence.id) })).filter(({ run }) => run.result) : [];
}

function combinedResult() {
  const lesson = currentLesson();
  const scored = scoredRuns();
  if (!lesson || !scored.length) return null;
  let weightedScore = 0;
  let totalWeight = 0;
  const counts = {};
  for (const { sentence, run } of scored) {
    const weight = run.result.analysis?.expectedCount || [...sentence.text].filter((char) => CJK.test(char)).length || 1;
    weightedScore += Number(run.result.score || 0) * weight;
    totalWeight += weight;
    for (const [kind, count] of Object.entries(run.result.analysis?.counts || {})) counts[kind] = (counts[kind] || 0) + count;
  }
  const threshold = scored[0].run.result.threshold ?? 90;
  const complete = scored.length === lesson.sentences.length;
  const restored = scored.every(({ run }) => run.restored);
  return {
    lesson,
    scored,
    score: Math.round(weightedScore / totalWeight),
    threshold,
    complete,
    passed: complete && scored.every(({ run }) => Boolean(run.result.passed ?? run.result.score >= threshold)),
    counts,
    mock: scored.some(({ run }) => run.result.mock),
    restored,
    restoredAt: restored ? scored.find(({ run }) => run.restoredAt)?.run.restoredAt || '' : '',
  };
}

function renderLessonSummary() {
  const lesson = currentLesson();
  const summary = combinedResult();
  const completed = summary?.scored.length || 0;
  $('lessonProgress').textContent = lesson
    ? summary?.restored
      ? completed === lesson.sentences.length ? '上次已完成' : `上次已评分 ${completed} / ${lesson.sentences.length}`
      : completed === lesson.sentences.length
        ? '已完成'
        : completed ? `已评分 ${completed} / ${lesson.sentences.length}` : '未评分'
    : '';

  const box = $('lessonSummary');
  if (!summary) {
    box.hidden = true;
    box.innerHTML = '';
    return;
  }
  box.hidden = false;
  const headline = summary.restored
    ? summary.complete
      ? summary.passed ? '上一次评分：全部句子通过' : '上一次评分：有句子未通过'
      : `上一次评分：已完成 ${summary.scored.length} / ${summary.lesson.sentences.length} 句`
    : summary.complete
      ? summary.passed ? '本课完成，全部句子通过' : '本课完成，建议重练未通过的句子'
      : `本课进行中，已完成 ${summary.scored.length} / ${summary.lesson.sentences.length} 句`;
  box.innerHTML = `<div class="section-title">${summary.restored ? '上一次评分结果' : '本课合并结果'}</div>
    <div class="score-row">
      <div class="ring" style="--pct:${summary.score};--ring-color:${ringColor(summary.score, summary.threshold)}">
        <div><div class="num">${summary.score}</div><div class="unit">/ 100</div></div>
      </div>
      <div class="verdict">
        <div class="headline">${headline}</div>
        <div class="muted tiny">${summary.restored && summary.restoredAt ? `${escapeHtml(summary.restoredAt)} · ` : ''}${summary.complete ? '按每句标准音节数加权合并' : '当前已评分句子的加权分'} · 合格线 ${summary.threshold}</div>
        <div class="badges">${countsBadges(summary.counts, summary.mock)}</div>
      </div>
    </div>
    <div class="summary-sentences">${summary.scored.map(({ sentence, run }) => {
      const result = run.result;
      const sentenceNumber = summary.lesson.sentences.findIndex((item) => item.id === sentence.id) + 1;
      return `<details class="summary-result-sentence" ${result.passed ? '' : 'open'}>
        <summary>
          <span class="seg-idx">${sentenceNumber}</span>
          <span class="seg-text">${escapeHtml(sentence.text)}</span>
          <span class="seg-acc" style="color:${ringColor(result.score, result.threshold)}">${Math.round(result.score)} 分</span>
        </summary>
        ${sentenceResultHtml(result, sentence.id)}
      </details>`;
    }).join('')}</div>`;
  if (summary.complete && !summary.restored && !state.batchScoring && !state.summarySaved) pushLessonHistory(summary);
}

function applyCheckins(summary) {
  if (!summary) return;
  state.checkins = summary;
  renderDayList();
  updateStats();
  if (currentLesson()) {
    $('lessonTag').innerHTML = lessonTagHtml(currentLesson());
    syncAllCards();
  }
}

/* --------------------------------- 评分 ---------------------------------- */

async function scoreSentence(sentenceId) {
  const lesson = currentLesson();
  const sentence = sentenceById(sentenceId);
  const run = currentRun(sentenceId);
  if (!lesson || !sentence || !run.take || run.scoring) return;
  const session = state.session;
  run.scoring = true;
  run.error = '';
  syncSentenceCard(sentenceId);

  const form = new FormData();
  form.append('audio', run.take.blob, run.take.name);
  form.append('day', lesson.day);
  form.append('collection', state.collection);
  form.append('text', sentence.text);
  form.append('sentence_id', sentence.id);

  try {
    const response = await fetch('/api/score', { method: 'POST', body: form });
    const data = await response.json();
    applyCheckins(data.checkins);
    if (session !== state.session || state.day !== lesson.day) return;
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    run.result = data;
    run.restored = false;
    run.restoredAt = '';
    run.error = `评分完成，用时 ${(data.elapsedMs / 1000).toFixed(1)}s`;
    state.summarySaved = false;
    return true;
  } catch (error) {
    if (session === state.session) run.error = `评分失败：${error.message || String(error)}`;
    return false;
  } finally {
    if (session === state.session) {
      run.scoring = false;
      syncSentenceCard(sentenceId);
      renderLessonSummary();
    }
  }
}

async function scoreRecordedSentences() {
  const lesson = currentLesson();
  if (!lesson || recordingId || state.batchScoring) return;
  const targets = lesson.sentences.filter((sentence) => currentRun(sentence.id).take);
  if (!targets.length) return;

  state.batchScoring = true;
  state.batchProgress = 0;
  syncAllCards();
  renderLessonSummary();

  let succeeded = 0;
  try {
    for (const sentence of targets) {
      if (await scoreSentence(sentence.id)) succeeded += 1;
      state.batchProgress += 1;
      syncBatchActions();
    }
  } finally {
    state.batchScoring = false;
    syncAllCards();
    renderLessonSummary();
    $('batchStatus').textContent = succeeded === targets.length
      ? `评分完成：${succeeded} 句已统一汇总。`
      : `已完成 ${succeeded} 句，${targets.length - succeeded} 句评分失败，可再次点击重试。`;
  }
}

async function toggleRecord(sentenceId) {
  const run = currentRun(sentenceId);
  const card = cardById(sentenceId);
  if (recordingId && recordingId !== sentenceId) {
    run.error = '请先停止另一句的录音。';
    syncSentenceCard(sentenceId);
    return;
  }
  if (recordingId === sentenceId && !recorder?.recording) {
    run.error = '正在等待麦克风启动，请稍候。';
    syncSentenceCard(sentenceId);
    return;
  }

  if (recordingId === sentenceId && recorder?.recording) {
    const { blob, seconds } = await recorder.stop();
    recorder = null;
    recordingId = null;
    run.recording = false;
    clearInterval(timerHandle);
    card.querySelector('.meter-fill').style.width = '0%';
    if (seconds < 0.4) {
      run.error = '录得太短了，请再来一次。';
    } else if (blob.size > 10 * 1024 * 1024) {
      run.error = `录了 ${Math.round(seconds)} 秒，超过接口 10MB 上限。`;
    } else {
      setTake(sentenceId, blob, `sentence-${sentenceId}.wav`, '麦克风录音', ` · ${seconds.toFixed(1)}s`);
      run.error = '录好了，可在下方统一评分。';
    }
    syncAllCards();
    return;
  }

  run.error = '';
  run.recording = true;
  stopPlayback();
  recordingId = sentenceId;
  const activeRecorder = new WavRecorder((peak) => {
    const activeCard = cardById(sentenceId);
    if (activeCard) activeCard.querySelector('.meter-fill').style.width = `${Math.min(100, peak * 180)}%`;
  });
  recorder = activeRecorder;
  syncAllCards();
  positionSentenceTools(card);
  renderLessonSummary();
  try {
    await activeRecorder.start();
    const started = Date.now();
    card.querySelector('.timer').textContent = '00:00';
    timerHandle = setInterval(() => {
      const seconds = (Date.now() - started) / 1000;
      card.querySelector('.timer').textContent = `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
    }, 200);
  } catch (error) {
    recorder = null;
    recordingId = null;
    run.recording = false;
    run.error = `拿不到麦克风：${error.message}（浏览器需要 localhost 或 https）`;
    syncAllCards();
  }
}

function handleUpload(sentenceId, file) {
  const run = currentRun(sentenceId);
  if (file.size > 10 * 1024 * 1024) {
    run.error = '文件超过 10MB，接口不接收。';
    syncSentenceCard(sentenceId);
    return;
  }
  setTake(sentenceId, file, file.name, '上传文件');
  run.error = '已选择文件，可在下方统一评分。';
  syncSentenceCard(sentenceId);
}

/* ------------------------------- 点读与发音 ------------------------------- */
// 朗读音源：words.hk 粤拼音节库（public/jyutping-audio/，每个粤拼音节一个小 mp3）。
// 字→粤拼走 /api/jyutping（to-jyutping 词典分词，多音字按词语取读音），前端用 Web Audio 逐音节拼接播放，
// 不再依赖浏览器 TTS / 在线 TTS 代理。

const SYLLABLE_AUDIO_DIR = '/jyutping-audio';
const CHAR_GAP_MS = 280; // 逐字朗读时字与字之间的停顿
const BUFFER_CACHE_MAX = 600; // 解码后的音节缓存上限，600 个约 15MB 内存

let audioContext = null;
let hoverPrefetchTimer = 0;
const activeSources = new Set(); // 正在发声的 Web Audio 节点，stopPlayback 统一停掉
const jyutpingCache = new Map(); // 文本 -> Promise<Array<{char, jp}>>
const syllableBufferCache = new Map(); // 音节 -> Promise<AudioBuffer|null>，null 表示音源缺这个音节

function speakContext() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === 'suspended') audioContext.resume().catch(() => { });
  return audioContext;
}

// /api/jyutping 一次最多 100 字，长文本分块查；结果按整段文本缓存，整句连播与单字点读共用
function fetchJyutping(text) {
  const cached = jyutpingCache.get(text);
  if (cached) return cached;
  const chars = [...text];
  const chunks = [];
  for (let i = 0; i < chars.length; i += 90) chunks.push(chars.slice(i, i + 90).join(''));
  const pending = Promise.all(chunks.map((chunk) =>
    fetch(`/api/jyutping?text=${encodeURIComponent(chunk)}`)
      .then((response) => (response.ok ? response.json() : { items: [] }))
      .then((data) => data.items || [])
      .catch(() => [])
  )).then((lists) => lists.flat());
  jyutpingCache.set(text, pending);
  return pending;
}

// 音节 mp3 → AudioBuffer；音源缺失或解码失败缓存 null，播放时跳过该音节
function fetchSyllableBuffer(syllable) {
  const cached = syllableBufferCache.get(syllable);
  if (cached) return cached;
  const pending = (async () => {
    try {
      const response = await fetch(`${SYLLABLE_AUDIO_DIR}/${syllable}.mp3`);
      if (!response.ok) return null;
      return await speakContext().decodeAudioData(await response.arrayBuffer());
    } catch {
      return null;
    }
  })();
  syllableBufferCache.set(syllable, pending);
  if (syllableBufferCache.size > BUFFER_CACHE_MAX) {
    const oldest = syllableBufferCache.keys().next().value;
    syllableBufferCache.delete(oldest);
  }
  return pending;
}

function stopSyllableSources() {
  for (const source of activeSources) {
    try { source.stop(); } catch { }
  }
  activeSources.clear();
}

// 悬停预热：把一段文本的粤拼和全部音节音频提前拉好，点击播放时零等待
async function prefetchAudio(text) {
  const items = (await fetchJyutping(text)).filter((item) => item.jp);
  await Promise.allSettled(items.flatMap((item) => String(item.jp).split(/\s+/).filter(Boolean))
    .map((syllable) => fetchSyllableBuffer(syllable)));
}

// 播完一个音节；被打断（stop）时 onended 也会触发，Promise 正常结束，由外层用 token 退出
function playBuffer(context, buffer) {
  return new Promise((resolve) => {
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    const finish = () => {
      activeSources.delete(source);
      clearTimeout(guard);
      resolve();
    };
    const guard = setTimeout(finish, buffer.duration * 1000 + 400); // onended 兜底
    source.onended = finish;
    activeSources.add(source);
    try {
      source.start();
    } catch (error) {
      finish();
    }
  });
}

// 逐字播一段粤拼。items: [{ char, jp, charEl? }]；onStart/onEnd 驱动整句连播的逐字高亮。
// 返回因缺音源而跳过的字数。
async function speakItems(items, { token, onStart, onEnd } = {}) {
  const context = speakContext();
  const missing = new Set();
  // Promise.all 的结果保持 items 顺序，播放顺序才不会因音节下载完成先后而乱
  const resolved = await Promise.all(items.map(async (item) => {
    const buffers = [];
    // 常规一字一音节；这里仍按多音节兼容，防止上游返回带空格的连拼
    for (const syllable of String(item.jp).split(/\s+/).filter(Boolean)) {
      const buffer = await fetchSyllableBuffer(syllable);
      if (buffer) buffers.push(buffer);
      else missing.add(item.char);
    }
    return { item, buffers };
  }));
  const planned = resolved.filter((entry) => entry.buffers.length);
  if (token !== sayToken) return missing.size;
  for (const { item, buffers } of planned) {
    if (token !== sayToken) return missing.size;
    onStart?.(item);
    for (const buffer of buffers) await playBuffer(context, buffer);
    onEnd?.(item);
    if (token !== sayToken) return missing.size;
    await new Promise((resolve) => setTimeout(resolve, CHAR_GAP_MS));
  }
  return missing.size;
}

async function say(text, element = null) {
  if (!text) return;
  stopPlayback();
  const token = ++sayToken;
  try {
    // 课文里点的字优先用整句分词后的粤拼（多音字按词语取读音）；句内查不到再回退单字查询
    let items = null;
    if (text.length === 1 && element) {
      const card = element.closest('[data-sentence-id]');
      const chars = card ? [...card.querySelectorAll('.sentence-text .article-char')] : [];
      const index = chars.indexOf(element);
      const sentenceText = card?.querySelector('.sentence-text')?.textContent;
      if (index >= 0 && sentenceText) {
        const sentenceItems = (await fetchJyutping(sentenceText)).filter((item) => CJK.test(item.char));
        if (token !== sayToken) return;
        if (sentenceItems[index]?.jp) items = [sentenceItems[index]];
      }
    }
    if (!items) {
      items = (await fetchJyutping(text)).filter((item) => item.jp);
      if (token !== sayToken) return;
    }
    if (!items.length) {
      $('pageStatus').textContent = '没有查到汉字读音，输入至少一个汉字试试。';
      return;
    }
    const missing = await speakItems(items, { token });
    if (token === sayToken && missing) $('pageStatus').textContent = `有 ${missing} 个字暂无音节音频，已跳过。`;
  } catch (error) {
    if (token === sayToken) $('pageStatus').textContent = `发音失败：${error.message}`;
  }
}

// 整句连播：整句文本一次查好粤拼（词典分词，多音字读音按词取准），逐字拼接播放并高亮。
// 播放中按钮变停止钮；再点一次、点别的字 / 别句 / 录音都会经 stopPlayback 打断——
// 它把 sayToken +1，循环在下一次检查时退出。
async function playSentenceChars(card) {
  const chars = [...card.querySelectorAll('.sentence-text .article-char')];
  const button = card.querySelector('.sentence-play-btn');
  if (!chars.length || !button) return;
  stopPlayback();
  const token = ++sayToken;
  sentencePlayButton = button;
  button.classList.add('speaking');
  button.title = '停止播放';
  try {
    // 用句子全文查粤拼（保留标点，分词更准）。粤拼条目按文本顺序一个不落（标点/拉丁也有条目但无粤拼，
    // 生僻字可能超出前端渲染范围），所以只对前端会渲染成字按钮的 CJK 字推进下标，保证高亮对得齐。
    const text = card.querySelector('.sentence-text')?.textContent || chars.map((el) => el.dataset.say).join('');
    const items = await fetchJyutping(text);
    if (token !== sayToken) return;
    const planned = [];
    let cursor = 0;
    for (const item of items) {
      if (!CJK.test(item.char)) continue; // 标点 / 拉丁：没有字按钮
      const charEl = chars[cursor] || null;
      cursor += 1;
      if (!item.jp) continue; // 这个字查不到粤拼，播放时也会跳过
      planned.push({ ...item, charEl });
    }
    const missing = await speakItems(planned, {
      token,
      onStart: (item) => item.charEl?.classList.add('speaking'),
      onEnd: (item) => item.charEl?.classList.remove('speaking'),
    });
    if (token === sayToken && missing) $('pageStatus').textContent = `有 ${missing} 个字暂无音节音频，已跳过。`;
  } catch (error) {
    if (token === sayToken) $('pageStatus').textContent = `发音失败：${error.message}`;
  } finally {
    // token 已被更新的播放接管时，按钮的高亮由新的那次负责
    if (token === sayToken) {
      button.classList.remove('speaking');
      button.title = SENTENCE_PLAY_TITLE;
      sentencePlayButton = null;
    }
  }
}

/* --------------------------------- 查字典 --------------------------------- */

const DICT_EXAMPLES = ['食', '着数', '早晨', '你好', '唔该', '多谢', '几多钱', '零一二三四五六七八九十'];
const DICT_HISTORY_KEY = 'yueyu_dict_history';
const DICT_HISTORY_LIMIT = 10;
const DICT_LOOKUP_DELAY = 250;
const dictCache = new Map(); // query -> 接口结果，会话内复用
let dictTimer = 0;
let dictRequestId = 0;
let dictLastQuery = '';
let dictInited = false;

function loadDictHistory() {
  try {
    const list = JSON.parse(localStorage.getItem(DICT_HISTORY_KEY) || '[]');
    return Array.isArray(list) ? list.filter((item) => typeof item === 'string' && item.trim()) : [];
  } catch {
    return [];
  }
}

// 查到过读音的词才进历史：最近在前去重，最多 10 条
function pushDictHistory(term) {
  const list = loadDictHistory().filter((item) => item !== term);
  // 输入法逐字上屏会先查到前缀中间态（「你」→「你好」）：最新一条是新词的前缀时原地替换，不堆中间记录
  if (list.length && term.startsWith(list[0])) list.shift();
  list.unshift(term);
  localStorage.setItem(DICT_HISTORY_KEY, JSON.stringify(list.slice(0, DICT_HISTORY_LIMIT)));
  renderDictExamples();
}

// 词条行：有历史搜索就显示历史（可清空），还没有则显示示例词
function renderDictExamples() {
  const history = loadDictHistory();
  const chips = (history.length ? history : DICT_EXAMPLES)
    .map((term) => `<button class="chip" data-dict-example="${escapeHtml(term)}" type="button">${escapeHtml(term)}</button>`)
    .join('');
  $('dictExamples').innerHTML = `
    ${history.length ? '<span class="dict-hist-label">最近搜索</span>' : ''}
    ${chips}
    ${history.length ? '<button class="chip dict-hist-clear" data-dict-history-clear type="button" title="清空历史搜索">清空</button>' : ''}`;
}

function openDict() {
  if (dictInited) return;
  dictInited = true;
  renderDictExamples();
  const saved = localStorage.getItem('yueyu_dict_query') || '';
  if (saved) {
    $('dictSearch').value = saved;
    lookupDict(true);
  } else {
    renderDictIdle();
  }
}

function renderDictIdle() {
  dictLastQuery = '';
  dictRequestId += 1;
  $('dictPlay').hidden = true;
  $('dictStats').textContent = '';
  $('dictResult').innerHTML = '<p class="muted tiny dict-empty">输入一个字（如：食）或一句话（如：今日天气好好），立即查每个字的粤拼和发音。</p>';
}

// 粤拼里的声调数字换个颜色，一眼看清读第几声
function dictJpHtml(jp) {
  const match = String(jp).match(/^([a-z]+)([1-9])$/);
  return match ? `${escapeHtml(match[1])}<i>${match[2]}</i>` : escapeHtml(String(jp));
}

function dictCharCardHtml(item) {
  if (!item.jp) {
    return `<span class="dict-char plain">${escapeHtml(item.char)}</span>`;
  }
  const contour = String(item.toneName || '').replace(/^第.声\s*/, '');
  const title = `点读「${item.char}」\n声母 ${item.initial || '（零声母）'} · 韵母 -${item.final}\n${item.toneName || ''}`;
  return `<button class="dict-char" type="button" data-say="${escapeHtml(item.char)}" title="${escapeHtml(title)}">
    <span class="dc-char">${escapeHtml(item.char)}</span>
    <span class="dc-jp">${dictJpHtml(item.jp)}</span>
    <span class="dc-tone">${escapeHtml(contour)}</span>
  </button>`;
}

// 单字查询时的详情卡：声母 / 韵母 / 声调拆开讲，多音字列出其他读法
function dictSingleHtml(item) {
  const readings = (item.readings || [])
    .map((reading) => `<span class="dict-reading" title="这个字还有一种读法">${dictJpHtml(reading)}</span>`)
    .join('');
  return `<div class="dict-single">
    <span class="dict-single-char" data-say="${escapeHtml(item.char)}" role="button" tabindex="0" aria-label="播放「${escapeHtml(item.char)}」的发音" title="点击听「${escapeHtml(item.char)}」的发音">${escapeHtml(item.char)}</span>
    <div class="dict-single-info">
      <span class="dict-single-jp">${dictJpHtml(item.jp)}</span>
      <div class="dict-single-meta">
        <span>声母 <b>${escapeHtml(item.initial || '（零声母）')}</b></span>
        <span>韵母 <b>-${escapeHtml(item.final)}</b></span>
        <span>声调 <b>${escapeHtml(item.toneName || String(item.tone ?? ''))}</b></span>
      </div>
      ${readings ? `<div class="dict-single-readings"><span class="muted tiny">又读</span>${readings}<span class="muted tiny">多音字，词语里读音可能不同</span></div>` : ''}
    </div>
  </div>`;
}

function renderDict(data) {
  const items = data.items || [];
  const found = items.filter((item) => item.jp);
  $('dictStats').textContent = found.length ? `${found.length} / ${items.length} 个字有粤拼` : '';
  if (!found.length) {
    $('dictResult').innerHTML = '<p class="muted tiny dict-empty">没有查到汉字读音，输入至少一个汉字试试（简体繁体都可以）。</p>';
    return;
  }

  // 单字查询直接给详情卡；句子查询给整句粤拼行 + 逐字卡片
  const isSingleChar = [...data.text].length === 1 && items[0]?.jp;
  $('dictResult').innerHTML = `
    ${isSingleChar ? dictSingleHtml(items[0]) : `
      <div class="dict-jp-line" title="整句粤拼">${items.map((item) => item.jp
        ? `<span class="dict-jp-token">${dictJpHtml(item.jp)}</span>`
        : `<span class="dict-jp-punct">${escapeHtml(item.char)}</span>`).join('')}</div>
      <div class="dict-chars">${items.map(dictCharCardHtml).join('')}</div>`}`;
}

function applyDictResult(query, data) {
  if (dictLastQuery !== query) return;
  renderDict(data);
  const found = (data.items || []).some((item) => item.jp);
  const play = $('dictPlay');
  play.hidden = !found;
  play.dataset.say = query;
  if (found) pushDictHistory(query);
}

async function lookupDict(immediate = false) {
  const query = $('dictSearch').value.trim();
  clearTimeout(dictTimer);
  if (!query) {
    renderDictIdle();
    return;
  }
  const run = async () => {
    dictLastQuery = query;
    localStorage.setItem('yueyu_dict_query', query);
    const cached = dictCache.get(query);
    if (cached) {
      applyDictResult(query, cached);
      return;
    }
    const id = ++dictRequestId;
    $('dictResult').innerHTML = '<p class="muted tiny dict-loading">查询中…</p>';
    try {
      const response = await fetch(`/api/jyutping?text=${encodeURIComponent(query)}`);
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
      dictCache.set(query, data);
      if (id === dictRequestId) applyDictResult(query, data);
    } catch (error) {
      if (id !== dictRequestId) return;
      dictLastQuery = '';
      $('dictStats').textContent = '';
      $('dictResult').innerHTML = `<p class="dict-error">查询失败：${escapeHtml(error.message || String(error))}</p>`;
    }
  };
  if (immediate) run();
  else dictTimer = setTimeout(run, DICT_LOOKUP_DELAY);
}

/* --------------------------------- 历史 ---------------------------------- */

const HISTORY_LIMIT = 50;
const AUDIO_KEEP = 20;
const sessionAudio = new Map();

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem('yueyu_history') || '[]');
  } catch {
    return [];
  }
}

function pushLessonHistory(summary) {
  state.summarySaved = true;
  const id = `h${Date.now()}`;
  const entry = {
    id,
    at: new Date().toLocaleString('zh-CN', { hour12: false }),
    day: summary.lesson.day,
    collection: state.collection,
    text: `Day ${summary.lesson.day} · ${summary.lesson.title}`,
    score: summary.score,
    passed: summary.passed,
    threshold: summary.threshold,
    mock: summary.mock,
    counts: summary.counts,
    sentences: summary.lesson.sentences.map((sentence) => {
      const run = currentRun(sentence.id);
      const data = run.result;
      if (run.take) sessionAudio.set(`${id}:${sentence.id}`, URL.createObjectURL(run.take.blob));
      return {
        id: sentence.id,
        text: sentence.text,
        score: Math.round(data.score ?? 0),
        passed: Boolean(data.passed ?? data.score >= data.threshold),
        threshold: data.threshold,
        expected: data.expectedJyutping || '',
        transcribed: data.transcribedJyutping || '',
        accuracy: data.analysis?.syllableAccuracy ?? null,
        counts: data.analysis?.counts || null,
        tips: data.analysis?.tips || [],
        items: data.analysis?.items?.map(({ char, expected, actual, kind, label, hint }) => ({ char, expected, actual, kind, label, hint })) || [],
      };
    }),
  };
  const history = loadHistory();
  history.unshift(entry);
  try {
    localStorage.setItem('yueyu_history', JSON.stringify(history.slice(0, HISTORY_LIMIT)));
  } catch {
    localStorage.setItem('yueyu_history', JSON.stringify(history.slice(0, 15)));
  }
  while (sessionAudio.size > AUDIO_KEEP) {
    const key = sessionAudio.keys().next().value;
    URL.revokeObjectURL(sessionAudio.get(key));
    sessionAudio.delete(key);
  }
  renderHistory();
  updateHistoryStats();
}

function legacyHistoryDetailHtml(item) {
  if (!item.items?.length) return '<div class="h-detail"><p class="muted tiny">这条旧记录没有纠音详情。</p></div>';
  const audio = sessionAudio.get(item.id);
  return `<div class="h-detail">
    <div class="muted tiny">合格线 ${item.threshold ?? 90} · ${item.passed ? '已通过' : '未通过'}${item.accuracy != null ? ` · 音节正确率 ${item.accuracy}%` : ''}</div>
    <div class="badges">${countsBadges(item.counts, item.mock)}</div>
    <div class="syllables">${syllablesHtml(item.items)}</div>
    ${jpCompareHtml(item.expected, item.transcribed)}
    ${item.tips?.length ? `<ul class="tips">${item.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join('')}</ul>` : ''}
    <div class="controls">
      ${item.sentenceId ? `<button class="ghost tiny-btn" data-again-sentence="${escapeHtml(item.sentenceId)}" data-day="${item.day}" type="button">再练一次</button>` : ''}
      ${audio ? `<audio controls src="${audio}"></audio>` : ''}
    </div>
  </div>`;
}

function historyDetailHtml(item) {
  if (!item.sentences?.length) return legacyHistoryDetailHtml(item);
  return `<div class="h-detail">
    <div class="muted tiny">逐句评分后按标准音节数加权 · 合格线 ${item.threshold} · ${item.passed ? '全部通过' : '有句子未通过'}</div>
    <div class="badges">${countsBadges(item.counts, item.mock)}</div>
    <div class="history-sentences">${item.sentences.map((sentence, index) => {
      const audio = sessionAudio.get(`${item.id}:${sentence.id}`);
      return `<details class="history-sentence" ${sentence.passed ? '' : 'open'}>
        <summary>
          <span class="hs-title">${index + 1}. ${escapeHtml(sentence.text)}</span>
          <span class="hs-right">
            <span class="badge ${sentence.passed ? 'ok' : 'bad'}">${sentence.passed ? '通过' : '未通过'}</span>
            <strong style="color:${ringColor(sentence.score, sentence.threshold)}">${sentence.score} 分</strong>
          </span>
        </summary>
        <div class="badges">${countsBadges(sentence.counts)}${sentence.accuracy != null ? `<span class="badge">音节正确率 ${sentence.accuracy}%</span>` : ''}</div>
        ${sentence.items?.length ? `<div class="syllables">${syllablesHtml(sentence.items)}</div>${jpCompareHtml(sentence.expected, sentence.transcribed)}` : ''}
        ${audio ? `<audio controls src="${audio}"></audio>` : ''}
        <div class="hs-actions"><button class="ghost tiny-btn" data-again-sentence="${escapeHtml(sentence.id)}" data-day="${item.day}" type="button">再练这句</button></div>
      </details>`;
    }).join('')}</div>
    <div class="hs-actions"><button class="ghost tiny-btn" data-again-lesson="${item.day}" type="button">再练这一课</button></div>
  </div>`;
}

function historyMatches(item) {
  if (state.historyFilter === 'passed' && !item.passed) return false;
  if (state.historyFilter === 'failed' && item.passed) return false;
  const query = state.historyQuery.toLowerCase();
  if (!query) return true;
  if (item.text?.toLowerCase().includes(query)) return true;
  return item.sentences?.some((sentence) => sentence.text?.toLowerCase().includes(query)) || false;
}

// 记录 id 是 h+时间戳，用于排序；老记录退回解析时间字符串
function historySortKey(item) {
  const idNum = Number(String(item.id || '').replace(/^h/, ''));
  if (Number.isFinite(idNum) && idNum > 0) return idNum;
  const parsed = Date.parse(String(item.at || '').replace(/\//g, '-'));
  return Number.isFinite(parsed) ? parsed : 0;
}

function historyRunHtml(item, collectionName, showCollection) {
  const scoreColor = item.passed ? 'var(--accent)' : item.score >= 70 ? 'var(--warn)' : 'var(--bad)';
  const time = String(item.at || '').split(' ')[1] || '';
  return `<li class="h-run" data-hid="${escapeHtml(item.id || '')}">
    <div class="h-row" role="button" tabindex="0" aria-expanded="false">
      <span class="h-caret">▸</span>
      <span class="h-score" style="color:${scoreColor}">${item.score}<i>分</i></span>
      <div class="h-main">
        <div class="h-text">${escapeHtml(item.text)}${showCollection && collectionName ? ` <span class="badge">${escapeHtml(collectionName)}</span>` : ''}</div>
        <div class="h-meta">${[
          time,
          item.sentences ? `${item.sentences.length} 句` : '',
          `合格线 ${item.threshold ?? 90}`,
          item.passed ? '全部通过' : '有句子未通过',
        ].filter(Boolean).join(' · ')}</div>
      </div>
      <div class="h-badges">${countsBadges(item.counts, item.mock)}</div>
    </div>
    ${historyDetailHtml(item)}
  </li>`;
}

function renderHistory() {
  const filtered = loadHistory().filter(historyMatches);
  if (!filtered.length) {
    $('history').innerHTML = `<li class="h-empty">${loadHistory().length ? '没有符合条件的记录，换个筛选条件试试。' : '还没有练习记录，回首页录一句评分后会自动存到这里。'}</li>`;
    return;
  }

  // 按打卡日期分组，组内新→旧，组间按日期倒序
  const groups = new Map();
  for (const item of filtered) {
    const datePart = String(item.at || '').split(' ')[0] || '未知时间';
    if (!groups.has(datePart)) groups.set(datePart, []);
    groups.get(datePart).push(item);
  }
  const collectionNames = new Map(state.collections.map((c) => [c.id, c.name]));
  const multiCollection = new Set(filtered.map((item) => item.collection || 'original')).size > 1;

  const groupList = [...groups.entries()]
    .map(([date, items]) => ({ date, items, sortKey: historySortKey(items[0]) }))
    .sort((a, b) => b.sortKey - a.sortKey);

  const WEEKDAYS = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  $('history').innerHTML = groupList.map(({ date, items }) => {
    const best = Math.max(...items.map((item) => Number(item.score) || 0));
    const [y, m, d] = date.split('/').map(Number);
    const dateObj = y && m && d ? new Date(y, m - 1, d) : null;
    const weekday = dateObj && !Number.isNaN(dateObj.getTime()) ? ` · ${WEEKDAYS[dateObj.getDay()]}` : '';
    const runs = items.map((item) => historyRunHtml(item, collectionNames.get(item.collection), multiCollection)).join('');
    return `<li class="h-group">
      <div class="h-group-head">
        <span class="h-group-title">${escapeHtml(date)}${weekday}</span>
        <span class="h-group-meta">练 ${items.length} 次 · 最高 ${best} 分</span>
      </div>
      <ul class="h-group-runs">${runs}</ul>
    </li>`;
  }).join('');
}

function toggleHistoryItem(item) {
  const open = item.classList.toggle('open');
  item.querySelector('.h-row')?.setAttribute('aria-expanded', String(open));
  item.querySelector('.h-caret').textContent = open ? '▾' : '▸';
}

function updateHistoryStats() {
  const history = loadHistory().filter(historyMatches);
  if (!history.length) {
    $('historyStats').textContent = loadHistory().length ? '没有符合条件的记录' : '';
    return;
  }
  const average = Math.round(history.reduce((total, item) => total + Number(item.score || 0), 0) / history.length);
  const passed = history.filter((item) => item.passed).length;
  const total = loadHistory().length;
  const suffix = history.length < total ? `（共 ${total} 条）` : '';
  $('historyStats').textContent = `${history.length} 次 · 平均 ${average} 分 · 通过率 ${Math.round((passed / history.length) * 100)}%${suffix}`;
}

/* --------------------------------- 交互 ---------------------------------- */

function scrollToEl(element) {
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function switchView(view) {
  const history = view === 'history';
  $('tabHome').classList.toggle('on', view === 'home');
  $('tabDict').classList.toggle('on', view === 'dict');
  $('tabHistory').classList.toggle('on', history);
  $('homeView').hidden = view !== 'home';
  $('historyView').hidden = !history;
  $('dictView').hidden = view !== 'dict';
  if (history) {
    renderHistory();
    updateHistoryStats();
  }
  if (view === 'dict') openDict();
  if (view !== 'home') window.scrollTo(0, 0);
}

const SIDEBAR_WIDTH_KEY = 'yueyu_lesson_width';
let resizeStart = null;

function setLessonWidth(width, persist = false) {
  const max = window.innerWidth <= 900 ? 520 : Math.max(240, Math.min(520, window.innerWidth - 480));
  const value = Math.round(Math.max(240, Math.min(max, Number(width) || 300)));
  document.documentElement.style.setProperty('--lesson-width', `${value}px`);
  $('layoutResizer').setAttribute('aria-valuemax', String(max));
  $('layoutResizer').setAttribute('aria-valuenow', String(value));
  if (persist) localStorage.setItem(SIDEBAR_WIDTH_KEY, String(value));
}

function stopLayoutResize(event) {
  if (!resizeStart) return;
  if (event?.pointerId != null && event.pointerId !== resizeStart.pointerId) return;
  resizeStart = null;
  document.body.classList.remove('resizing-layout');
  setLessonWidth($('dayList').closest('.lessons').getBoundingClientRect().width, true);
}

function bind() {
  const resizer = $('layoutResizer');
  setLessonWidth(Number(localStorage.getItem(SIDEBAR_WIDTH_KEY)) || 300);
  resizer.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    resizeStart = {
      pointerId: event.pointerId,
      x: event.clientX,
      width: $('dayList').closest('.lessons').getBoundingClientRect().width,
    };
    resizer.setPointerCapture(event.pointerId);
    document.body.classList.add('resizing-layout');
  });
  resizer.addEventListener('pointermove', (event) => {
    if (!resizeStart || event.pointerId !== resizeStart.pointerId) return;
    setLessonWidth(resizeStart.width + event.clientX - resizeStart.x);
  });
  resizer.addEventListener('pointerup', stopLayoutResize);
  resizer.addEventListener('pointercancel', stopLayoutResize);
  resizer.addEventListener('dblclick', () => setLessonWidth(300, true));
  resizer.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const width = $('dayList').closest('.lessons').getBoundingClientRect().width;
    setLessonWidth(width + (event.key === 'ArrowLeft' ? -20 : 20), true);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 900) return;
    const width = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--lesson-width')) || 300;
    setLessonWidth(width);
  });

  $('dayList').addEventListener('click', (event) => {
    const item = event.target.closest('.day-item');
    if (!item) return;
    $('search').value = '';
    state.query = '';
    if (selectDay(item.dataset.day) && window.innerWidth <= 900) scrollToEl($('lessonHeader'));
  });

  document.querySelectorAll('#filterChips .chip').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('#filterChips .chip').forEach((item) => item.classList.toggle('on', item === button));
    state.filter = button.dataset.filter;
    renderDayList();
  }));

  $('recentToggle').addEventListener('click', () => {
    state.recentOpen = !state.recentOpen;
    localStorage.setItem('yueyu_recent_open', state.recentOpen ? '1' : '0');
    renderRecentCheckins();
  });

  $('recentList').addEventListener('click', (event) => {
    const item = event.target.closest('.recent-item');
    if (!item || item.classList.contains('static')) return;
    const day = Number(item.dataset.day);
    if (!state.lessons.some((lesson) => lesson.day === day)) return;
    const sentenceId = item.dataset.sentenceId;
    if (selectDay(day) && sentenceId) setTimeout(() => scrollToEl(cardById(sentenceId)), 0);
  });

  let searchTimer;
  $('search').addEventListener('input', (event) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = event.target.value.trim();
      renderDayList();
    }, 150);
  });

  // 日期筛选：flatpickr 弹层日历（中文，样式随应用深浅主题），选完即时过滤
  datepicker = flatpickr('#dateSearch', {
    locale: 'zh',
    dateFormat: 'Y-m-d',
    onChange(selectedDates, dateStr) {
      state.date = dateStr;
      $('dateClear').hidden = !dateStr;
      renderDayList();
    },
  });
  $('dateClear').addEventListener('click', () => datepicker.clear());

  $('sortOrder').addEventListener('click', () => {
    state.sort = state.sort === 'asc' ? 'desc' : 'asc';
    $('sortOrder').textContent = state.sort === 'asc' ? '正序 ↑' : '倒序 ↓';
    renderDayList();
  });

  $('nextTodoBtn').addEventListener('click', () => {
    const start = Math.max(0, state.lessons.findIndex((lesson) => lesson.day === state.day));
    for (let offset = 1; offset <= state.lessons.length; offset++) {
      const lesson = state.lessons[(start + offset) % state.lessons.length];
      if (!isDayChecked(lesson.day)) {
        if (selectDay(lesson.day)) $('dayList').querySelector('.day-item.active')?.scrollIntoView({ block: 'nearest' });
        return;
      }
    }
    $('pageStatus').textContent = '全部课文都已经完成。';
  });

  $('sentenceCards').addEventListener('click', (event) => {
    const card = event.target.closest('[data-sentence-id]');
    if (!card) return;
    const sentenceId = card.dataset.sentenceId;
    const action = event.target.closest('[data-action]')?.dataset.action;
    if (action === 'record') toggleRecord(sentenceId);
    else if (action === 'upload') card.querySelector('.sentence-file').click();
    else if (action === 'say-sentence') {
      const button = card.querySelector('.sentence-play-btn');
      // 播这句时再点一次 = 停止
      if (sentencePlayButton === button) stopPlayback();
      else playSentenceChars(card);
    }
    else if (action === 'play') {
      stopPlayback();
      playbackAudio = new Audio(currentRun(sentenceId).take.url);
      playbackAudio.play().catch((error) => {
        currentRun(sentenceId).error = `回放失败：${error.message}`;
        syncSentenceCard(sentenceId);
      });
    }
  });

  $('sentenceCards').addEventListener('change', (event) => {
    const input = event.target.closest('.sentence-file');
    const file = input?.files?.[0];
    const card = input?.closest('[data-sentence-id]');
    if (file && card) handleUpload(card.dataset.sentenceId, file);
    if (input) input.value = '';
  });

  $('scoreAllBtn').addEventListener('click', scoreRecordedSentences);

  document.addEventListener('click', (event) => {
    const element = event.target.closest('[data-say]');
    if (!element) return;
    event.stopPropagation();
    element.classList.add('speaking');
    say(element.dataset.say, element).finally(() => element.classList.remove('speaking'));
  }, true);

  // 悬停预取：在字/播放键上停留 150ms 就提前拉好整句粤拼和音节音频，点击时零等待
  document.addEventListener('pointerover', (event) => {
    const sayElement = event.target.closest('[data-say]');
    const playButton = sayElement ? null : event.target.closest('.sentence-play-btn');
    clearTimeout(hoverPrefetchTimer);
    if (!sayElement && !playButton) return;
    hoverPrefetchTimer = setTimeout(() => {
      const sentenceText = playButton?.closest('[data-sentence-id]')?.querySelector('.sentence-text')?.textContent;
      const text = sentenceText || sayElement?.dataset.say;
      if (text) prefetchAudio(text).catch(() => { });
    }, 150);
  }, true);

  // 录音工具条摆位：悬停进新句子、键盘聚焦时重新计算（右侧优先，放不上方）
  let hoveredSentence = null;
  document.addEventListener('pointerover', (event) => {
    const sentence = event.target.closest('.article-sentence');
    if (sentence === hoveredSentence) return;
    hoveredSentence = sentence;
    if (sentence) positionSentenceTools(sentence);
  }, true);
  document.addEventListener('focusin', (event) => {
    const sentence = event.target.closest('.article-sentence');
    if (sentence) positionSentenceTools(sentence);
  }, true);

  document.addEventListener('keydown', (event) => {
    const element = event.target.closest('[data-say]');
    if (!element || !['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    element.click();
  });

  $('rate').addEventListener('change', (event) => {
    $('demoAudio').playbackRate = Number(event.target.value);
    $('slowAudio').playbackRate = Number(event.target.value);
  });

  $('collection').addEventListener('change', async (event) => {
    if (recordingId || state.batchScoring) {
      event.target.value = state.collection;
      $('pageStatus').textContent = recordingId ? '请先停止当前录音，再切换合集。' : '请等待本次评分完成，再切换合集。';
      return;
    }
    clearRuns();
    state.session += 1;
    state.collection = event.target.value;
    localStorage.setItem('yueyu_collection', state.collection);
    await loadCollection();
  });

  document.querySelectorAll('#historyFilterChips .chip').forEach((button) => button.addEventListener('click', () => {
    document.querySelectorAll('#historyFilterChips .chip').forEach((item) => item.classList.toggle('on', item === button));
    state.historyFilter = button.dataset.hfilter;
    renderHistory();
    updateHistoryStats();
  }));

  let historySearchTimer;
  $('historySearch').addEventListener('input', (event) => {
    clearTimeout(historySearchTimer);
    historySearchTimer = setTimeout(() => {
      state.historyQuery = event.target.value.trim();
      renderHistory();
      updateHistoryStats();
    }, 150);
  });

  $('history').addEventListener('click', (event) => {
    const againSentence = event.target.closest('[data-again-sentence]');
    const againLesson = event.target.closest('[data-again-lesson]');
    if (againSentence || againLesson) {
      event.stopPropagation();
      const button = againSentence || againLesson;
      const historyItem = button.closest('li[data-hid]');
      const entry = loadHistory().find((item) => item.id === historyItem?.dataset.hid);
      const targetCollection = entry?.collection || state.collections[0]?.id;
      switchView('home');
      const openLesson = () => {
        if (selectDay(Number(button.dataset.day || button.dataset.againLesson)) && againSentence) {
          setTimeout(() => scrollToEl(cardById(againSentence.dataset.againSentence)), 0);
        }
      };
      if (targetCollection && targetCollection !== state.collection) {
        state.collection = targetCollection;
        $('collection').value = targetCollection;
        localStorage.setItem('yueyu_collection', targetCollection);
        loadCollection().then(openLesson);
      } else {
        openLesson();
      }
      return;
    }
    if (event.target.closest('audio, details, button')) return;
    const item = event.target.closest('li[data-hid]');
    if (item) toggleHistoryItem(item);
  });

  $('history').addEventListener('keydown', (event) => {
    if (!['Enter', ' '].includes(event.key)) return;
    const row = event.target.closest('.h-row');
    if (!row) return;
    event.preventDefault();
    toggleHistoryItem(row.parentElement);
  });

  $('tabHome').addEventListener('click', () => switchView('home'));
  $('tabDict').addEventListener('click', () => switchView('dict'));
  $('tabHistory').addEventListener('click', () => switchView('history'));

  $('dictSearch').addEventListener('input', () => lookupDict());
  // type=search 的 search 事件：回车立即查，点 × 清空时回到空态
  $('dictSearch').addEventListener('search', () => lookupDict(true));
  $('dictExamples').addEventListener('click', (event) => {
    if (event.target.closest('[data-dict-history-clear]')) {
      localStorage.removeItem(DICT_HISTORY_KEY);
      renderDictExamples();
      return;
    }
    const chip = event.target.closest('[data-dict-example]');
    if (!chip) return;
    $('dictSearch').value = chip.dataset.dictExample;
    lookupDict(true);
  });

  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.target.matches('input, select, textarea, button') || event.metaKey || event.ctrlKey || event.altKey) return;
    if ($('homeView').hidden || event.code !== 'Space') return;
    event.preventDefault();
    const audio = $('demoAudio');
    if (!audio.hidden) audio.paused ? audio.play() : audio.pause();
  });
}

bind();
renderHistory();
loadData().catch((error) => {
  $('pageStatus').textContent = `加载课文失败：${error.message}`;
});
