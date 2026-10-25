// 粤语纠音台：整课文同页点读，逐句录音后由底部按钮统一评分。
import { createListeningTraining } from './listening.js';
import { createAudioPlayer } from './audio-player.js';

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
  checkins: { days: {}, sentences: {}, total: 0, activeDays: 0, recent: [], recentTotal: 0 },
  filter: 'todo',
  query: '',
  date: '', // 「全部日期」筛选：课文发布日期（标题前缀），只匹配课文名
  practiceDate: '', // 打卡日历选中的打卡记录日：只看那天练过的课文，与 date 互不相干
  sort: 'asc',
  recentOpen: localStorage.getItem('yueyu_recent_open') !== '0',
  calendarOpen: false,
  historyFilter: 'all',
  historyQuery: '',
  historyItems: null, // 服务端打卡明细重建的练习记录；null = 还没加载成功，先显示本机 localStorage 的
  session: 0,
  summarySaved: false,
  batchScoring: false,
  batchProgress: 0,
  batchTotal: 0,
  batchMode: '', // 'all' | 'failed'：本轮统一评分点的哪个按钮，进度文案跟着走
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
let demoPlayer = null;
let slowPlayer = null;

function stopPlayback() {
  playbackAudio?.pause();
  playbackAudio = null;
  stopSyllableSources();
  sayToken += 1;
  sentencePlayButton?.classList.remove('speaking');
  if (sentencePlayButton) sentencePlayButton.title = SENTENCE_PLAY_TITLE;
  sentencePlayButton = null;
  tonesPlayButton?.classList.remove('speaking');
  if (tonesPlayButton) tonesPlayButton.textContent = TONES_PLAY_TITLE;
  tonesPlayButton = null;
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
    fetch(`/api/checkins${query}`).then((response) => response.json()).catch(() => ({ days: {}, sentences: {}, total: 0, activeDays: 0, recent: [], recentTotal: 0 })),
  ]);
  state.lessons = data.lessons || [];
  state.checkins = checkins;
  state.day = null;
  state.query = '';
  state.filter = 'todo';
  state.date = '';
  state.practiceDate = '';
  $('search').value = '';
  if (datepicker) datepicker.clear(); else $('dateSearch').value = '';
  setStatusFilter('todo');
  updateStats();
  renderDayList();
  const visible = state.lessons.filter((lesson) => state.filter !== 'todo' || !state.checkins.days[String(lesson.day)]?.complete);
  if (state.lessons.length) selectDay((visible[0] || state.lessons[0]).day);
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

// 打卡日界线：凌晨 4 点前打的卡算前一天，「今天」从 4 点起算（与服务器 activeDays 同口径）。
// 统计/展示时把时间戳前移 4 小时再取日历日，即得到逻辑打卡日。
const DAY_CUTOFF_MS = 4 * 60 * 60 * 1000;
const logicalShift = (time) => new Date(time - DAY_CUTOFF_MS);
const logicalDayKey = (time) => {
  const d = logicalShift(time);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};
// 同口径但补零成 YYYY-MM-DD：打卡日历的块日期、flatpickr 的日期筛选都用这个格式
const paddedDayKey = (time) => {
  const d = logicalShift(time);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};
// 当前逻辑日（今天）的起点：今天 4 点；凌晨 0-4 点则是昨天 4 点
function startOfLogicalDay(now = new Date()) {
  const shifted = logicalShift(now.getTime());
  return new Date(shifted.getFullYear(), shifted.getMonth(), shifted.getDate()).getTime() + DAY_CUTOFF_MS;
}

// 最近打卡时间的展示口径：今天/昨天带时分，同年内「M/D HH:MM」，更早带年份。
// 这里是客观钟点（今天就是日历上的今天）；「凌晨 4 点前算前一天」只用于打卡统计，不影响时间标签。
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

// 状态 chip 的选中态只有这里改，别处（如打卡日历选日期）要切状态也走这个
function setStatusFilter(key) {
  state.filter = key;
  document.querySelectorAll('#filterChips .chip').forEach((item) => item.classList.toggle('on', item.dataset.filter === key));
}

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
  const pool = state.lessons.filter((lesson) => {
    // 「全部日期」只按课文发布日期（标题前缀）筛；打卡日历选中的日子只看那天练过的（按打卡记录），
    // 两个筛选互不相干，可同时生效
    if (state.date && !lesson.title.startsWith(state.date)) return false;
    if (state.practiceDate) {
      const lastAt = Number(state.checkins.days[String(lesson.day)]?.lastAt) || 0;
      if (!lastAt || paddedDayKey(lastAt) !== state.practiceDate) return false;
    }
    if (!query) return true;
    return lesson.title.toLowerCase().includes(query)
      || `day${lesson.day}`.includes(query)
      || lesson.sentences.some((sentence) => sentence.text.toLowerCase().includes(query));
  });
  updateFilterChips(pool);
  updatePracticeFilter();
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

// 打卡日历选中日期后，在筛选条上留一个可取消的小标记，日历收起后也能看到并清除这个筛选
function updatePracticeFilter() {
  const chip = $('practiceFilter');
  chip.hidden = !state.practiceDate;
  chip.textContent = state.practiceDate ? `练于 ${state.practiceDate} ×` : '';
}

// 课文标题里的发布日期（YYYY-MM-DD）集合与最新一天，给「全部日期」选择器限定可选日期、定位打开月份
function lessonDates() {
  const keys = new Set();
  let latest = '';
  for (const lesson of state.lessons) {
    const match = lesson.title.match(/^(\d{4}-\d{2}-\d{2})/);
    if (!match) continue;
    keys.add(match[1]);
    if (match[1] > latest) latest = match[1];
  }
  return { keys, latest };
}

function updateStats() {
  const completed = state.lessons.filter((lesson) => isDayChecked(lesson.day)).length;
  const sentenceTotal = state.lessons.reduce((total, lesson) => total + lesson.sentences.length, 0);
  const checkedDays = Number(state.checkins.activeDays) || 0;
  // 每段统计各自不拆行，窄侧栏只在 · 分隔处换行
  $('lessonCount').innerHTML = `<span class="stat-seg">${state.lessons.length} 天 / ${sentenceTotal} 句</span> · <span class="stat-seg">已完成 ${completed} 天</span> · <span class="stat-seg">已打卡 ${checkedDays} 天</span>`;
  renderTodayCard();
  renderRecentCheckins();
  renderCheckinCalendar();
}

/* 今日打卡卡片：篇数按「今天完成整课打卡」算（该课所有句子都评过分且最后一次落在今天），
   连续天数按有练习记录的日子回推。凌晨 4 点前算前一天，即「今天」从 4 点起算。
   数字比上一次多时 emoji 弹跳一下，顺便换一句粤语鼓励。 */
const TODAY_TIERS = [
  { min: 6, emoji: '🏆', msg: '今日打卡王就系你，够晒厉害！' },
  { min: 4, emoji: '🌟', msg: '好叻啊！今日进步看得见' },
  { min: 2, emoji: '💪', msg: '状态在线，越读越顺！' },
  { min: 1, emoji: '🌱', msg: '开咗个好头，趁热打铁！' },
  { min: 0, emoji: '🐣', msg: '今日还未打卡，录一句热下身啦～' },
];

function renderTodayCard() {
  const now = new Date();
  const startOfToday = startOfLogicalDay(now);
  let count = 0;
  for (const info of Object.values(state.checkins.days || {})) {
    if (info.complete && (Number(info.lastAt) || 0) >= startOfToday) count += 1;
  }
  const activeDays = new Set();
  for (const info of Object.values(state.checkins.days || {})) {
    if (info.lastAt) activeDays.add(logicalDayKey(Number(info.lastAt)));
  }
  let streak = 0;
  const cursor = logicalShift(now.getTime()); // 逻辑「今天」，凌晨 4 点为界
  if (!activeDays.has(logicalDayKey(cursor.getTime()))) cursor.setDate(cursor.getDate() - 1);
  while (activeDays.has(logicalDayKey(cursor.getTime()))) {
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
      <span class="r-score ${record.passed ? 'pass' : 'fail'}">${record.score}</span>
    </li>`;
  }).join('');
}

/* 打卡日历：点「今日打卡」卡片展开/收起。块状月历记录每一天的打卡数量
   （当天完成整课的篇数，与「今日打卡 N 篇」同口径，凌晨 4 点前算前一天；
   有练习但没完成整课的日子浅色提示）。点某个日期块 = 按打卡记录筛出那天练过的课文，
   与「全部日期」的课文发布日期筛选互不相干。 */
const CALENDAR_WEEKDAYS = ['一', '二', '三', '四', '五', '六', '日'];

// 'YYYY-MM-DD' -> { checkins: 当天完成整课的篇数, partial: 只练了部分句子的课数 }
function checkinPerDay() {
  const perDay = new Map();
  for (const info of Object.values(state.checkins.days || {})) {
    if (!info.lastAt) continue;
    const key = paddedDayKey(Number(info.lastAt));
    const entry = perDay.get(key) || { checkins: 0, partial: 0 };
    if (info.complete) entry.checkins += 1;
    else entry.partial += 1;
    perDay.set(key, entry);
  }
  return perDay;
}

function calendarMonthHtml(year, month, perDay, lessonDates, todayKey) {
  const lead = (new Date(year, month, 1).getDay() + 6) % 7; // 周一开头
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let day = 1; day <= daysInMonth; day++) {
    // 格子用纯日历日（不能用 paddedDayKey：那是打卡口径，会把 0-4 点归到前一天，格子日期整体错位一天）；
    // 打卡数量的归属才按 4 点界线聚合（perDay 的 key）
    const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const date = new Date(year, month, day);
    const entry = perDay.get(key);
    const classes = ['cc-day'];
    if (entry?.checkins) classes.push('has-count', `lvl-${Math.min(entry.checkins, 3)}`);
    else if (entry?.partial) classes.push('partial');
    if (key === state.practiceDate) classes.push('selected');
    if (key === todayKey) classes.push('today');
    const note = entry?.checkins
      ? `打卡 ${entry.checkins} 篇${entry.partial ? ` · 另有 ${entry.partial} 课练到一半` : ''}`
      : entry?.partial
        ? `${entry.partial} 课练到一半，还没完成整课`
        : lessonDates.has(key) ? '无打卡' : '这天没有课文';
    const weekday = CALENDAR_WEEKDAYS[(date.getDay() + 6) % 7];
    cells.push(`<button type="button" class="${classes.join(' ')}" data-date="${key}" title="${key} 星期${weekday} · ${note}"><i>${day}</i>${entry?.checkins ? `<b>${entry.checkins}</b>` : ''}</button>`);
  }
  return `<div class="cc-month">
    <div class="cc-month-head">${year} 年 ${month + 1} 月</div>
    <div class="cc-grid">
      ${CALENDAR_WEEKDAYS.map((label) => `<span class="cc-wd">${label}</span>`).join('')}
      ${'<i class="cc-blank"></i>'.repeat(lead)}
      ${cells.join('')}
    </div>
  </div>`;
}

function renderCheckinCalendar() {
  const panel = $('checkinCalendar');
  if (panel.hidden) return;
  const perDay = checkinPerDay();
  let checkinDays = 0;
  let totalCheckins = 0;
  for (const entry of perDay.values()) {
    if (!entry.checkins) continue;
    checkinDays += 1;
    totalCheckins += entry.checkins;
  }
  $('ccSummary').textContent = checkinDays ? `${checkinDays} 天打卡 · 共 ${totalCheckins} 篇` : '还没有打卡记录';

  // 月份范围：最早课文所在月 → 当前月（课文排到未来时取更晚的），新月份在上
  const lessonDates = new Set();
  let minMonth = Number.POSITIVE_INFINITY;
  let maxMonth = Number.NEGATIVE_INFINITY;
  for (const lesson of state.lessons) {
    const match = lesson.title.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match) continue;
    lessonDates.add(match[0]);
    const monthIndex = Number(match[1]) * 12 + (Number(match[2]) - 1);
    minMonth = Math.min(minMonth, monthIndex);
    maxMonth = Math.max(maxMonth, monthIndex);
  }
  const now = new Date();
  if (!Number.isFinite(minMonth)) minMonth = maxMonth = now.getFullYear() * 12 + now.getMonth();
  const todayKey = paddedDayKey(now.getTime());
  const lastMonth = Math.max(maxMonth, now.getFullYear() * 12 + now.getMonth());
  const months = [];
  for (let monthIndex = lastMonth; monthIndex >= minMonth; monthIndex--) {
    months.push(calendarMonthHtml(Math.floor(monthIndex / 12), monthIndex % 12, perDay, lessonDates, todayKey));
  }
  $('ccBody').innerHTML = months.join('') || '<p class="muted tiny cc-empty">这门合集的课文没有日期。</p>';
}

function setCalendarOpen(open) {
  state.calendarOpen = Boolean(open);
  $('checkinCalendar').hidden = !state.calendarOpen;
  $('todayCard').setAttribute('aria-expanded', String(state.calendarOpen));
  if (state.calendarOpen) renderCheckinCalendar();
}

function clearRuns() {
  stopPlayback();
  for (const run of state.runs.values()) {
    if (run.take?.url) URL.revokeObjectURL(run.take.url);
  }
  state.runs.clear();
  state.summarySaved = false;
}

// 从一条历史记录恢复「上一次评分结果」。entry 可以来自 localStorage 练习历史，也可以来自
// 服务端长久保存的评分细节（applyServerCheckinDetails），两者条目结构同构。
function restoreEntry(lesson, entry) {
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
      // 通过判定统一按四舍五入分数对合格线（90 整算通过），历史里存的 passed 口径不一就不再采信
      passed: Math.round(Number(saved.score) || 0) >= threshold,
      threshold,
      expectedJyutping: saved.expected || '',
      transcribedJyutping: saved.transcribed || '',
      scoreMethod: saved.scoreMethod,
      targetSource: saved.targetSource,
      upstreamScore: saved.upstreamScore,
      upstreamExpectedJyutping: saved.upstreamExpectedJyutping,
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

function restoreLatestLessonResult(lesson) {
  const entry = loadHistory().find((item) => {
    const sameCollection = item.collection
      ? item.collection === state.collection
      : state.collection === 'original';
    return sameCollection && Number(item.day) === lesson.day && (item.sentences?.length || item.sentenceId);
  });
  return entry ? restoreEntry(lesson, entry) : null;
}

// 服务端持久化的评分细节是权威来源：localStorage 只有最近 50 条、换浏览器/清缓存就丢。
// 打开课文时拉一次每句最新细节，比本地历史新就用服务端的恢复；本地较新（刚在本机录过）则不动。
async function applyServerCheckinDetails(lesson, session, previousResult) {
  let data;
  try {
    const response = await fetch(`/api/checkin-details?collection=${encodeURIComponent(state.collection)}&day=${lesson.day}`);
    if (!response.ok) return previousResult;
    data = await response.json();
  } catch {
    return previousResult;
  }
  const entries = Object.values(data.details || {});
  if (!entries.length || session !== state.session || state.day !== lesson.day) return previousResult;
  // 这次打开后已经重新评分过（结果不是恢复来的），不要拿旧细节盖上去
  if (lesson.sentences.some((sentence) => { const run = currentRun(sentence.id); return run.result && !run.restored; })) return previousResult;
  const serverTs = Math.max(...entries.map((item) => Number(item.ts) || 0));
  const localTs = previousResult ? Number(String(previousResult.entry.id || '').slice(1)) || 0 : 0;
  const gradingChanged = entries.some((item) => {
    const saved = previousResult?.entry.sentences?.find((sentence) => sentence.id === item.sentenceId);
    return saved && (saved.score !== item.score || saved.expected !== item.expected || saved.scoreMethod !== item.scoreMethod);
  });
  if (serverTs < localTs || (serverTs === localTs && !gradingChanged)) return previousResult;
  const entry = {
    id: `h${serverTs}`,
    at: new Date(serverTs).toLocaleString('zh-CN', { hour12: false }),
    day: lesson.day,
    collection: state.collection,
    sentences: entries.map((item) => ({
      id: item.sentenceId,
      score: item.score,
      passed: item.passed,
      threshold: item.threshold,
      expected: item.expected || '',
      transcribed: item.transcribed || '',
      scoreMethod: item.scoreMethod,
      targetSource: item.targetSource,
      upstreamScore: item.upstreamScore,
      upstreamExpectedJyutping: item.upstreamExpectedJyutping,
      accuracy: item.accuracy ?? null,
      counts: item.counts || null,
      tips: item.tips || [],
      items: item.items || [],
    })),
  };
  const result = restoreEntry(lesson, entry);
  if (!result) return previousResult;
  state.summarySaved = true;
  syncAllCards();
  renderLessonSummary();
  $('pageStatus').textContent = `已显示 ${entry.at} 的上一次评分结果。`;
  return result;
}

// 恢复「最后录音」只挂引用不下载文件：每句 WAV ~200KB，开一课全下就是几 MB。
// 播放直接流式请求 /api/recording（带 ETag 协商缓存），重评时 scoreSentence 再按需把 blob 取回来。
// hasAudio 来自 /api/checkins（服务端按录音文件名时间戳核对过），保证挂出去的链接真的有文件。
function restorePersistedRecordings(lesson, previousResult) {
  const candidates = lesson.sentences.filter((sentence) => {
    const run = currentRun(sentence.id);
    return !run.take && !run.recording && state.checkins.sentences[sentence.id]?.hasAudio;
  });
  for (const sentence of candidates) {
    currentRun(sentence.id).take = {
      blob: null,
      name: `saved-${sentence.id}.wav`,
      source: '最后打卡录音',
      extra: ' · 已保存',
      url: `/api/recording/${encodeURIComponent(sentence.id)}?collection=${encodeURIComponent(state.collection)}`,
      persisted: true,
    };
  }
  if (candidates.length) {
    syncAllCards();
    renderLessonSummary();
  }
  if (previousResult) {
    $('pageStatus').textContent = candidates.length
      ? `已显示${previousResult.entry.at ? ` ${previousResult.entry.at}` : ''} 的上一次评分结果，并恢复 ${candidates.length} 句上次录音（播放/重评时按需加载）。`
      : `已显示${previousResult.entry.at ? ` ${previousResult.entry.at}` : ''} 的上一次评分结果；没有已保存的录音。`;
  } else if (candidates.length) {
    $('pageStatus').textContent = `已恢复 ${candidates.length} 句最后一次成功评分的录音（播放/重评时按需加载）。`;
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
  const session = state.session;
  state.day = lesson.day;
  state.batchProgress = 0;
  for (const sentence of lesson.sentences) currentRun(sentence.id);
  const previousResult = restoreLatestLessonResult(lesson);
  state.summarySaved = Boolean(previousResult);

  $('lessonTag').innerHTML = lessonTagHtml(lesson);
  $('lessonTitle').textContent = lesson.title;
  $('sentenceCount').textContent = `${lesson.sentences.length} 句 · 0 句已录`;
  $('pageStatus').textContent = previousResult
    ? `已显示${previousResult.entry.at ? ` ${previousResult.entry.at}` : ''} 的上一次评分结果。`
    : '';

  const demo = $('demoAudio');
  demoPlayer.setSource(lesson.hasAudio ? `/api/audio/${lesson.day}?collection=${encodeURIComponent(state.collection)}` : '');
  if (lesson.hasAudio) {
    demo.hidden = false;
    $('originalTrack').hidden = false;
  } else {
    demo.hidden = true;
    $('originalTrack').hidden = true;
  }

  slowPlayer.setSource(lesson.hasSlowAudio ? `/api/audio/${lesson.day}?collection=${encodeURIComponent(state.collection)}&variant=slow` : '');
  if (lesson.hasSlowAudio) {
    $('slowTrack').hidden = false;
  } else {
    $('slowTrack').hidden = true;
  }

  renderSentenceCards();
  syncAllCards();
  renderLessonSummary();
  renderDayList();
  // 先看服务端有没有更长的评分细节（长久保存），再用最终生效的那条恢复录音引用
  (async () => {
    const effective = await applyServerCheckinDetails(lesson, session, previousResult);
    if (state.session !== session || state.day !== lesson.day) return;
    restorePersistedRecordings(lesson, effective);
  })().catch((error) => console.warn('恢复上一次评分/录音失败', error));
  return true;
}

function sentenceTextHtml(text) {
  return [...text].map((char) => CJK.test(char)
    ? `<button class="article-char" data-say="${escapeHtml(char)}" type="button" title="点击听「${escapeHtml(char)}」的发音">${escapeHtml(char)}</button>`
    : `<span class="article-punctuation">${escapeHtml(char)}</span>`).join('');
}

// 句子上方注粤拼：优先课文原注音，缺音时整句查词典；与点读、连播同源。
// 按顺序填进 CJK 字按钮的 <ruby><rt>；拉丁/标点没有字按钮，自然跳过。
// 原文另存 data-text：注音后 .sentence-text 的 textContent 会混入粤拼字母，
// 分词/连播/悬停预热一律读 data-text，避免污染整句分词。
function annotateSentenceJyutping(card, session) {
  const textEl = card.querySelector('.sentence-text');
  if (!textEl || textEl.dataset.jpPending) return;
  const chars = [...textEl.querySelectorAll('.article-char')];
  if (!chars.length) return;
  textEl.dataset.jpPending = '1';
  fetchSentenceJyutping(card).then((items) => {
    delete textEl.dataset.jpPending;
    if (session !== state.session || !card.isConnected) return;
    let cursor = 0;
    for (const item of items) {
      if (!CJK.test(item.char)) continue;
      const charEl = chars[cursor];
      cursor += 1;
      if (!charEl || !item.jp) continue;
      charEl.dataset.jp = item.jp;
      charEl.innerHTML = `<ruby>${escapeHtml(item.char)}<rt>${escapeHtml(String(item.jp))}</rt></ruby>`;
    }
  }).catch(() => { delete textEl.dataset.jpPending; });
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
    <span class="sentence-text" data-text="${escapeHtml(sentence.text)}">${sentenceTextHtml(sentence.text)}</span>
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
  // 字上方注粤拼（异步查音后填充；粤拼有缓存时近乎即时）
  if (lesson) {
    for (const card of $('sentenceCards').querySelectorAll('.article-sentence[data-sentence-id]')) {
      annotateSentenceJyutping(card, state.session);
    }
  }
}

function sentenceById(sentenceId) {
  return currentLesson()?.sentences.find((sentence) => sentence.id === sentenceId);
}

function cardById(sentenceId) {
  return $('sentenceCards').querySelector(`[data-sentence-id="${CSS.escape(sentenceId)}"]`);
}

function countsBadges(counts = {}) {
  return [
    counts.ok ? `<span class="badge ok">匹配 ${counts.ok}</span>` : '',
    counts.tone ? `<span class="badge tone">声调差异 ${counts.tone}</span>` : '',
    counts.initial ? `<span class="badge warn">声母差异 ${counts.initial}</span>` : '',
    counts.final ? `<span class="badge warn">韵母差异 ${counts.final}</span>` : '',
    counts.syllable ? `<span class="badge bad">音节差异 ${counts.syllable}</span>` : '',
    counts.missing ? `<span class="badge bad">未识别 ${counts.missing}</span>` : '',
    counts.extra ? `<span class="badge bad">额外识别 ${counts.extra}</span>` : '',
  ].join('');
}

function syllablesHtml(items = []) {
  return items.map((item) => {
    const say = item.char && CJK.test(item.char)
      ? ` data-say="${escapeHtml(item.char)}"${item.expected ? ` data-jp="${escapeHtml(item.expected)}"` : ''} role="button" tabindex="0" aria-label="播放${escapeHtml(item.char)}的标准发音"`
      : '';
    return `<div class="syl ${item.kind}"${say} title="${escapeHtml(item.hint || '匹配')}">
    <div class="char">${escapeHtml(item.char || (item.kind === 'extra' ? '＋' : '—'))}</div>
    <div class="exp">${escapeHtml(item.expected || '')}</div>
    <div class="act" style="color:${item.kind === 'tone' ? 'var(--tone)' : 'var(--bad)'}">${escapeHtml(item.actual || '✗')}</div>
  </div>`;
  }).join('');
}

function jpCompareHtml(expected, transcribed) {
  return `<div class="jp-compare">
    <div><span class="k">参考粤拼 </span>${escapeHtml(expected || '—')}</div>
    <div><span class="k">识别粤拼 </span>${escapeHtml(transcribed || '—')}</div>
    <p class="muted tiny">识别读音差异仅供复听参考，识别结果可能有偏差。</p>
  </div>`;
}

function ringColor(score, threshold) {
  score = Math.round(Number(score) || 0);
  if (score >= threshold) return 'var(--accent)';
  if (score >= threshold - 20) return 'var(--warn)';
  return 'var(--bad)';
}

function gradingNoteHtml(data) {
  if (!data.scoreMethod) return '';
  const target = data.targetSource === 'lesson' ? '课文粤拼' : data.targetSource === 'dictionary' ? '词典粤拼' : '目标粤拼';
  const method = data.scoreMethod === 'jyutping-string-similarity-v1' ? ' · 相似度计分' : '';
  return `<p class="muted tiny">按${target}评分${method} · 接口原分 ${escapeHtml(data.upstreamScore ?? '—')} 分</p>`;
}

function sentenceResultHtml(data, sentenceId = '') {
  const score = Math.round(data.score ?? 0);
  const passed = score >= (Number(data.threshold) || 90);
  const analysis = data.analysis;
  const take = sentenceId ? currentRun(sentenceId).take : null;
  return `<div class="sentence-score ${passed ? 'passed' : 'failed'}">
    <div class="sentence-score-line">
      <strong style="color:${ringColor(score, data.threshold)}">${score} 分</strong>
      <span>${passed ? '已通过' : '未通过'} · 合格线 ${data.threshold}${analysis ? ` · 音节匹配率 ${analysis.syllableAccuracy}%` : ''}</span>
    </div>
    ${gradingNoteHtml(data)}
    <div class="badges">${countsBadges(analysis?.counts)}</div>
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

// 一句录音算不算「已通过」：按页面展示的四舍五入分数对合格线——90 分整算通过，90 以下才算未通过。
// 不直接用接口存的 passed：上游可能带小数（89.6 显示成 90 分却会被它判成未通过）。
function sentencePassed(run) {
  if (!run.result) return false;
  return Math.round(Number(run.result.score) || 0) >= (Number(run.result.threshold) || 90);
}

function syncBatchActions() {
  const sentences = currentLesson()?.sentences || [];
  const recorded = sentences.filter((sentence) => currentRun(sentence.id).take).length;
  const unpassed = sentences.filter((sentence) => {
    const run = currentRun(sentence.id);
    return run.take && !sentencePassed(run);
  }).length;
  // 一句都还没评过时「评分未通过」和主按钮完全等价，先藏起来，出分后才露面
  const anyScored = sentences.some((sentence) => currentRun(sentence.id).result);
  const total = sentences.length;
  const busy = Boolean(recordingId) || state.batchScoring;
  const progress = `正在评分 ${state.batchProgress} / ${state.batchTotal}`;

  const button = $('scoreAllBtn');
  button.disabled = !recorded || busy;
  button.textContent = state.batchScoring && state.batchMode === 'all'
    ? progress
    : `评分已录音内容${recorded ? `（${recorded} 句）` : ''}`;

  const failedButton = $('scoreFailedBtn');
  failedButton.hidden = !(anyScored && unpassed) && !(state.batchScoring && state.batchMode === 'failed');
  failedButton.disabled = !unpassed || busy;
  failedButton.textContent = state.batchScoring && state.batchMode === 'failed'
    ? progress
    : `评分未通过${unpassed ? `（${unpassed} 句）` : ''}`;

  $('batchStatus').textContent = state.batchScoring
    ? '正在并行评分，请稍候。'
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
  const score = Math.round(weightedScore / totalWeight);
  return {
    lesson,
    scored,
    score,
    threshold,
    complete,
    passed: complete && score >= threshold,
    failedSentenceCount: scored.filter(({ run }) => !sentencePassed(run)).length,
    counts,
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
      ? summary.passed ? '上一次评分：整课通过' : '上一次评分：总分未通过'
      : `上一次评分：已完成 ${summary.scored.length} / ${summary.lesson.sentences.length} 句`
    : summary.complete
      ? summary.passed ? '本课完成，已通过' : '本课完成，总分未通过'
      : `本课进行中，已完成 ${summary.scored.length} / ${summary.lesson.sentences.length} 句`;
  box.innerHTML = `<div class="section-title">${summary.restored ? '上一次评分结果' : '本课合并结果'}</div>
    <div class="score-row">
      <div class="ring" style="--pct:${summary.score};--ring-color:${ringColor(summary.score, summary.threshold)}">
        <div><div class="num">${summary.score}</div><div class="unit">/ 100</div></div>
      </div>
      <div class="verdict">
        <div class="headline">${headline}</div>
        <div class="muted tiny">${summary.restored && summary.restoredAt ? `${escapeHtml(summary.restoredAt)} · ` : ''}${summary.complete ? '按每句标准音节数加权合并' : '当前已评分句子的加权分'} · 合格线 ${summary.threshold}</div>
        <div class="badges">${summary.failedSentenceCount ? `<span class="badge bad">${summary.failedSentenceCount} 句未通过</span>` : ''}${countsBadges(summary.counts)}</div>
      </div>
    </div>
    <div class="summary-sentences">${summary.scored.map(({ sentence, run }) => {
      const result = run.result;
      const sentenceNumber = summary.lesson.sentences.findIndex((item) => item.id === sentence.id) + 1;
      return `<details class="summary-result-sentence" ${sentencePassed(run) ? '' : 'open'}>
        <summary>
          <span class="seg-idx">${sentenceNumber}</span>
          <span class="seg-text">${escapeHtml(sentence.text)}</span>
          ${sentencePassed(run) ? '' : '<span class="badge bad">未通过</span>'}
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
  form.append('day', lesson.day);
  form.append('collection', state.collection);
  form.append('text', sentence.text);
  form.append('sentence_id', sentence.id);

  try {
    // 恢复来的「最后录音」是懒加载的，真要重评时才把文件取回来
    if (!run.take.blob) {
      const saved = await fetch(run.take.url);
      if (!saved.ok) throw new Error(`已保存录音取不回来（HTTP ${saved.status}）`);
      const blob = await saved.blob();
      if (session !== state.session || state.day !== lesson.day) return;
      run.take.blob = blob;
    }
    form.append('audio', run.take.blob, run.take.name);
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

// 并发评分上限：多句录音同时请求而不是逐句排队，但一次最多 3 路压住上游接口
const SCORE_CONCURRENCY = 3;

async function scoreRecordedSentences(onlyFailed = false) {
  const lesson = currentLesson();
  if (!lesson || recordingId || state.batchScoring) return;
  const targets = lesson.sentences.filter((sentence) => {
    const run = currentRun(sentence.id);
    return run.take && (!onlyFailed || !sentencePassed(run));
  });
  if (!targets.length) return;

  state.batchScoring = true;
  state.batchProgress = 0;
  state.batchTotal = targets.length;
  state.batchMode = onlyFailed ? 'failed' : 'all';
  syncAllCards();
  renderLessonSummary();

  let succeeded = 0;
  let cursor = 0;
  const worker = async () => {
    while (cursor < targets.length) {
      const sentence = targets[cursor++];
      if (await scoreSentence(sentence.id)) succeeded += 1;
      state.batchProgress += 1;
      syncBatchActions();
    }
  };
  try {
    await Promise.all(Array.from({ length: Math.min(SCORE_CONCURRENCY, targets.length) }, worker));
  } finally {
    state.batchScoring = false;
    state.batchMode = '';
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
// 课文优先原资源粤拼，缺音及字典查询走 /api/jyutping；Web Audio 逐音节拼接播放，
// 不再依赖浏览器 TTS / 在线 TTS 代理。

const SYLLABLE_AUDIO_DIR = '/jyutping-audio';
const CHAR_GAP_KEY = 'yueyu_char_gap';
const CHAR_GAP_DEFAULT = 280;
const CHAR_GAP_MAX = 1000;
// 逐字朗读时字与字之间的停顿（毫秒）。「示范」卡里可全局调节，存 localStorage；朗读中每字现读，拖滑杆立刻生效
function charGapMs() {
  const value = Number(localStorage.getItem(CHAR_GAP_KEY) || NaN); // 无记录时 NaN → 回默认值（Number(null) 是 0，不能直接用）
  if (!Number.isFinite(value) || value < 0) return CHAR_GAP_DEFAULT;
  return Math.min(CHAR_GAP_MAX, Math.round(value));
}
const BUFFER_CACHE_MAX = 600; // 解码后的音节缓存上限，600 个约 15MB 内存

let audioContext = null;
let hoverPrefetchTimer = 0;
const activeSources = new Set(); // 正在发声的 Web Audio 节点，stopPlayback 统一停掉
const jyutpingCache = new Map(); // 文本 -> Promise<Array<{char, jp}>>
const sentenceJyutpingCache = new WeakMap(); // 按句卡缓存，避免相同文字的不同原注音互相覆盖
const syllableBufferCache = new Map(); // 音节 -> Promise<AudioBuffer|null>，null 表示音源缺这个音节

function speakContext() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  // 移动端除了 suspended 还有 interrupted（来电/切后台），同样需要 resume 才会出声
  if (audioContext.state !== 'running' && audioContext.state !== 'closed') {
    audioContext.resume().catch(() => { });
  }
  return audioContext;
}

// 移动端手势解锁：AudioContext 必须在用户手势里创建/恢复，手势一旦跨过网络 await 就失效。
// 三个播放入口（say / playSentenceChars / playTonesDemo）都在点击回调里同步先调它，再去做网络查询。
// 另挂全局 pointerdown/touchend 兜底：首次交互即解锁，切后台/来电被打断后任意触摸即可恢复。
function unlockAudio() {
  speakContext();
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

function fetchSentenceJyutping(card) {
  const cached = sentenceJyutpingCache.get(card);
  if (cached) return cached;
  const text = card.querySelector('.sentence-text')?.dataset.text || '';
  const source = sentenceById(card.dataset.sentenceId)?.jyutping;
  const hasSource = Array.isArray(source) && source.map((item) => item.char).join('') === text;
  const pending = (async () => {
    if (!hasSource) return fetchJyutping(text);
    if (source.every((item) => !CJK.test(item.char) || item.jp)) return source;
    const fallback = await fetchJyutping(text);
    return source.map((item, index) => ({
      char: item.char,
      jp: item.jp || (fallback[index]?.char === item.char ? fallback[index].jp : null),
    }));
  })();
  sentenceJyutpingCache.set(card, pending);
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
async function prefetchAudio(text, element = null) {
  const card = element?.closest('[data-sentence-id]');
  const items = (await (card ? fetchSentenceJyutping(card)
    : element?.dataset.jp ? [{ char: text, jp: element.dataset.jp }]
      : fetchJyutping(text))).filter((item) => item.jp);
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

// 播放前等上下文真正跑起来（最多约 1 秒）。解锁失败时上下文会一直 suspended，
// 硬灌 buffer 只会静默积压、等恢复时一起爆响，不如直接报错提示再点一次。
async function ensureContextRunning(context) {
  if (context.state === 'running') return;
  const resumed = context.resume().catch(() => { });
  await Promise.race([resumed, new Promise((resolve) => setTimeout(resolve, 1000))]);
  if (context.state !== 'running') throw new Error('浏览器还没放行音频（常见于刚进页面或切回前台），请再点一次');
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
  if (planned.length) await ensureContextRunning(context);
  if (token !== sayToken) return missing.size;
  for (const [index, { item, buffers }] of planned.entries()) {
    if (token !== sayToken) return missing.size;
    onStart?.(item);
    for (const buffer of buffers) await playBuffer(context, buffer);
    onEnd?.(item);
    if (token !== sayToken) return missing.size;
    if (index < planned.length - 1) await new Promise((resolve) => setTimeout(resolve, charGapMs()));
  }
  return missing.size;
}

async function say(text, element = null) {
  if (!text) return;
  unlockAudio(); // 手势内先解锁 AudioContext，后面的网络查询不会破坏手势资格
  stopPlayback();
  const token = ++sayToken;
  try {
    // 字卡自带注音（查字典的结果卡）就直接播显示的那个读音——单字重新查会丢上下文
    // （「分開房」按词取 房=fong2，孤字查默认 fong4），点读必须和显示一致
    let items = null;
    if (element?.dataset.jp) {
      items = [{ char: text, jp: element.dataset.jp }];
    } else if (text.length === 1 && element) {
      // 注音尚未渲染时，也使用同一句的原注音及补音结果。
      const card = element.closest('[data-sentence-id]');
      const chars = card ? [...card.querySelectorAll('.sentence-text .article-char')] : [];
      const index = chars.indexOf(element);
      const sentenceText = card?.querySelector('.sentence-text')?.dataset.text || card?.querySelector('.sentence-text')?.textContent;
      if (index >= 0 && sentenceText) {
        const sentenceItems = (await fetchSentenceJyutping(card)).filter((item) => CJK.test(item.char));
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

// 整句连播：使用课文原注音及缺音补查结果，逐字拼接播放并高亮。
// 播放中按钮变停止钮；再点一次、点别的字 / 别句 / 录音都会经 stopPlayback 打断——
// 它把 sayToken +1，循环在下一次检查时退出。
async function playSentenceChars(card) {
  const chars = [...card.querySelectorAll('.sentence-text .article-char')];
  const button = card.querySelector('.sentence-play-btn');
  if (!chars.length || !button) return;
  unlockAudio(); // 手势内先解锁 AudioContext
  stopPlayback();
  const token = ++sayToken;
  sentencePlayButton = button;
  button.classList.add('speaking');
  button.title = '停止播放';
  try {
    // 粤拼条目按文本顺序一个不落（标点/拉丁也有条目但无粤拼，
    // 生僻字可能超出前端渲染范围），所以只对前端会渲染成字按钮的 CJK 字推进下标，保证高亮对得齐。
    const items = await fetchSentenceJyutping(card);
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
  return `<button class="dict-char" type="button" data-say="${escapeHtml(item.char)}" data-jp="${escapeHtml(item.jp)}" title="${escapeHtml(title)}">
    <span class="dc-char">${escapeHtml(item.char)}</span>
    <span class="dc-jp">${dictJpHtml(item.jp)}</span>
    <span class="dc-tone">${escapeHtml(contour)}</span>
  </button>`;
}

function dictReadingRowHtml(char, detail, current) {
  const examples = detail.examples || (detail.words || []).map((word) => ({ word }));
  const words = examples.map(({ word, url, pos, gloss, usageExample }) => `<div class="dict-word-item${gloss ? '' : ' compact'}">
    ${url
      ? `<a class="dict-word" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" title="在粤典查看「${escapeHtml(word)}」">${escapeHtml(word)}</a>`
      : `<span class="dict-word">${escapeHtml(word)}</span>`}
    ${pos ? `<span class="dict-word-pos">${escapeHtml(pos)}</span>` : ''}
    ${gloss ? `<p class="dict-word-gloss">${escapeHtml(gloss)}</p>` : ''}
    ${usageExample && usageExample !== word ? `<p class="dict-word-usage">例：${escapeHtml(usageExample)}</p>` : ''}
  </div>`).join('');
  const senses = (detail.senses || []).map(({ pos, gloss, example }) => `<li>
    ${pos ? `<span class="dict-word-pos">${escapeHtml(pos)}</span>` : ''}
    <span>${escapeHtml(gloss)}</span>
    ${example ? `<span class="dict-sense-example">例：${escapeHtml(example)}</span>` : ''}
  </li>`).join('');
  return `<div class="dict-reading-row${current ? ' current' : ''}">
    <div class="dict-reading-head">
      <button class="dict-reading dict-reading-play" type="button" data-say="${escapeHtml(char)}" data-jp="${escapeHtml(detail.jp)}" title="听 ${escapeHtml(char)} ${escapeHtml(detail.jp)}">▶ ${dictJpHtml(detail.jp)}</button>
      ${current ? '<span class="dict-current-label">当前词句读音</span>' : ''}
    </div>
    ${detail.meaning ? `<p class="dict-reading-meaning">${escapeHtml(detail.meaning)}</p>` : ''}
    ${detail.usage ? `<p class="dict-reading-usage">使用场景：${escapeHtml(detail.usage)}</p>` : ''}
    ${senses ? `<ul class="dict-senses">${senses}</ul>` : ''}
    ${words ? `<div class="dict-word-list"><span class="muted tiny">组词与用法</span>${words}</div>` : ''}
  </div>`;
}

function dictPolyHtml(item) {
  const details = item.readingDetails || [];
  if (details.length < 2) return '';
  const checked = details.filter((detail) => detail.meaning || detail.senses?.length || detail.examples?.length || detail.jp === item.jp);
  const unchecked = details.filter((detail) => !detail.meaning && !detail.senses?.length && !detail.examples?.length && detail.jp !== item.jp);
  return `<section class="dict-poly" aria-label="${escapeHtml(item.char)}的多音字用法">
    <div class="dict-poly-head"><h3>「${escapeHtml(item.char)}」的不同读音</h3><span class="muted tiny">按词义选择读音，点粤拼可试听</span></div>
    <div class="dict-reading-list">${checked.map((detail) => dictReadingRowHtml(item.char, detail, detail.jp === item.jp)).join('')}</div>
    ${unchecked.length ? `<details class="dict-unchecked"><summary>另收录 ${unchecked.length} 个读音，暂无配词例</summary><div class="dict-reading-list">${unchecked.map((detail) => dictReadingRowHtml(item.char, detail, false)).join('')}</div></details>` : ''}
    <p class="dict-source">读音、释义及词例参考：<a href="${escapeHtml(item.source)}" target="_blank" rel="noopener noreferrer">香港中文大学《汉语多功能字库》</a>、<a href="${escapeHtml(item.wordlistSource)}" target="_blank" rel="noopener noreferrer">粤典词表</a>${item.studySource ? `、<a href="${escapeHtml(item.studySource)}" target="_blank" rel="noopener noreferrer">粤典词条</a>` : ''}${item.spokenSource ? `；口语用法参考 <a href="${escapeHtml(item.spokenSource)}" target="_blank" rel="noopener noreferrer">粤典词条</a>` : ''}。未配词例的候选音可能是异读、旧读或罕见用法。</p>
  </section>`;
}

// 单字查询时的详情卡：声母 / 韵母 / 声调拆开讲，多音字附词例和语境
function dictSingleHtml(item) {
  return `<div class="dict-single">
    <span class="dict-single-char" data-say="${escapeHtml(item.char)}" data-jp="${escapeHtml(item.jp)}" role="button" tabindex="0" aria-label="播放「${escapeHtml(item.char)}」的发音" title="点击听「${escapeHtml(item.char)}」的发音">${escapeHtml(item.char)}</span>
    <div class="dict-single-info">
      <span class="dict-single-jp">${dictJpHtml(item.jp)}</span>
      <div class="dict-single-meta">
        <span>声母 <b>${escapeHtml(item.initial || '（零声母）')}</b></span>
        <span>韵母 <b>-${escapeHtml(item.final)}</b></span>
        <span>声调 <b>${escapeHtml(item.toneName || String(item.tone ?? ''))}</b></span>
      </div>
    </div>
  </div>${dictPolyHtml(item)}`;
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
      <div class="dict-chars">${items.map(dictCharCardHtml).join('')}</div>
      ${[...new Map(items.filter((item) => item.readingDetails?.length > 1).map((item) => [item.char, item])).values()]
        .map(dictPolyHtml).join('')}`}`;
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
      const response = await fetch(`/api/jyutping?text=${encodeURIComponent(query)}&details=1`);
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

/* -------------------------------- 声调说明 -------------------------------- */

const TONES_PLAY_TITLE = '▶ 连读六个字';
// 「詩史試時市事」固定依次读 si1–si6，读音就标在字卡上，直接按注音逐音节播，不再查词典
const TONE_DEMO_ITEMS = ['si1', 'si2', 'si3', 'si4', 'si5', 'si6'].map((jp, index) => ({
  char: '詩史試時市事'[index],
  jp,
}));
let tonesPlayButton = null;

// 连读六个声调示例字，逐字高亮；播放中再点一次（或点任何别的发音）经 stopPlayback 打断
async function playTonesDemo() {
  const button = $('tonesPlayAll');
  if (!button) return;
  unlockAudio(); // 手势内先解锁 AudioContext
  if (tonesPlayButton === button) {
    stopPlayback();
    return;
  }
  stopPlayback();
  const token = ++sayToken;
  tonesPlayButton = button;
  button.classList.add('speaking');
  button.textContent = '■ 停止';
  try {
    const chars = [...document.querySelectorAll('#tonesChars .dict-char')];
    const items = TONE_DEMO_ITEMS.map((item, index) => ({ ...item, charEl: chars[index] }));
    const missing = await speakItems(items, {
      token,
      onStart: (item) => item.charEl?.classList.add('speaking'),
      onEnd: (item) => item.charEl?.classList.remove('speaking'),
    });
    if (token === sayToken && missing) $('pageStatus').textContent = `有 ${missing} 个字暂无音节音频，已跳过。`;
  } catch (error) {
    if (token === sayToken) $('pageStatus').textContent = `发音失败：${error.message}`;
  } finally {
    // token 已被新的播放接管时，按钮状态由 stopPlayback / 新播放负责
    if (token === sayToken) {
      button.classList.remove('speaking');
      button.textContent = TONES_PLAY_TITLE;
      tonesPlayButton = null;
    }
  }
}

/* --------------------------------- 历史 ---------------------------------- */

const HISTORY_LIMIT = 50;
const AUDIO_KEEP = 20;
const sessionAudio = new Map();

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem('yueyu_history') || '[]').map((item) => item.sentences?.length
      ? { ...item, passed: item.complete !== false && Math.round(Number(item.score) || 0) >= (item.threshold ?? 90) }
      : item);
  } catch {
    return [];
  }
}

const HISTORY_RUN_GAP_MS = 15 * 60 * 1000; // 同一课两次评分间隔超过 15 分钟，算两次练习

async function fetchServerHistory() {
  const response = await fetch('/api/history', { cache: 'no-cache' });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  return data.details || [];
}

// 服务端按句存的打卡明细 → 历史页的练习记录：同一课、间隔 15 分钟内的连续评分归为一次练习
function buildHistoryItems(rows) {
  const runs = [];
  let current = null;
  for (const row of rows) {
    const ts = Number(row.ts) || 0;
    if (!current || current.collection !== row.collection || current.day !== row.day || current.oldestTs - ts > HISTORY_RUN_GAP_MS) {
      current = { collection: row.collection, day: row.day, oldestTs: ts, rows: [] };
      runs.push(current);
    }
    current.rows.push(row);
    current.oldestTs = ts;
  }
  return runs.map((run) => {
    const rowsByTime = [...run.rows].sort((a, b) => (Number(a.ts) || 0) - (Number(b.ts) || 0));
    const firstTs = Number(rowsByTime[0]?.ts) || 0;
    const lastTs = Number(rowsByTime[rowsByTime.length - 1]?.ts) || firstTs;
    const title = run.rows.find((row) => row.title)?.title || '';
    let weightedScore = 0;
    let totalWeight = 0;
    const counts = {};
    const sentences = run.rows.map((row) => {
      const weight = Number(row.weight) || syllableWeightOf(row.text);
      weightedScore += Number(row.score || 0) * weight;
      totalWeight += weight;
      for (const [kind, count] of Object.entries(row.counts || {})) counts[kind] = (counts[kind] || 0) + count;
      const threshold = row.threshold ?? 90;
      const score = Math.round(Number(row.score) || 0);
      return {
        id: row.sentenceId,
        text: row.text || row.sentenceId,
        score,
        passed: score >= threshold,
        threshold,
        expected: row.expected || '',
        transcribed: row.transcribed || '',
        scoreMethod: row.scoreMethod,
        targetSource: row.targetSource,
        upstreamScore: row.upstreamScore,
        upstreamExpectedJyutping: row.upstreamExpectedJyutping,
        accuracy: row.accuracy ?? null,
        counts: row.counts || null,
        tips: row.tips || [],
        items: row.items || [],
        audioUrl: row.hasAudio
          ? `/api/recording/${encodeURIComponent(row.sentenceId)}?collection=${encodeURIComponent(row.collection)}&ts=${Number(row.ts) || 0}`
          : '',
      };
    });
    const sentenceCount = Number(run.rows[0]?.sentenceCount) || 0;
    const complete = !sentenceCount || new Set(sentences.map((sentence) => sentence.id)).size >= sentenceCount;
    const score = Math.round(weightedScore / (totalWeight || 1));
    const threshold = rowsByTime[0]?.threshold ?? 90;
    return {
      id: `h${lastTs}`,
      at: new Date(lastTs).toLocaleString('zh-CN', { hour12: false }),
      day: run.day,
      collection: run.collection,
      text: `Day ${run.day}${title ? ` · ${title}` : ''}`,
      score,
      passed: complete && score >= threshold,
      complete,
      sentenceCount,
      threshold,
      counts,
      sentences,
    };
  });
}

function syllableWeightOf(text) {
  const value = String(text || '');
  const cjk = [...value].filter((char) => CJK.test(char)).length;
  const latinRuns = (value.match(/[A-Za-z0-9]+/g) || []).length;
  return cjk + latinRuns || 1;
}

function currentHistoryItems() {
  return state.historyItems ?? loadHistory();
}

// 先用手头的数据立即渲染，再去服务器拉全部打卡明细（拉失败就继续用本机 localStorage 的）
async function refreshHistory() {
  renderHistory();
  updateHistoryStats();
  try {
    state.historyItems = buildHistoryItems(await fetchServerHistory());
  } catch (error) {
    console.warn('加载服务端打卡历史失败，显示本机记录', error);
    state.historyItems = null;
  }
  renderHistory();
  updateHistoryStats();
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
    counts: summary.counts,
    sentences: summary.lesson.sentences.map((sentence) => {
      const run = currentRun(sentence.id);
      const data = run.result;
      // 懒恢复的「最后录音」blob 可能为空（按需才取），这时历史页会走服务端 audioUrl 回放
      if (run.take?.blob) sessionAudio.set(`${id}:${sentence.id}`, URL.createObjectURL(run.take.blob));
      return {
        id: sentence.id,
        text: sentence.text,
        score: Math.round(data.score ?? 0),
        passed: Boolean(data.passed ?? data.score >= data.threshold),
        threshold: data.threshold,
        expected: data.expectedJyutping || '',
        transcribed: data.transcribedJyutping || '',
        scoreMethod: data.scoreMethod,
        targetSource: data.targetSource,
        upstreamScore: data.upstreamScore,
        upstreamExpectedJyutping: data.upstreamExpectedJyutping,
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
  refreshHistory();
}

function legacyHistoryDetailHtml(item) {
  if (!item.items?.length) return '<div class="h-detail"><p class="muted tiny">这条旧记录没有纠音详情。</p></div>';
  const audio = sessionAudio.get(item.id);
  return `<div class="h-detail">
    <div class="muted tiny">合格线 ${item.threshold ?? 90} · ${item.passed ? '已通过' : '未通过'}${item.accuracy != null ? ` · 音节匹配率 ${item.accuracy}%` : ''}</div>
    <div class="badges">${countsBadges(item.counts)}</div>
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
    <div class="muted tiny">逐句评分后按标准音节数加权 · 合格线 ${item.threshold} · ${item.passed ? '总分通过' : item.complete === false ? '未全部评完' : '总分未通过'}</div>
    <div class="badges">${countsBadges(item.counts)}</div>
    <div class="history-sentences">${item.sentences.map((sentence, index) => {
      // 服务端记录回放当时那条录音文件；本机临时记录（服务器不可用时）用会话内的 blob。
      // 服务端录音不直接给 src：一次渲染几百条会把整库 WAV 都预取一遍，展开这条时才真正加载
      const sessionUrl = sessionAudio.get(`${item.id}:${sentence.id}`);
      const audioUrl = sentence.audioUrl || sessionUrl;
      const audioHtml = !audioUrl ? '' : sentence.audioUrl
        ? `<audio controls preload="none" data-src="${escapeHtml(audioUrl)}"></audio>`
        : `<audio controls preload="metadata" src="${escapeHtml(audioUrl)}"></audio>`;
      return `<details class="history-sentence" ${sentence.passed ? '' : 'open'}>
        <summary>
          <span class="hs-title">${index + 1}. ${escapeHtml(sentence.text)}</span>
          <span class="hs-right">
            <span class="badge ${sentence.passed ? 'ok' : 'bad'}">${sentence.passed ? '通过' : '未通过'}</span>
            <strong style="color:${ringColor(sentence.score, sentence.threshold)}">${sentence.score} 分</strong>
          </span>
        </summary>
        ${gradingNoteHtml(sentence)}
        <div class="badges">${countsBadges(sentence.counts)}${sentence.accuracy != null ? `<span class="badge">音节匹配率 ${sentence.accuracy}%</span>` : ''}</div>
        ${sentence.items?.length ? `<div class="syllables">${syllablesHtml(sentence.items)}</div>${jpCompareHtml(sentence.expected, sentence.transcribed)}` : ''}
        ${audioHtml}
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
          item.sentences
            ? item.complete === false && item.sentenceCount ? `已评 ${item.sentences.length}/${item.sentenceCount} 句` : `${item.sentences.length} 句`
            : '',
          `合格线 ${item.threshold ?? 90}`,
          item.passed ? '总分通过' : item.complete === false ? '未全部评完' : '总分未通过',
        ].filter(Boolean).join(' · ')}</div>
      </div>
      <div class="h-badges">${countsBadges(item.counts)}</div>
    </div>
    ${historyDetailHtml(item)}
  </li>`;
}

function renderHistory() {
  const items = currentHistoryItems();
  const filtered = items.filter(historyMatches);
  if (!filtered.length) {
    $('history').innerHTML = `<li class="h-empty">${items.length ? '没有符合条件的记录，换个筛选条件试试。' : '还没有练习记录，回首页录一句评分后会自动存到这里。'}</li>`;
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
  // 默认展开的句子（上次没通过的）也要按需加载录音
  hydrateHistoryAudio($('history'));
}

// 历史录音按需加载：只给展开中的句子挂 src，收起/未展开的不下载
function hydrateHistoryAudio(scope) {
  for (const audio of scope.querySelectorAll('details.history-sentence[open] audio[data-src]')) {
    audio.src = audio.dataset.src;
    audio.preload = 'metadata';
    audio.removeAttribute('data-src');
  }
}

function toggleHistoryItem(item) {
  const open = item.classList.toggle('open');
  item.querySelector('.h-row')?.setAttribute('aria-expanded', String(open));
  item.querySelector('.h-caret').textContent = open ? '▾' : '▸';
}

function updateHistoryStats() {
  const items = currentHistoryItems();
  const history = items.filter(historyMatches);
  if (!history.length) {
    $('historyStats').textContent = items.length ? '没有符合条件的记录' : '';
    return;
  }
  const average = Math.round(history.reduce((total, item) => total + Number(item.score || 0), 0) / history.length);
  const passed = history.filter((item) => item.passed).length;
  const suffix = history.length < items.length ? `（共 ${items.length} 条）` : '';
  $('historyStats').textContent = `${history.length} 次 · 平均 ${average} 分 · 通过率 ${Math.round((passed / history.length) * 100)}%${suffix}`;
}

/* --------------------------------- 交互 ---------------------------------- */

function scrollToEl(element) {
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function switchView(view) {
  if (recordingId || state.batchScoring) {
    $('pageStatus').textContent = '请先结束录音或等待评分完成，再切换页面。';
    return;
  }
  if (!listening.canLeave()) return;
  const history = view === 'history';
  $('tabHome').classList.toggle('on', view === 'home');
  $('tabDict').classList.toggle('on', view === 'dict');
  $('tabHistory').classList.toggle('on', history);
  $('tabListening').classList.toggle('on', view === 'listening');
  $('homeView').hidden = view !== 'home';
  $('historyView').hidden = !history;
  $('dictView').hidden = view !== 'dict';
  $('listeningView').hidden = view !== 'listening';
  listening.deactivate();
  if (view === 'listening') {
    stopPlayback();
    $('demoAudio').pause();
    $('slowAudio').pause();
    listening.activate();
  }
  if (history) refreshHistory();
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
  demoPlayer = createAudioPlayer($('demoAudio'), {
    status: $('demoAudioStatus'), retryButton: $('demoAudioRetry'), getRate: () => Number($('rate').value),
  });
  slowPlayer = createAudioPlayer($('slowAudio'), {
    status: $('slowAudioStatus'), retryButton: $('slowAudioRetry'), getRate: () => Number($('rate').value),
  });
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
    setStatusFilter(button.dataset.filter);
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

  // 「全部日期」筛选：flatpickr 自带日历选课文发布日期，与打卡日历（打卡记录日）互不相干
  datepicker = flatpickr('#dateSearch', {
    locale: 'zh',
    dateFormat: 'Y-m-d',
    clickOpens: false,
    // 只给选有课文的日子，避免选到没课文的日期后列表全空
    enable: [(date) => {
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      return lessonDates().keys.has(key);
    }],
    onOpen() {
      // 打开就定位到已选日期或最新课文所在月，不用从今天开始翻月份
      const { latest } = lessonDates();
      const key = state.date || latest;
      if (key) datepicker.jumpToDate(new Date(`${key}T00:00:00`));
    },
    onChange(selectedDates, dateStr) {
      state.date = dateStr;
      $('dateClear').hidden = !dateStr;
      renderDayList();
    },
  });
  const dateFilter = document.querySelector('.date-filter');
  dateFilter.addEventListener('click', (event) => {
    if (event.target.closest('#dateClear')) return;
    datepicker.open();
  });
  dateFilter.addEventListener('keydown', (event) => {
    if (!['Enter', ' '].includes(event.key) || event.target.closest('#dateClear')) return;
    event.preventDefault();
    datepicker.open();
  });
  // 今日打卡卡片是打卡日历的入口：点击展开/收起
  $('todayCard').addEventListener('click', () => setCalendarOpen(!state.calendarOpen));
  $('todayCard').addEventListener('keydown', (event) => {
    if (!['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    setCalendarOpen(!state.calendarOpen);
  });
  $('dateClear').addEventListener('click', () => datepicker.clear());
  $('practiceFilter').addEventListener('click', () => {
    state.practiceDate = '';
    renderDayList();
  });
  // 打卡日历的日期块 = 打卡记录日：筛出那天练过的课文，再点同一天取消。
  // 练过的课文大多已完成打卡，会被默认的「未打卡」chip 过滤成空列表，所以选日期时把状态切回「全部」
  $('checkinCalendar').addEventListener('click', (event) => {
    const day = event.target.closest('.cc-day[data-date]');
    if (!day) return;
    const picked = state.practiceDate !== day.dataset.date;
    state.practiceDate = picked ? day.dataset.date : '';
    if (picked) setStatusFilter('all');
    renderDayList();
    renderCheckinCalendar();
    setCalendarOpen(false);
  });

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

  $('scoreAllBtn').addEventListener('click', () => scoreRecordedSentences());
  $('scoreFailedBtn').addEventListener('click', () => scoreRecordedSentences(true));

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
      const sentenceText = playButton?.closest('[data-sentence-id]')?.querySelector('.sentence-text')?.dataset.text
        || playButton?.closest('[data-sentence-id]')?.querySelector('.sentence-text')?.textContent;
      const text = sentenceText || sayElement?.dataset.say;
      if (text) prefetchAudio(text, sayElement || playButton).catch(() => { });
    }, 150);
  }, true);

  // 触屏没有 hover：pointerover 的 150ms 预热在点击后才跑，赶不上首次点读。
  // 落指（pointerdown）到 click 之间有几十到几百毫秒，立刻预热；课文单字预热整句，
  // 和页面注音、say() 的句卡缓存对齐。
  document.addEventListener('pointerdown', (event) => {
    const sayElement = event.target.closest('[data-say]');
    const playButton = sayElement ? null : event.target.closest('.sentence-play-btn');
    if (!sayElement && !playButton) return;
    const sentenceText = (sayElement || playButton)?.closest('[data-sentence-id]')?.querySelector('.sentence-text')?.dataset.text;
    const text = sentenceText || sayElement?.dataset.say;
    if (text) prefetchAudio(text, sayElement || playButton).catch(() => { });
  }, true);

  // 任意触摸都顺手解锁 Web Audio：首次交互即解锁；切后台/来电后（iOS 是 interrupted 态）
  // 不依赖具体播放入口，摸一下屏幕就能恢复
  const unlockOnTouch = () => unlockAudio();
  document.addEventListener('pointerdown', unlockOnTouch, { capture: true, passive: true });
  document.addEventListener('touchend', unlockOnTouch, { capture: true, passive: true });

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

  const charGap = $('charGap');
  const syncCharGap = () => {
    const ms = charGapMs();
    charGap.value = String(ms);
    $('charGapValue').textContent = `${ms}ms`;
  };
  syncCharGap();
  charGap.addEventListener('input', () => {
    localStorage.setItem(CHAR_GAP_KEY, String(Math.round(Number(charGap.value) || 0)));
    syncCharGap();
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

  // 展开某句时才把录音的 src 挂上（toggle 不冒泡，用捕获阶段接）
  $('history').addEventListener('toggle', (event) => {
    if (event.target.open) hydrateHistoryAudio(event.target);
  }, true);

  $('tabHome').addEventListener('click', () => switchView('home'));
  $('tabDict').addEventListener('click', () => switchView('dict'));
  $('tabHistory').addEventListener('click', () => switchView('history'));
  $('tabListening').addEventListener('click', () => switchView('listening'));

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

  $('tonesPlayAll').addEventListener('click', playTonesDemo);

  document.addEventListener('keydown', (event) => {
    if (event.defaultPrevented || event.target.matches('input, select, textarea, button') || event.metaKey || event.ctrlKey || event.altKey) return;
    if ($('homeView').hidden || event.code !== 'Space') return;
    event.preventDefault();
    const audio = $('demoAudio');
    if (!audio.hidden) audio.paused ? demoPlayer.play() : audio.pause();
  });
}

const listening = createListeningTraining({ Recorder: WavRecorder });
bind();
renderHistory();
loadData().catch((error) => {
  $('pageStatus').textContent = `加载课文失败：${error.message}`;
});
