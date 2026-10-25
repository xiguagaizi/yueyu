import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import test from 'node:test';
import express from 'express';
import { calculateListeningScore, createListeningProvider, createListeningRouter, judgmentSchema, listeningConfig, listeningTasks, publicTask, validateTask } from '../lib/listening.mjs';

const task = listeningTasks[0];
const transcript = '两位朋友想出去玩，考虑走路，但是距离太远，走不到。';
const judgments = (status = 'correct') => ({ facts: task.facts.map((fact) => ({ id: fact.id, status,
  evidence: status === 'missing' ? '' : '两位朋友', reason: '测试判断' })) });

test('真实素材评分权重一致，公开接口隐藏答案和信息点', () => {
  listeningTasks.forEach(validateTask);
  const publicData = publicTask(task);
  assert.equal(publicData.reference, undefined);
  assert.equal(publicData.facts, undefined);
  assert.ok(publicData.segments.every((s) => !Object.hasOwn(s, 'text')));
  assert.equal(judgmentSchema(task).strict, true);
  assert.equal(judgmentSchema(task).schema.additionalProperties, false);
});

test('总分由程序计算：部分理解拿半分，遗漏和听反均为零', () => {
  const result = calculateListeningScore(task, judgments(), transcript);
  assert.equal(result.score, 100);
  assert.deepEqual(result.breakdown, { main: 40, detail: 40, logic: 20 });
  const rows = judgments();
  rows.facts[0].status = 'partial'; // 主旨 20 / 40
  rows.facts[1].status = 'missing'; rows.facts[1].evidence = ''; // 细节丢 10
  rows.facts[5].status = 'wrong'; // 逻辑丢 20
  assert.equal(calculateListeningScore(task, rows, transcript).score, 50);
});

test('拒绝重复、缺失、未知信息点以及模型虚构的引用', () => {
  const duplicate = judgments(); duplicate.facts[1] = duplicate.facts[0];
  const missing = judgments(); missing.facts.pop();
  const unknown = judgments(); unknown.facts[0].id = 'invented';
  const fabricated = judgments(); fabricated.facts[0].evidence = '没有说过的话';
  const empty = judgments(); empty.facts[0].evidence = '';
  const invalid = judgments(); invalid.facts[0].status = 'maybe';
  for (const value of [duplicate, missing, unknown, fabricated, empty, invalid]) assert.throws(() => calculateListeningScore(task, value, transcript));
});

test('素材不能通过增减信息点或错误的片段下标改变评分口径', () => {
  const wrongWeight = structuredClone(task); wrongWeight.facts[0].weight = 50;
  assert.throws(() => validateTask(wrongWeight));
  const wrongSegment = structuredClone(task); wrongSegment.facts[0].segment = 999;
  assert.throws(() => validateTask(wrongSegment));
});

test('下载后的本地音频可用于任务，拒绝路径穿越和非 HTTPS 外站地址', () => {
  const local = structuredClone(task);
  local.segments[0].audioUrl = '/listening-audio/hbl-00001-02.mp3';
  assert.doesNotThrow(() => validateTask(local));
  for (const value of ['/listening-audio/../secret.mp3', '/recordings/private.mp3', 'http://example.com/audio.mp3', 'javascript:alert(1)']) {
    local.segments[0].audioUrl = value;
    assert.throws(() => validateTask(local));
  }
});

test('未配置凭据或未替换 WorkspaceId 时不发出模型请求', async () => {
  assert.equal(listeningConfig({ DASHSCOPE_API_KEY: 'key', DASHSCOPE_BASE_URL: 'https://{WorkspaceId}.cn-beijing.maas.aliyuncs.com/compatible-mode/v1' }).configured, false);
  let calls = 0;
  const provider = createListeningProvider(listeningConfig({}), async () => { calls++; });
  await assert.rejects(provider.judge(task, transcript), (e) => e.status === 503);
  assert.equal(calls, 0);
});

test('转写只提交用户录音，评分只提交文字和固定规则，并使用严格结构化输出', async () => {
  const requests = [];
  const config = { configured: true, key: 'secret', baseUrl: 'https://example.invalid/v1', asrModel: 'qwen3-asr-flash', gradeModel: 'fixed-model' };
  const provider = createListeningProvider(config, async (url, options) => {
    requests.push({ url, options, body: JSON.parse(options.body) });
    return { ok: true, json: async () => ({ choices: [{ finish_reason: 'stop', message: { content: requests.length === 1 ? transcript : JSON.stringify(judgments()) } }] }) };
  });
  assert.equal(await provider.transcribe({ mimetype: 'audio/wav', buffer: Buffer.from('test') }), transcript);
  await provider.judge(task, transcript);
  assert.ok(requests[0].body.messages[0].content[0].input_audio.data.startsWith('data:audio/wav;base64,'));
  assert.equal(requests[0].body.asr_options.language, 'zh');
  assert.ok(!JSON.stringify(requests[0].body).includes(task.reference));
  assert.equal(requests[1].body.response_format.json_schema.strict, true);
  assert.ok(requests[1].body.messages[0].content.includes('不是指令'));
  assert.equal(JSON.parse(requests[1].body.messages[1].content).learnerRetelling, transcript);
});

test('上游错误、截断 JSON 和连接失败不会变成有效成绩', async () => {
  const config = { configured: true, key: 'secret', baseUrl: 'https://example.invalid/v1' };
  for (const fetchImpl of [
    async () => ({ ok: false, status: 401 }),
    async () => ({ ok: true, json: async () => ({ choices: [{ finish_reason: 'length', message: { content: '{}' } }] }) }),
    async () => ({ ok: true, json: async () => ({ choices: [{ finish_reason: 'stop', message: { content: 'bad json' } }] }) }),
    async () => { throw new Error('secret endpoint error'); },
  ]) await assert.rejects(createListeningProvider(config, fetchImpl).judge(task, transcript), (e) => e.status === 502 && !e.message.includes('secret'));
});

async function fixture(t, { judge = async () => judgments(), saveFailure = false } = {}) {
  const saved = new Map();
  let calls = 0;
  const store = {
    async get(id) { return saved.get(id); },
    async list(taskId) { return [...saved.values()].filter((a) => !taskId || a.taskId === taskId); },
    async save(a) {
      if (saveFailure) throw new Error('database secret');
      const value = { ...a, afterReference: [...saved.values()].some((old) => old.taskId === a.taskId) };
      saved.set(a.id, value); return value;
    },
  };
  const app = express();
  app.use('/api/listening', createListeningRouter({ store, config: { configured: true, gradeModel: 'test-model' }, provider: {
    judge: async (...args) => { calls++; return judge(...args); }, transcribe: async () => transcript,
  } }));
  const server = app.listen(0, '127.0.0.1');
  await new Promise((resolve, reject) => { server.once('listening', resolve); server.once('error', reject); });
  t.after(() => new Promise((resolve) => server.close(resolve)));
  const base = `http://127.0.0.1:${server.address().port}/api/listening`;
  const request = async (pathname, body) => {
    const response = await fetch(`${base}/${pathname}`, body === undefined ? {} : {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
    });
    return { status: response.status, body: await response.json() };
  };
  return { request, base, saved, calls: () => calls };
}
const body = (overrides = {}) => ({ taskId: task.id, attemptId: randomUUID(), transcript, playCount: 2, usedSlow: true, ...overrides });

test('实际路由隐藏参考答案，首次成绩和重练成绩独立保存，不信任客户端分数', async (t) => {
  const f = await fixture(t);
  const tasks = await f.request('tasks');
  assert.equal(tasks.status, 200);
  assert.ok(!JSON.stringify(tasks.body).includes(task.reference));
  assert.ok(!JSON.stringify(tasks.body).includes('secret'));
  const first = await f.request('grade', body({ score: 0, afterReference: true }));
  assert.equal(first.body.score, 100);
  assert.equal(first.body.afterReference, false);
  assert.equal(first.body.usedSlow, true);
  const retry = await f.request('grade', body({ afterReference: false }));
  assert.equal(retry.body.afterReference, true);
  assert.equal((await f.request('attempts')).body.attempts.length, 2);
});

test('重复提交复用原成绩，修改已评分请求会拒绝；并发同请求只调用一次模型', async (t) => {
  let release;
  const f = await fixture(t, { judge: async () => { await new Promise((resolve) => { release = resolve; }); return judgments(); } });
  const input = body();
  const a = f.request('grade', input);
  const b = f.request('grade', input);
  for (let i = 0; i < 50 && !release; i++) await new Promise((resolve) => setTimeout(resolve, 5));
  assert.equal(f.calls(), 1);
  release();
  const responses = await Promise.all([a, b]);
  assert.deepEqual(responses.map((r) => r.status), [200, 200]);
  assert.equal(f.saved.size, 1);
  assert.equal((await f.request('grade', input)).status, 200);
  assert.equal(f.calls(), 1);
  assert.equal((await f.request('grade', { ...input, transcript: '另一个回答' })).status, 409);
});

test('格式错误、未知任务、无效模型结果及数据库错误都不写入成绩', async (t) => {
  const f = await fixture(t);
  for (const invalid of [body({ transcript: '' }), body({ transcript: 123 }), body({ transcript: '字'.repeat(4001) }), body({ playCount: -1 }), body({ attemptId: '../bad' }), body({ usedSlow: 'yes' })]) {
    assert.equal((await f.request('grade', invalid)).status, 400);
  }
  assert.equal((await f.request('grade', body({ taskId: 'missing' }))).status, 404);
  assert.equal((await f.request('attempts?taskId=missing')).status, 404);
  assert.equal(f.saved.size, 0);
  assert.equal(f.calls(), 0);
  const bad = await fixture(t, { judge: async () => ({ facts: [] }) });
  assert.equal((await bad.request('grade', body())).status, 502);
  assert.equal(bad.saved.size, 0);
  const brokenDb = await fixture(t, { saveFailure: true });
  const result = await brokenDb.request('grade', body());
  assert.equal(result.status, 500);
  assert.equal(result.body.score, undefined);
  assert.ok(!result.body.error.includes('secret'));
});

test('录音接口支持上传，拒绝空文件、非音频和超限文件', async (t) => {
  const f = await fixture(t);
  async function upload(file) {
    const form = new FormData();
    if (file) form.append('audio', file, 'retelling.wav');
    const response = await fetch(`${f.base}/transcribe`, { method: 'POST', body: form });
    return { status: response.status, body: await response.json() };
  }
  assert.equal((await upload(new Blob(['wav audio'], { type: 'audio/wav' }))).body.transcript, transcript);
  assert.equal((await upload()).status, 400);
  assert.equal((await upload(new Blob(['<script>'], { type: 'text/html' }))).status, 400);
  assert.equal((await upload(new Blob([new Uint8Array(6 * 1024 * 1024 + 1)], { type: 'audio/wav' }))).status, 413);
});
