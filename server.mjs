import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import express from 'express';
import multer from 'multer';
import { createListeningRouter } from './lib/listening.mjs';
import { lookupJyutping } from './lib/dictionary.mjs';
import { attachSourceJyutping } from './lib/lesson-source.mjs';
import { gradeCantonese, regradeSavedDetail } from './lib/pronunciation-score.mjs';
import {
  closeDatabase,
  databaseInfo,
  initDatabase,
  latestCheckinDetails,
  latestDetailTsBySentence,
  loadCheckins,
  loadHistoryDetails,
  loadLessonCollections,
  listeningStore,
  recalculateSavedScores,
  saveScoreAttempt,
} from './lib/database.mjs';

try {
  process.loadEnvFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '.env'));
} catch {
  // 没有 .env 就走环境变量 / 前端传的 key
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 5178);
const API_URL = process.env.CANTONESE_AI_URL || 'https://cantonese.ai/api/score-pronunciation';
const SERVER_KEY = process.env.CANTONESE_AI_API_KEY || '';
const LESSON_DIR = process.env.LESSON_DIR || 'D:\\粤语打卡\\小打卡任务';
const RECORDING_DIR = process.env.RECORDING_DIR || path.join(__dirname, 'recordings');
const PASS_SCORE = { cantonese: 90, english: 70, mandarin: 70 };

// Node 的 fetch 默认不走 HTTP(S)_PROXY，要靠 --use-env-proxy / NODE_USE_ENV_PROXY=1 在启动时开
const PROXY = process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || '';
const PROXY_ON = process.execArgv.includes('--use-env-proxy') || process.env.NODE_USE_ENV_PROXY === '1';
const PROXY_HINT = PROXY && !PROXY_ON
  ? `（检测到代理 ${PROXY}，但本进程没开 env proxy —— 用 npm start 启动，或 NODE_USE_ENV_PROXY=1 node server.mjs）`
  : '';

/** 接口字段可能是 expectedJyutping / expected_jyutping，宽松一点找 */
function pickJyutping(data, kind) {
  const direct = data[`${kind}Jyutping`] ?? data[`${kind}_jyutping`];
  if (typeof direct === 'string') return direct;
  const key = Object.keys(data).find(
    (k) => k.toLowerCase().includes('jyutping') && k.toLowerCase().includes(kind.slice(0, 5)),
  );
  return key && typeof data[key] === 'string' ? data[key] : '';
}

await initDatabase();
const collections = (await loadLessonCollections()).map(attachSourceJyutping).map((collection) => ({
  ...collection,
  lessonByDay: new Map(collection.lessons.map((lesson) => [lesson.day, lesson])),
}));
if (!collections.length) {
  console.error('mcdb 中没有课文，请先运行: npm run db:migrate');
  process.exit(1);
}
const collectionById = new Map(collections.map((collection) => [collection.id, collection]));
const DEFAULT_COLLECTION = collections[0];

function getCollection(id) {
  return collectionById.get(id) || DEFAULT_COLLECTION;
}

const recalculatedCount = await recalculateSavedScores((entry) => {
  if (!entry) return null;
  const collection = collectionById.get(entry.collection);
  const sentence = collection?.lessonByDay.get(Number(entry.day))?.sentences.find((item) => item.id === entry.sentenceId);
  return regradeSavedDetail(entry, sentence);
});
if (recalculatedCount) console.log(`已按课文粤拼重新计算 ${recalculatedCount} 条历史评分（接口原分已保留）。`);

function collectionHasSentence(collection, sentenceId) {
  return collection.lessons.some((lesson) => lesson.sentences.some((sentence) => sentence.id === sentenceId));
}

const RECORDING_EXTENSIONS = ['.wav', '.mp3', '.m4a', '.flac', '.ogg'];
const MIME_EXTENSION = {
  'audio/wav': '.wav',
  'audio/x-wav': '.wav',
  'audio/mpeg': '.mp3',
  'audio/mp3': '.mp3',
  'audio/mp4': '.m4a',
  'audio/x-m4a': '.m4a',
  'audio/flac': '.flac',
  'audio/x-flac': '.flac',
  'audio/ogg': '.ogg',
};
const EXTENSION_MIME = Object.fromEntries(Object.entries(MIME_EXTENSION).map(([mime, ext]) => [ext, mime]));

function safeRecordingName(value) {
  return String(value).replace(/[^a-zA-Z0-9._-]/g, '_');
}

function recordingDirFor(collectionId, sentenceId) {
  return path.join(RECORDING_DIR, safeRecordingName(collectionId), safeRecordingName(sentenceId));
}

// 每条录音一个文件：recordings/<合集>/<句子>/<评分时间戳>.<扩展名>，互不覆盖；
// 数据库不存录音，历史明细里的 recorded_at_ms 就是文件名，直接对得上。
function saveAttemptRecording(collection, sentenceId, file, updatedAtMs) {
  const directory = recordingDirFor(collection.id, sentenceId);
  fs.mkdirSync(directory, { recursive: true });
  const originalExtension = path.extname(file.originalname || '').toLowerCase();
  const extension = RECORDING_EXTENSIONS.includes(originalExtension)
    ? originalExtension
    : MIME_EXTENSION[file.mimetype] || '.wav';
  const target = path.join(directory, `${Math.round(updatedAtMs)}${extension}`);
  const temporary = `${target}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(temporary, file.buffer);
  try {
    fs.renameSync(temporary, target);
  } catch (error) {
    if (!['EEXIST', 'EPERM'].includes(error.code)) {
      fs.rmSync(temporary, { force: true });
      throw error;
    }
    fs.rmSync(target, { force: true });
    fs.renameSync(temporary, target);
  }
  audioIndexCache = null; // 有新录音文件，索引缓存下次重建
  return target;
}

function findAttemptFile(collectionId, sentenceId, ts) {
  const directory = recordingDirFor(collectionId, sentenceId);
  let names;
  try {
    names = fs.readdirSync(directory);
  } catch {
    return null;
  }
  const match = names.find((name) => Number(path.basename(name, path.extname(name))) === ts);
  return match ? path.join(directory, match) : null;
}

function latestAttemptFile(collectionId, sentenceId) {
  const directory = recordingDirFor(collectionId, sentenceId);
  let names;
  try {
    names = fs.readdirSync(directory);
  } catch {
    return null;
  }
  let newest = null;
  for (const name of names) {
    const ts = Number(path.basename(name, path.extname(name)));
    if (!Number.isFinite(ts) || ts <= 0) continue;
    if (!newest || ts > newest.ts) newest = { ts, file: path.join(directory, name) };
  }
  return newest?.file || null;
}

// 旧版把每句的录音覆盖式存成 recordings/<合集>/<句子>.<ext>；迁移成按时间戳的目录结构，
// 时间戳取该句最新一次评分的时间（旧平铺文件就是那次评分写入的），没有评分记录就用文件修改时间。
function migrateLegacyRecordingFiles(latestTs) {
  let collectionDirs;
  try {
    collectionDirs = fs.readdirSync(RECORDING_DIR, { withFileTypes: true });
  } catch {
    return;
  }
  let moved = 0;
  for (const entry of collectionDirs) {
    if (!entry.isDirectory()) continue;
    const collectionDir = path.join(RECORDING_DIR, entry.name);
    let files;
    try {
      files = fs.readdirSync(collectionDir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const file of files) {
      if (!file.isFile()) continue;
      const extension = path.extname(file.name).toLowerCase();
      if (!RECORDING_EXTENSIONS.includes(extension)) continue;
      const stem = path.basename(file.name, extension);
      if (/^\d+$/.test(stem)) continue; // 已经是新命名
      const source = path.join(collectionDir, file.name);
      const targetDir = path.join(collectionDir, stem);
      const ts = latestTs.get(`${entry.name}/${stem}`) || Math.round(fs.statSync(source).mtimeMs);
      fs.mkdirSync(targetDir, { recursive: true });
      try {
        fs.renameSync(source, path.join(targetDir, `${ts}${extension}`));
        moved += 1;
      } catch (error) {
        console.warn(`  录音迁移失败 ${file.name}: ${error.message}`);
      }
    }
  }
  if (moved) console.log(`  已把 ${moved} 个旧版平铺录音迁移为按时间戳保存（recordings/<合集>/<句子>/<时间戳>.<ext>）`);
}

// 每句成功评分存一条；一课的所有句子都评过，才算完成打卡。
const CJK = /[\u3400-\u9fff\uF900-\uFAFF]/;
// 与前端合并结果同一口径：按每句标准音节数加权。
// 老记录没有存音节数时用这个启发式：汉字各 1 个音节，拉丁/数字串（GAG、OK）按 1 组 ≈ 1 个音节。
const syllableWeight = (text) => {
  const cjk = [...text].filter((char) => CJK.test(char)).length;
  const latinRuns = (text.match(/[A-Za-z0-9]+/g) || []).length;
  return cjk + latinRuns || 1;
};

// 「最近打卡」窗口：只回传过去 12 小时的记录，按课去重（同一课只留最新一条），最多 200 条（新→旧）
const RECENT_WINDOW_MS = 12 * 60 * 60 * 1000;
const RECENT_LIMIT = 200;
// 打卡日界线：凌晨 4 点前打的卡算前一天。统计时把时间戳前移 4 小时再取日历日（与前端 renderTodayCard 同口径）
const DAY_CUTOFF_MS = 4 * 60 * 60 * 1000;

function summarizeCheckins(d, collection = DEFAULT_COLLECTION) {
  const days = {};
  const sentences = {};
  const recentByDay = new Map();
  const activeDayKeys = new Set(); // 有打卡记录的日期（本机时区，凌晨 4 点前算前一天），用于「已打卡 N 天」
  let total = 0;
  const recentSince = Date.now() - RECENT_WINDOW_MS;
  for (const r of d.records) {
    if ((r.collection || DEFAULT_COLLECTION.id) !== collection.id) continue;
    total += 1;
    const recordDate = new Date((Number(r.ts) || 0) - DAY_CUTOFF_MS);
    if (!Number.isNaN(recordDate.getTime())) {
      activeDayKeys.add(`${recordDate.getFullYear()}-${recordDate.getMonth() + 1}-${recordDate.getDate()}`);
    }
    if ((Number(r.ts) || 0) >= recentSince) {
      const item = { ts: Number(r.ts) || 0, day: r.day, sentenceId: r.sentenceId, score: Number(r.score) || 0, passed: Boolean(r.passed) };
      const prev = recentByDay.get(r.day);
      if (!prev || item.ts >= prev.ts) recentByDay.set(r.day, item);
    }
    if (!r.sentenceId) continue;
    const current = (sentences[r.sentenceId] ||= { count: 0, bestScore: 0, lastScore: 0, lastAt: 0, threshold: 90, weight: 0 });
    current.count += 1;
    current.bestScore = Math.max(current.bestScore, Number(r.score) || 0);
    current.lastScore = Number(r.score) || 0;
    current.threshold = PASS_SCORE[r.language] ?? 90;
    // 加权用评分分析出的标准音节数（新记录有存），老记录回退到启发式
    current.weight = Number(r.weight) || current.weight || 0;
    // 通过状态跟最新一次，与详情页"上一次评分结果"同口径
    current.passed = current.lastScore >= current.threshold;
    current.lastAt = Math.max(current.lastAt, Number(r.ts) || 0);
  }
  // 每句最新那次评分的录音文件还在不在（按文件名时间戳核对），前端懒恢复「最后录音」时用
  const audioIndex = recordingIndex();
  for (const [sentenceId, sentence] of Object.entries(sentences)) {
    sentence.hasAudio = audioIndex.get(collection.id)?.get(sentenceId)?.has(sentence.lastAt) || false;
  }
  for (const lesson of collection.lessons) {
    const completed = lesson.sentences.filter((sentence) => sentences[sentence.id]);
    if (!completed.length) continue;
    const sentenceCount = lesson.sentences.length;
    const weightOf = (sentence) => sentences[sentence.id].weight || syllableWeight(sentence.text);
    const totalWeight = completed.reduce((sum, sentence) => sum + weightOf(sentence), 0);
    // bestScore 对外是"最新一次"的加权合并分（与评分详情一致），maxScore 是历史最高合并分
    const bestScore = Math.round(completed.reduce((sum, sentence) => sum + sentences[sentence.id].lastScore * weightOf(sentence), 0) / totalWeight);
    const maxScore = Math.round(completed.reduce((sum, sentence) => sum + sentences[sentence.id].bestScore * weightOf(sentence), 0) / totalWeight);
    const threshold = sentences[completed[completed.length - 1].id].threshold ?? 90;
    days[String(lesson.day)] = {
      count: completed.reduce((total, sentence) => total + sentences[sentence.id].count, 0),
      doneCount: completed.length,
      sentenceCount,
      complete: completed.length === sentenceCount,
      bestScore,
      maxScore,
      threshold,
      // 各句都已评分且加权总分达到合格线，即整课通过；低分句单独标记。
      passed: completed.length === sentenceCount && bestScore >= threshold,
      lastAt: Math.max(...completed.map((sentence) => sentences[sentence.id].lastAt)),
    };
  }
  // 「最近打卡」展示的是整课结果，必须和右侧的「上一次评分」保持同一口径。
  // recentByDay 只负责找出每课最近一次活动的时间；分数与通过状态取上面已经
  // 按各句最新成绩、标准音节数加权算好的课程汇总。否则最后评的一句（例如 84）
  // 会覆盖整课总分（例如 93），造成左右显示不一致。
  const recent = [...recentByDay.values()]
    .map((item) => {
      const day = days[String(item.day)];
      return day
        ? { ...item, score: day.bestScore, passed: day.passed }
        : item;
    })
    .sort((a, b) => b.ts - a.ts);
  return { days, sentences, total, activeDays: activeDayKeys.size, recentTotal: recent.length, recent: recent.slice(0, RECENT_LIMIT) };
}

// 与前端练习历史条目同构：恢复「上一次评分结果」的代码两条来源共用
function buildDetailEntry(rec, { threshold, expectedJyutping, transcribedJyutping, analysis, scoreMethod, targetSource, upstreamScore, upstreamExpectedJyutping }) {
  return {
    ts: rec.ts,
    collection: rec.collection,
    day: rec.day,
    sentenceId: rec.sentenceId,
    score: rec.score,
    passed: rec.passed,
    language: rec.language || null,
    threshold,
    weight: rec.weight || 0,
    scoreMethod,
    targetSource,
    upstreamScore,
    upstreamExpectedJyutping,
    expected: expectedJyutping || '',
    transcribed: transcribedJyutping || '',
    accuracy: analysis?.syllableAccuracy ?? null,
    counts: analysis?.counts || null,
    tips: analysis?.tips || [],
    items: analysis?.items?.map(({ char, expected, actual, kind, label, hint }) => ({ char, expected, actual, kind, label, hint })) || [],
  };
}

const app = express();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 接口上限 10MB
});

// GET JSON 的统一出口：课文表这类大响应按 key 缓存「序列化 + gzip」结果（静态数据只算一次），
// 带强 ETag，浏览器 If-None-Match 命中直接 304，不重传正文；gzip 把 ~500KB 的课文表压到 ~100KB。
const jsonCache = new Map();

function jsonEntry(payload) {
  const buf = Buffer.from(JSON.stringify(payload));
  return {
    buf,
    gzip: zlib.gzipSync(buf),
    etag: `"${zlib.crc32(buf).toString(16)}-${buf.length.toString(16)}"`,
  };
}

function sendGzipWithEtag(req, res, entry) {
  res.set({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache',
    Vary: 'Accept-Encoding',
    ETag: entry.etag,
  });
  const ifNoneMatch = String(req.headers['if-none-match'] || '');
  if (ifNoneMatch && ifNoneMatch.split(',').map((tag) => tag.trim()).includes(entry.etag)) {
    return res.status(304).end();
  }
  const acceptsGzip = /\bgzip\b/.test(String(req.headers['accept-encoding'] || ''));
  if (acceptsGzip) res.set('Content-Encoding', 'gzip');
  res.send(acceptsGzip ? entry.gzip : entry.buf);
}

function sendJson(req, res, payload, cacheKey) {
  let entry = cacheKey ? jsonCache.get(cacheKey) : undefined;
  if (!entry) {
    entry = jsonEntry(payload);
    if (cacheKey) jsonCache.set(cacheKey, entry);
  }
  sendGzipWithEtag(req, res, entry);
}

// 粤拼音节库（words.hk 音节 mp3，npm run fetch:jyutping-audio 下载）：文件内容不变，放长缓存
app.use('/jyutping-audio', express.static(path.join(__dirname, 'public', 'jyutping-audio'), { maxAge: '30d', immutable: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/listening-originals', express.static(path.join(__dirname, 'listening-resources', 'originals')));

app.use('/api/listening', createListeningRouter({ store: listeningStore }));

app.get('/api/config', (req, res) => {
  sendJson(req, res, {
    hasServerKey: Boolean(SERVER_KEY),
    lessonDir: LESSON_DIR,
    passScore: PASS_SCORE,
    maxUploadMB: 10,
  });
});

app.get('/api/collections', (req, res) => {
  sendJson(req, res, {
    defaultCollection: DEFAULT_COLLECTION.id,
    collections: collections.map((collection) => ({
      id: collection.id,
      name: collection.name,
      description: collection.description,
      lessonCount: collection.lessons.length,
      sentenceCount: collection.lessons.reduce((total, lesson) => total + lesson.sentences.length, 0),
      slowAudioCount: collection.lessons.filter((lesson) => lesson.slowAudio).length,
    })),
  }, 'collections');
});

app.get('/api/lessons', (req, res) => {
  const collection = getCollection(req.query.collection);
  sendJson(req, res, {
    collection: collection.id,
    lessons: collection.lessons.map((l) => ({
      day: l.day,
      title: l.title,
      hasAudio: Boolean(l.audio),
      hasSlowAudio: Boolean(l.slowAudio),
      sentences: l.sentences,
    })),
  }, `lessons:${collection.id}`);
});

app.get('/api/checkins', async (req, res, next) => {
  // 打卡记录会变，不走缓存 key，但同样有 ETag + gzip：内容没变就 304，变了才传正文
  try {
    const collection = getCollection(req.query.collection);
    sendJson(req, res, summarizeCheckins(await loadCheckins(collection.id), collection));
  } catch (error) {
    next(error);
  }
});

// 某一课每句最近一次评分的纠音细节（打开课文恢复「上一次评分结果」用，服务端长久保存）
app.get('/api/checkin-details', async (req, res, next) => {
  const collection = getCollection(req.query.collection);
  const day = Number(req.query.day);
  if (!Number.isFinite(day)) return res.status(400).json({ error: '缺少 day 参数' });
  try {
    sendJson(req, res, { details: await latestCheckinDetails(collection.id, day) });
  } catch (error) {
    next(error);
  }
});

// 历史页数据：全部打卡明细（新→旧，含句子文本/课文标题/当时那条录音是否还在）。
// 不带 collection 参数就返回所有合集；录音不在数据库，用文件名时间戳对上明细。
// 明细只在评分入库时变：按合集缓存序列化结果，评分后整体失效，浏览器再配合
// ETag 协商缓存，历史没变化就是 304，不再每次重拉几百 KB 明细。
const historyCache = new Map();
let audioIndexCache = null;

// 扫一遍 RECORDING_DIR 得到的 <合集>/<句子> -> 有哪些评分时间戳有录音，缓存到内存，
// 存新录音时置空重建（见 saveAttemptRecording），平时 /api/checkins、/api/history 直接复用。
function recordingIndex() {
  if (!audioIndexCache) audioIndexCache = scanRecordingIndex(collections.map((item) => item.id));
  return audioIndexCache;
}

app.get('/api/history', async (req, res, next) => {
  try {
    const collection = req.query.collection ? getCollection(req.query.collection) : null;
    const key = collection?.id || 'all';
    let entry = historyCache.get(key);
    if (!entry) {
      const details = await loadHistoryDetails(collection?.id);
      const audioIndex = recordingIndex();
      for (const detail of details) {
        detail.hasAudio = audioIndex.get(detail.collection)?.get(detail.sentenceId)?.has(detail.ts) || false;
        // 老明细没存音节数时按句子文本启发式补上，前端加权合并要用
        if (!detail.weight) detail.weight = syllableWeight(detail.text || '');
      }
      entry = jsonEntry({ details });
      historyCache.set(key, entry);
    }
    sendGzipWithEtag(req, res, entry);
  } catch (error) {
    next(error);
  }
});

// 扫一遍 RECORDING_DIR，得到 <合集>/<句子> -> 有哪些评分时间戳有录音文件
function scanRecordingIndex(collectionIds) {
  const index = new Map();
  for (const collectionId of collectionIds) {
    const bySentence = new Map();
    let sentenceDirs;
    try {
      sentenceDirs = fs.readdirSync(RECORDING_DIR, { withFileTypes: true });
    } catch {
      return index;
    }
    const collectionDirName = safeRecordingName(collectionId);
    for (const dir of sentenceDirs) {
      if (dir.name !== collectionDirName || !dir.isDirectory()) continue;
      let entries;
      try {
        entries = fs.readdirSync(path.join(RECORDING_DIR, dir.name), { withFileTypes: true });
      } catch {
        continue;
      }
      for (const sentenceDir of entries) {
        if (!sentenceDir.isDirectory()) continue;
        const timestamps = new Set();
        try {
          for (const name of fs.readdirSync(path.join(RECORDING_DIR, dir.name, sentenceDir.name))) {
            const ts = Number(path.basename(name, path.extname(name)));
            if (Number.isFinite(ts) && ts > 0) timestamps.add(ts);
          }
        } catch {
          continue;
        }
        if (timestamps.size) bySentence.set(sentenceDir.name, timestamps);
      }
    }
    index.set(collectionId, bySentence);
  }
  return index;
}

// 查字典：整句分词注音；多音字附已核词例、场景和原始候选音。
app.get('/api/jyutping', (req, res) => {
  const text = String(req.query.text || '').trim().slice(0, 100);
  if (!text) return res.status(400).json({ error: '输入点什么再查' });
  try {
    const items = lookupJyutping(text, { details: req.query.details === '1' });
    sendJson(req, res, { text, items });
  } catch (err) {
    res.status(500).json({ error: `粤拼查询失败：${err.message || err}` });
  }
});

// 录音回放：带 ts 播历史明细里那条当时的录音，不带 ts 播最新一条（打开课文恢复「最后录音」用）
app.get('/api/recording/:sentenceId', async (req, res, next) => {
  const collection = getCollection(req.query.collection);
  const sentenceId = req.params.sentenceId;
  if (!collectionHasSentence(collection, sentenceId)) return res.status(404).json({ error: '句子不存在' });
  try {
    const ts = Number(req.query.ts);
    const file = Number.isFinite(ts) && ts > 0
      ? findAttemptFile(collection.id, sentenceId, ts)
      : latestAttemptFile(collection.id, sentenceId);
    if (!file || !fs.existsSync(file)) {
      return res.status(404).json({ error: '这句话还没有已保存录音' });
    }
    // 只许浏览器缓存并带 ETag 回来验证（同一时间戳的录音内容不会变）。
    res.set({
      'Content-Type': EXTENSION_MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
    });
    res.sendFile(file);
  } catch (error) {
    next(error);
  }
});

// 示范音频（支持 Range，前端可以拖进度条）
app.get('/api/audio/:day', (req, res) => {
  const collection = getCollection(req.query.collection);
  const lesson = collection.lessonByDay.get(Number(req.params.day));
  if (!lesson || !lesson.audio) return res.status(404).json({ error: '这一课没有示范音频' });
  const audio = req.query.variant === 'slow' ? lesson.slowAudio : lesson.audio;
  if (!audio) return res.status(404).json({ error: '这一课没有慢速示范音频' });
  const file = path.join(collection.audioDir, audio);
  if (!fs.existsSync(file)) return res.status(404).json({ error: `示范音频不存在: ${file}` });
  // 音频内容与 day+variant 一一对应，允许缓存但每次回源验证（ETag 没变就 304）
  res.set('Cache-Control', 'public, no-cache');
  res.sendFile(file);
});

app.post('/api/score', upload.single('audio'), async (req, res) => {
  const started = Date.now();
  try {
    const language = req.body.language || 'cantonese';
    const apiKey = (req.body.api_key || '').trim() || SERVER_KEY;
    const collection = getCollection(req.body.collection);
    const day = Number(req.body.day) || null;
    const sentenceId = (req.body.sentence_id || '').trim() || null;
    let text = (req.body.text || '').trim();
    let sentence = null;
    if (day || sentenceId) {
      sentence = collection.lessonByDay.get(day)?.sentences.find((item) => item.id === sentenceId);
      if (!sentence) return res.status(400).json({ error: '课文或句子不存在' });
      text = sentence.text;
    }

    if (!req.file) return res.status(400).json({ error: '没有收到音频' });
    if (!text) return res.status(400).json({ error: '没有目标句子' });

    if (!apiKey) return res.status(400).json({ error: '缺少 API Key：写进 .env 的 CANTONESE_AI_API_KEY，或在页面右上角填一个' });

    const form = new FormData();
    form.append('api_key', apiKey);
    form.append('text', text);
    form.append('language', language);
    form.append(
      'audio',
      new Blob([req.file.buffer], { type: req.file.mimetype || 'application/octet-stream' }),
      req.file.originalname || 'audio.wav',
    );

    // 上游偶发 502/503/504（Cloudflare 回源抖动）时自动重试两次
    let upstream;
    let raw;
    for (let attempt = 1; ; attempt++) {
      try {
        upstream = await fetch(API_URL, {
          method: 'POST',
          body: form,
          signal: AbortSignal.timeout(60_000),
        });
        raw = await upstream.text();
      } catch (err) {
        if (attempt < 3) {
          await new Promise((r) => setTimeout(r, 800 * attempt));
          continue;
        }
        throw err;
      }
      if ([502, 503, 504].includes(upstream.status) && attempt < 3) {
        await new Promise((r) => setTimeout(r, 800 * attempt));
        continue;
      }
      break;
    }

    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      return res.status(502).json({ error: `接口返回了非 JSON 内容 (HTTP ${upstream.status})`, raw: raw.slice(0, 500) });
    }

    if (!upstream.ok || data.success === false) {
      return res.status(upstream.ok ? 400 : upstream.status).json({
        error: data.message || data.error || `评分接口失败 (HTTP ${upstream.status})`,
        upstream: data,
      });
    }

    const upstreamExpectedJyutping = pickJyutping(data, 'expected');
    if (language === 'cantonese' && !Object.keys(data).some((key) =>
      key.toLowerCase().includes('jyutping') && key.toLowerCase().includes('trans') && typeof data[key] === 'string')) {
      return res.status(502).json({ error: '评分接口没有返回识别粤拼，无法按课文注音计算分数' });
    }
    const transcribedJyutping = pickJyutping(data, 'transcribed');
    const upstreamScore = Number(data.score ?? 0);
    const threshold = PASS_SCORE[language] ?? 90;
    const grading = language === 'cantonese' ? gradeCantonese({
      text, sourceJyutping: sentence?.jyutping, upstreamExpectedJyutping,
      transcribedJyutping, upstreamScore, threshold,
    }) : {
      score: Math.round(upstreamScore), passed: Math.round(upstreamScore) >= threshold,
      threshold, expectedJyutping: upstreamExpectedJyutping, transcribedJyutping, analysis: null,
      upstreamScore, upstreamExpectedJyutping,
    };
    const { score, passed, analysis } = grading;

    const rec = {
      ts: Date.now(),
      collection: collection.id,
      day,
      sentenceId,
      mode: 'single',
      language,
      score,
      passed,
      weight: analysis?.expectedCount || syllableWeight(text),
    };
    const detail = day && sentenceId
      ? buildDetailEntry(rec, grading)
      : null;
    if (sentenceId) saveAttemptRecording(collection, sentenceId, req.file, rec.ts);
    await saveScoreAttempt({
      rec: day ? rec : null,
      detail,
    });
    historyCache.clear(); // 有新打卡明细，历史页响应缓存失效
    const checkins = day ? summarizeCheckins(await loadCheckins(collection.id), collection) : null;

    res.json({
      ...data,
      // 粤语按源注音与接口识别音节计算；保留接口原分和原目标粤拼。
      ...grading,
      text,
      language,
      elapsedMs: Date.now() - started,
      audioBytes: req.file.size,
      checkins,
    });
  } catch (err) {
    const code = err?.cause?.code || err?.code;
    let message;
    if (err?.name === 'TimeoutError') message = '评分接口超时（60s）';
    else if (code === 'NO_TARGET_JYUTPING') message = err.message;
    else if (err?.isDatabaseError) message = `评分已完成，但 MySQL 持久化失败：${err.message || code || err}`;
    else if (code) message = `连不上 cantonese.ai（${code}）${PROXY_HINT}`;
    else message = err?.message || String(err);
    res.status(500).json({ error: message });
  }
});

app.use((err, req, res, next) => {
  if (err?.code === 'LIMIT_FILE_SIZE') return res.status(413).json({ error: '音频超过 10MB，接口不收' });
  res.status(500).json({ error: err?.message || '服务器错误' });
});

// 旧版平铺录音（recordings/<合集>/<句子>.<ext>，重录覆盖）迁到按时间戳的目录结构，幂等可重跑
try {
  migrateLegacyRecordingFiles(await latestDetailTsBySentence());
} catch (error) {
  console.warn(`旧录音文件迁移跳过（不影响启动）：${error.message || error}`);
}

const server = app.listen(PORT, () => {
  const db = databaseInfo();
  console.log(`\n  粤语纠音 demo -> http://localhost:${PORT}`);
  console.log(`  合集 ${collections.length} 个，课文 ${collections.reduce((total, collection) => total + collection.lessons.length, 0)} 课`);
  for (const collection of collections) console.log(`  - ${collection.name}: ${collection.lessons.length} 课，素材目录 ${collection.audioDir}`);
  console.log(`  数据库: MySQL ${db.user}@${db.host}:${db.port}/${db.database}`);
  console.log(`  API Key: ${SERVER_KEY ? '已从 .env 读取' : '未配置（可在页面右上角临时填写）'}`);
  if (PROXY) console.log(`  代理: ${PROXY} ${PROXY_ON ? '(已启用)' : '⚠ 未启用，外网请求会失败，请用 npm start'}`);
  console.log('');
});

let shuttingDown = false;
async function shutdown() {
  if (shuttingDown) return;
  shuttingDown = true;
  server.close(async () => {
    await closeDatabase();
    process.exit(0);
  });
}

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
