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
const { lessons } = JSON.parse(fs.readFileSync(lessonsFile, 'utf8'));
const lessonByDay = new Map(lessons.map((l) => [l.day, l]));

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

app.get('/api/lessons', (req, res) => {
  res.json({
    lessons: lessons.map((l) => ({
      day: l.day,
      title: l.title,
      hasAudio: Boolean(l.audio),
      sentences: l.sentences,
    })),
  });
});

// 示范音频（支持 Range，前端可以拖进度条）
app.get('/api/audio/:day', (req, res) => {
  const lesson = lessonByDay.get(Number(req.params.day));
  if (!lesson || !lesson.audio) return res.status(404).json({ error: '这一课没有示范音频' });
  const file = path.join(AUDIO_DIR, lesson.audio);
  if (!fs.existsSync(file)) return res.status(404).json({ error: `示范音频不存在: ${file}` });
  res.sendFile(file);
});

app.post('/api/score', upload.single('audio'), async (req, res) => {
  const started = Date.now();
  try {
    const language = req.body.language || 'cantonese';
    const apiKey = (req.body.api_key || '').trim() || SERVER_KEY;

    // 整课连读时前端把每句都传过来，拼成一段送评分，回来再按句切开
    let segments = null;
    try {
      const parsed = req.body.segments ? JSON.parse(req.body.segments) : null;
      if (Array.isArray(parsed) && parsed.length) segments = parsed.map(String).filter(Boolean);
    } catch {
      return res.status(400).json({ error: 'segments 不是合法 JSON' });
    }
    const text = segments ? segments.join(' ') : (req.body.text || '').trim();

    if (!req.file) return res.status(400).json({ error: '没有收到音频' });
    if (!text) return res.status(400).json({ error: '没有目标句子' });

    if (MOCK) {
      const fake = mockScore(text);
      return res.json({
        ...fake,
        text,
        language: 'cantonese',
        threshold: PASS_SCORE.cantonese,
        elapsedMs: Date.now() - started,
        analysis: analyze(fake.expectedJyutping, fake.transcribedJyutping, text, segments),
        audioBytes: req.file.size,
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

    const upstream = await fetch(API_URL, {
      method: 'POST',
      body: form,
      signal: AbortSignal.timeout(60_000),
    });

    const raw = await upstream.text();
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

    res.json({
      ...data,
      text,
      segments,
      language,
      threshold: PASS_SCORE[language] ?? 90,
      expectedJyutping,
      transcribedJyutping,
      elapsedMs: Date.now() - started,
      analysis: language === 'cantonese' ? analyze(expectedJyutping, transcribedJyutping, text, segments) : null,
      audioBytes: req.file.size,
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

app.listen(PORT, () => {
  console.log(`\n  粤语纠音 demo -> http://localhost:${PORT}`);
  console.log(`  课文 ${lessons.length} 课，素材目录 ${LESSON_DIR}`);
  if (AUDIO_DIR !== LESSON_DIR) console.log(`  示范音频目录 ${AUDIO_DIR}`);
  console.log(`  API Key: ${SERVER_KEY ? '已从 .env 读取' : '未配置（可在页面右上角临时填写）'}`);
  if (PROXY) console.log(`  代理: ${PROXY} ${PROXY_ON ? '(已启用)' : '⚠ 未启用，外网请求会失败，请用 npm start'}`);
  if (MOCK) console.log('  ⚠ MOCK_SCORE=1：不会真的调接口，返回的是假数据');
  console.log('');
});
