import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

test('历史重算后同一时间戳的本地旧缓存会更新，页面及历史保留接口原分', async () => {
  const app = fs.readFileSync(new URL('../public/app.js', import.meta.url), 'utf8').replace(/^import .*;$/gm, '');
  const saved = { ts: 123, sentenceId: '343-2', score: 100, expected: 'm6', transcribed: 'm6',
    threshold: 90, scoreMethod: 'jyutping-string-similarity-v1', targetSource: 'lesson', upstreamScore: 50,
    upstreamExpectedJyutping: 'm2', items: [{ char: '呣', expected: 'm6', actual: 'm6', kind: 'ok' }] };
  const lesson = { day: 343, sentences: [{ id: '343-2', text: '呣！' }] };
  const context = vm.createContext({ localStorage: { getItem: () => null },
    document: { getElementById: () => ({}) }, setTimeout, clearTimeout, console, lesson,
    fetch: async () => ({ ok: true, json: async () => ({ details: { '343-2': saved } }) }),
  });
  vm.runInContext(`${app.slice(0, app.indexOf('\nconst listening ='))}
    state.collection = 'original-slow'; state.day = 343; state.lessons = [lesson]; state.session = 1;
    syncAllCards = () => {}; renderLessonSummary = () => {};
    globalThis.api = { restoreEntry, applyServerCheckinDetails, currentRun, sentenceResultHtml, buildHistoryItems, gradingNoteHtml };
  `, context);
  const api = context.api;
  const previous = api.restoreEntry(lesson, { id: 'h123', sentences: [{ id: '343-2', score: 50, expected: 'm2' }] });
  await api.applyServerCheckinDetails(lesson, 1, previous);
  const result = api.currentRun('343-2').result;
  assert.equal(result.score, 100);
  assert.equal(result.expectedJyutping, 'm6');
  assert.equal(result.upstreamScore, 50);
  const html = api.sentenceResultHtml(result);
  assert.ok(html.includes('接口原分 50 分'));
  assert.ok(html.includes('相似度计分'));
  assert.ok(html.includes('参考粤拼'));
  assert.ok(html.includes('识别粤拼'));
  assert.ok(html.includes('音节匹配率'));
  assert.ok(html.includes('识别读音差异仅供复听参考'));
  assert.ok(!html.includes('听你读成'));
  assert.ok(html.includes('data-jp="m6"'));
  const history = api.buildHistoryItems([{ ...saved, day: 343, collection: 'original-slow', sentenceCount: 1, text: '呣！' }]);
  assert.equal(history[0].sentences[0].upstreamScore, 50);
  assert.ok(api.gradingNoteHtml(history[0].sentences[0]).includes('按课文粤拼评分'));
});

test('加权总分 90 即整课通过，低分句仍标记；89 分及未评分完不通过', () => {
  const app = fs.readFileSync(new URL('../public/app.js', import.meta.url), 'utf8').replace(/^import .*;$/gm, '');
  const server = fs.readFileSync(new URL('../server.mjs', import.meta.url), 'utf8');
  const elements = new Map();
  const lesson = { day: 1, sentences: [{ id: '1-1', text: '你好你好你好你好你' }, { id: '1-2', text: '呣' }] };
  const collection = { id: 'original', lessons: [lesson] };
  const context = vm.createContext({
    localStorage: { getItem: (key) => key === 'yueyu_history'
      ? JSON.stringify([{ score: 90, threshold: 90, passed: false, sentences: [{}] }]) : null },
    document: { getElementById: (id) => { if (!elements.has(id)) elements.set(id, {}); return elements.get(id); } },
    setTimeout, clearTimeout, console, lesson,
    DEFAULT_COLLECTION: collection, PASS_SCORE: { cantonese: 90 },
    RECENT_WINDOW_MS: 43200000, RECENT_LIMIT: 200, DAY_CUTOFF_MS: 14400000,
    recordingIndex: () => new Map(), syllableWeight: () => 1,
  });
  const summaryCode = server.slice(server.indexOf('function summarizeCheckins('), server.indexOf('\n// 与前端练习历史条目同构'));
  vm.runInContext(`${app.slice(0, app.indexOf('\nconst listening ='))}\n${summaryCode}
    state.lessons = [lesson]; state.day = 1; state.summarySaved = true;
    currentRun('1-1').result = { score: 100, threshold: 90, analysis: { expectedCount: 9 } };
    currentRun('1-2').result = { score: 0, threshold: 90, analysis: { expectedCount: 1 } };
    globalThis.api = { combinedResult, renderLessonSummary, currentRun, buildHistoryItems, loadHistory, summarizeCheckins };
  `, context);
  const api = context.api;
  assert.equal(api.combinedResult().score, 90);
  assert.equal(api.combinedResult().passed, true);
  api.renderLessonSummary();
  assert.ok(elements.get('lessonSummary').innerHTML.includes('本课完成，已通过'));
  assert.ok(elements.get('lessonSummary').innerHTML.includes('1 句未通过'));
  assert.ok(elements.get('lessonSummary').innerHTML.includes('<span class="badge bad">未通过</span>'));
  const rows = [{ ts: 124, day: 1, collection: 'original', sentenceId: '1-1', score: 100, weight: 9, sentenceCount: 2 },
    { ts: 123, day: 1, collection: 'original', sentenceId: '1-2', score: 0, weight: 1, sentenceCount: 2 }];
  assert.equal(api.buildHistoryItems(rows)[0].passed, true);
  assert.equal(api.buildHistoryItems(rows)[0].sentences.find((s) => s.id === '1-2').passed, false);
  assert.equal(api.loadHistory()[0].passed, true);
  const records = rows.map((row) => ({ ...row, language: 'cantonese' })).reverse();
  assert.equal(api.summarizeCheckins({ records }, collection).days['1'].passed, true);
  api.currentRun('1-1').result.score = 99;
  assert.equal(api.combinedResult().score, 89);
  assert.equal(api.combinedResult().passed, false);
  assert.equal(api.buildHistoryItems([{ ...rows[0], score: 99 }, rows[1]])[0].passed, false);
  delete api.currentRun('1-2').result;
  assert.equal(api.combinedResult().passed, false);
  assert.equal(api.buildHistoryItems([rows[0], { ...rows[0], ts: 125 }])[0].passed, false);
  assert.equal(api.summarizeCheckins({ records: records.slice(1) }, collection).days['1'].passed, false);
});
