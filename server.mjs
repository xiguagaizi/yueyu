import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import multer from 'multer';
import { analyze } from './lib/jyutping.mjs';
import { mockScore } from './lib/mock.mjs';

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
// 示范音频目录，默认同上；指向裁过开场白的副本就能直接用（文件名要一致）
const AUDIO_DIR = process.env.AUDIO_DIR || LESSON_DIR;
const RESOURCE_DIR = process.env.RESOURCE_DIR || path.join(__dirname, 'resource');
const RECORDING_DIR = process.env.RECORDING_DIR || path.join(__dirname, 'recordings');
const PASS_SCORE = { cantonese: 90, english: 70, mandarin: 70 };
const MOCK = process.env.MOCK_SCORE === '1'; // 没 key 时先把界面跑通

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

const lessonsFile = path.join(__dirname, 'data', 'lessons.json');
if (!fs.existsSync(lessonsFile)) {
  console.error('缺少 data/lessons.json，请先运行: npm run build:lessons');
  process.exit(1);
}
const resourceLessonsFile = path.join(__dirname, 'data', 'resource-lessons.json');
const collections = [
  {
    id: 'original',
    name: '初级打卡',
    description: '现有打卡课文与原声示范',
    audioDir: AUDIO_DIR,
    lessons: JSON.parse(fs.readFileSync(lessonsFile, 'utf8')).lessons,
  },
  fs.existsSync(resourceLessonsFile) ? {
    id: 'original-slow',
    name: '粤语派',
    description: 'resource 新合集，按日期收录原声与慢速示范',
    audioDir: RESOURCE_DIR,
    lessons: JSON.parse(fs.readFileSync(resourceLessonsFile, 'utf8')).lessons,
  } : null,
].filter(Boolean).map((collection) => ({
  ...collection,
  lessonByDay: new Map(collection.lessons.map((lesson) => [lesson.day, lesson])),
}));
const collectionById = new Map(collections.map((collection) => [collection.id, collection]));
const DEFAULT_COLLECTION = collections[0];

function getCollection(id) {
  return collectionById.get(id) || DEFAULT_COLLECTION;
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

function safeRecordingName(value) {
  return String(value).replace(/[^a-zA-Z0-9._-]/g, '_');
}

function collectionHasSentence(collection, sentenceId) {
  return collection.lessons.some((lesson) => lesson.sentences.some((sentence) => sentence.id === sentenceId));
}

function findLatestRecording(collection, sentenceId) {
  const directory = path.join(RECORDING_DIR, safeRecordingName(collection.id));
  const stem = safeRecordingName(sentenceId);
  for (const extension of RECORDING_EXTENSIONS) {
    const file = path.join(directory, `${stem}${extension}`);
    if (fs.existsSync(file)) return file;
  }
  return null;
}

function saveLatestRecording(collection, sentenceId, file) {
  const directory = path.join(RECORDING_DIR, safeRecordingName(collection.id));
  fs.mkdirSync(directory, { recursive: true });
  const originalExtension = path.extname(file.originalname || '').toLowerCase();
  const extension = RECORDING_EXTENSIONS.includes(originalExtension)
    ? originalExtension
    : MIME_EXTENSION[file.mimetype] || '.wav';
  const stem = safeRecordingName(sentenceId);
  const target = path.join(directory, `${stem}${extension}`);
  const temporary = `${target}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(temporary, file.buffer);
  for (const candidateExtension of RECORDING_EXTENSIONS) {
    if (candidateExtension !== extension) fs.rmSync(path.join(directory, `${stem}${candidateExtension}`), { force: true });
  }
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
  return target;
}

// 每句成功评分存一条；一课的所有句子都评过，才算完成打卡。
const checkinsFile = path.join(__dirname, 'data', 'checkins.json');

const CJK = /[\u3400-\u9fff\uF900-\uFAFF]/;
// 与前端合并结果同一口径：按每句标准音节数加权。
// 老记录没有存音节数时用这个启发式：汉字各 1 个音节，拉丁/数字串（GAG、OK）按 1 组 ≈ 1 个音节。
const syllableWeight = (text) => {
  const cjk = [...text].filter((char) => CJK.test(char)).length;
  const latinRuns = (text.match(/[A-Za-z0-9]+/g) || []).length;
  return cjk + latinRuns || 1;
};

function loadCheckins() {
  try {
    const d = JSON.parse(fs.readFileSync(checkinsFile, 'utf8'));
    return Array.isArray(d.records) ? d : { records: [] };
  } catch {
    return { records: [] };
  }
}

function summarizeCheckins(d, collection = DEFAULT_COLLECTION) {
  const days = {};
  const sentences = {};
  let total = 0;
  for (const r of d.records) {
    if ((r.collection || DEFAULT_COLLECTION.id) !== collection.id) continue;
    total += 1;
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
      // 列表打勾与展示的最新合并分一致：达到合格线（粤语 90）即打勾
      passed: completed.length === sentenceCount && bestScore >= threshold,
      lastAt: Math.max(...completed.map((sentence) => sentences[sentence.id].lastAt)),
    };
  }
  return { days, sentences, total };
}

function saveCheckin(rec, collection) {
  const d = loadCheckins();
  d.records.push(rec);
  fs.writeFileSync(checkinsFile, JSON.stringify(d));
  return summarizeCheckins(d, collection);
}

const app = express();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 接口上限 10MB
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/config', (req, res) => {
  res.json({
    hasServerKey: Boolean(SERVER_KEY),
    mock: MOCK,
    lessonDir: LESSON_DIR,
    passScore: PASS_SCORE,
    maxUploadMB: 10,
  });
});

app.get('/api/collections', (req, res) => {
  res.json({
    defaultCollection: DEFAULT_COLLECTION.id,
    collections: collections.map((collection) => ({
      id: collection.id,
      name: collection.name,
      description: collection.description,
      lessonCount: collection.lessons.length,
      sentenceCount: collection.lessons.reduce((total, lesson) => total + lesson.sentences.length, 0),
      slowAudioCount: collection.lessons.filter((lesson) => lesson.slowAudio).length,
    })),
  });
});

app.get('/api/lessons', (req, res) => {
  const collection = getCollection(req.query.collection);
  res.json({
    collection: collection.id,
    lessons: collection.lessons.map((l) => ({
      day: l.day,
      title: l.title,
      hasAudio: Boolean(l.audio),
      hasSlowAudio: Boolean(l.slowAudio),
      sentences: l.sentences,
    })),
  });
});

app.get('/api/checkins', (req, res) => {
  res.json(summarizeCheckins(loadCheckins(), getCollection(req.query.collection)));
});

app.get('/api/recording/:sentenceId', (req, res) => {
  const collection = getCollection(req.query.collection);
  const sentenceId = req.params.sentenceId;
  if (!collectionHasSentence(collection, sentenceId)) return res.status(404).json({ error: '句子不存在' });
  const file = findLatestRecording(collection, sentenceId);
  if (!file) return res.status(404).json({ error: '这句话还没有已保存录音' });
  res.set('Cache-Control', 'no-store');
  res.sendFile(file);
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
    if (day || sentenceId) {
      const sentence = collection.lessonByDay.get(day)?.sentences.find((item) => item.id === sentenceId);
      if (!sentence) return res.status(400).json({ error: '课文或句子不存在' });
      text = sentence.text;
    }

    if (!req.file) return res.status(400).json({ error: '没有收到音频' });
    if (!text) return res.status(400).json({ error: '没有目标句子' });

    if (MOCK) {
      const fake = mockScore(text);
      const mockAnalysis = language === 'cantonese' ? analyze(fake.expectedJyutping, fake.transcribedJyutping, text) : null;
      if (sentenceId) saveLatestRecording(collection, sentenceId, req.file);
      return res.json({
        ...fake,
        text,
        language,
        threshold: PASS_SCORE[language] ?? 90,
        elapsedMs: Date.now() - started,
        analysis: mockAnalysis,
        audioBytes: req.file.size,
        checkins: day
          ? saveCheckin({
              ts: Date.now(),
              collection: collection.id,
              day,
              sentenceId,
              mode: 'single',
              language,
              score: Math.round(fake.score ?? 0),
              passed: Boolean(fake.passed),
              mock: true,
              weight: mockAnalysis?.expectedCount || syllableWeight(text),
            }, collection)
          : null,
      });
    }

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

    const expectedJyutping = pickJyutping(data, 'expected');
    const transcribedJyutping = pickJyutping(data, 'transcribed');

    const score = Math.round(data.score ?? 0);
    const passed = score >= (PASS_SCORE[language] ?? 90);
    const analysis = language === 'cantonese' ? analyze(expectedJyutping, transcribedJyutping, text) : null;
    if (sentenceId) saveLatestRecording(collection, sentenceId, req.file);

    res.json({
      ...data,
      text,
      language,
      threshold: PASS_SCORE[language] ?? 90,
      expectedJyutping,
      transcribedJyutping,
      elapsedMs: Date.now() - started,
      analysis,
      audioBytes: req.file.size,
      checkins: day
        ? saveCheckin({
            ts: Date.now(),
            collection: collection.id,
            day,
            sentenceId,
            mode: 'single',
            language,
            score,
            passed,
            mock: false,
            weight: analysis?.expectedCount || syllableWeight(text),
          }, collection)
        : null,
    });
  } catch (err) {
    const code = err?.cause?.code || err?.code;
    let message;
    if (err?.name === 'TimeoutError') message = '评分接口超时（60s）';
    else if (code) message = `连不上 cantonese.ai（${code}）${PROXY_HINT}`;
    else message = err?.message || String(err);
    res.status(500).json({ error: message });
  }
});

app.use((err, req, res, next) => {
  if (err?.code === 'LIMIT_FILE_SIZE') return res.status(413).json({ error: '音频超过 10MB，接口不收' });
  res.status(500).json({ error: err?.message || '服务器错误' });
});

// 发音：代理在线 TTS（粤语），内存缓存，给前端逐字/整句点读兜底
const ttsCache = new Map();

app.get('/api/tts/:text', async (req, res) => {
  const text = req.params.text.slice(0, 200);
  if (!/^[\u3400-\u9fff\uF900-\uFAFF\u3000-\u303F\uFF00-\uFFEF，、。！？；：,.!?;:\s（）()\-]+$/.test(text)) {
    return res.status(400).json({ error: '只支持汉字和常用标点' });
  }
  try {
    let buf = ttsCache.get(text);
    if (!buf) {
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=yue&q=${encodeURIComponent(text)}`;
      const r = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', Referer: 'https://translate.google.com/' },
        signal: AbortSignal.timeout(8000),
      });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      buf = Buffer.from(await r.arrayBuffer());
      ttsCache.set(text, buf);
    }
    res.set({ 'Content-Type': 'audio/mpeg', 'Cache-Control': 'public, max-age=86400' });
    res.send(buf);
  } catch (err) {
    res.status(502).json({ error: `TTS 失败：${err.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`\n  粤语纠音 demo -> http://localhost:${PORT}`);
  console.log(`  合集 ${collections.length} 个，课文 ${collections.reduce((total, collection) => total + collection.lessons.length, 0)} 课`);
  for (const collection of collections) console.log(`  - ${collection.name}: ${collection.lessons.length} 课，素材目录 ${collection.audioDir}`);
  console.log(`  API Key: ${SERVER_KEY ? '已从 .env 读取' : '未配置（可在页面右上角临时填写）'}`);
  if (PROXY) console.log(`  代理: ${PROXY} ${PROXY_ON ? '(已启用)' : '⚠ 未启用，外网请求会失败，请用 npm start'}`);
  if (MOCK) console.log('  ⚠ MOCK_SCORE=1：不会真的调接口，返回的是假数据');
  console.log('');
});
