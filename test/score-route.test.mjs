import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';
import { gradeCantonese } from '../lib/pronunciation-score.mjs';

// 执行真实评分路由，以内存替代上游请求、录音文件和数据库。
const server = fs.readFileSync(new URL('../server.mjs', import.meta.url), 'utf8');
const picker = server.slice(server.indexOf('function pickJyutping('), server.indexOf('\nawait initDatabase();'));
const detailBuilder = server.slice(server.indexOf('function buildDetailEntry('), server.indexOf('\nconst app = express();'));
const route = server.slice(server.indexOf("app.post('/api/score'"), server.indexOf('\napp.use((err, req, res, next)'));

async function request(upstreamData, language = 'cantonese') {
  const saved = [];
  const sent = [];
  let handler;
  const sentence = { id: '343-2', text: '呣！', jyutping: [{ char: '呣', jp: 'm6' }, { char: '！', jp: null }] };
  const collection = { id: 'original-slow', lessonByDay: new Map([[343, { sentences: [sentence] }]]) };
  vm.runInNewContext(`${picker}\n${detailBuilder}\n${route}`, {
    app: { post: (_path, _upload, callback) => { handler = callback; } },
    upload: { single: () => null },
    gradeCantonese,
    getCollection: () => collection,
    SERVER_KEY: 'test-key', API_URL: 'https://example.invalid/score', PASS_SCORE: { cantonese: 90, english: 70 },
    FormData, Blob, AbortSignal, setTimeout,
    fetch: async (_url, options) => {
      sent.push(options.body);
      return { ok: true, status: 200, text: async () => JSON.stringify(upstreamData) };
    },
    saveAttemptRecording: () => {},
    saveScoreAttempt: async (entry) => saved.push(entry),
    historyCache: new Map(),
    loadCheckins: async () => ({}), summarizeCheckins: () => ({}), syllableWeight: () => 1,
    PROXY_HINT: '',
  });
  const response = { statusCode: 200, status(code) { this.statusCode = code; return this; }, json(data) { this.body = data; return this; } };
  await handler({ body: { collection: collection.id, day: '343', sentence_id: sentence.id, text: '不可信文本', language },
    file: { buffer: new Uint8Array([1, 2]), mimetype: 'audio/wav', originalname: 'test.wav', size: 2 } }, response);
  return { response, saved, sent };
}

test('返回分数、纠音标准和数据库打卡成绩都按课文源音计算', async () => {
  const { response, saved, sent } = await request({ success: true, score: 50, expectedJyutping: 'm2', transcribedJyutping: 'm6' });
  assert.equal(response.statusCode, 200);
  assert.equal(sent[0].get('text'), '呣！');
  assert.equal(response.body.score, 100);
  assert.equal(response.body.passed, true);
  assert.equal(response.body.expectedJyutping, 'm6');
  assert.equal(response.body.transcribedJyutping, 'm6');
  assert.equal(saved[0].rec.score, 100);
  assert.equal(saved[0].detail.score, 100);
  assert.equal(saved[0].detail.expected, 'm6');
  assert.equal(saved[0].detail.upstreamScore, 50);
  assert.equal(saved[0].detail.upstreamExpectedJyutping, 'm2');
});

test('上游没有识别粤拼时返回错误，不创建错误成绩', async () => {
  const { response, saved } = await request({ success: true, score: 100, expectedJyutping: 'm2' });
  assert.equal(response.statusCode, 502);
  assert.equal(saved.length, 0);
});

test('英语仍使用接口原分及其合格线', async () => {
  const { response, saved } = await request({ success: true, score: 83.2, expectedText: 'hello', transcribedText: 'hello' }, 'english');
  assert.equal(response.statusCode, 200);
  assert.equal(response.body.score, 83);
  assert.equal(response.body.threshold, 70);
  assert.equal(response.body.scoreMethod, undefined);
  assert.equal(saved[0].rec.score, 83);
});
