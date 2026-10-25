import assert from 'node:assert/strict';
import test from 'node:test';
import { analyze } from '../lib/jyutping.mjs';
import { normalizeJyutping, similarityScore, expectedPronunciation, gradeCantonese, regradeSavedDetail, SCORE_METHOD } from '../lib/pronunciation-score.mjs';

const score = similarityScore;

test('按规范化字符串的字符编辑距离评分，替换、插入和删除使用相同成本', () => {
  assert.equal(score('fan1', 'fan1'), 100);
  assert.equal(score('fan1', 'fan2'), 75);
  assert.equal(score('fan1', 'pan1'), 75);
  assert.equal(score('fan1', 'faan1'), 80);
  assert.equal(score('faan1', 'fan1'), 80);
  assert.equal(score('fan1', 'faan2'), 60);
  assert.equal(score('fan1', 'pan2'), 50);
  assert.equal(score('fan1', 'hok6'), 0);
});

test('短音节也按字符长度计分，空目标或空识别不会产生满分', () => {
  assert.equal(score('m6', 'm6'), 100);
  assert.equal(score('m6', 'm2'), 50);
  assert.equal(score('m6', 'g2'), 0);
  assert.equal(score('m6', 'g6'), 50);
  assert.equal(score('ng5', 'ng6'), 67);
  assert.equal(score('aa3', 'baa3'), 75);
  assert.equal(score('', 'nei5'), 0);
  assert.equal(score('', ''), 0);
});

test('统一大小写、空格、换行、标点及连写，保留混合句的英文片段', () => {
  assert.equal(normalizeJyutping('  NEI5\t\tHOU2\n\nMAA3  '), 'nei5 hou2 maa3');
  assert.equal(score('nei5 hou2 maa3', ' NEI5\tHOU2\nMAA3 '), 100);
  assert.equal(score('nei5 hou2 maa3', 'nei5hou2maa3'), 100);
  assert.equal(score('nei5 hou2', 'nei5，hou2！'), 100);
  assert.equal(score('ok ok  hou2', 'OK\nok hou2'), 100);
});

test('漏识别、额外识别及空识别仍扣分，逐音节明细保持独立对齐', () => {
  assert.equal(score('nei5 hou2 maa3', 'nei5 maa3'), 64);
  assert.equal(score('nei5 hou2', 'nei5 hou2 aa3'), 69);
  assert.equal(score('nei5 hou2', 'nei5 hou2 nei5 hou2'), 47);
  assert.equal(score('nei5 hou2', ''), 0);
  const aligned = analyze('nei5 hou2 maa3', 'nei5 maa3', '你好吗');
  assert.deepEqual(aligned.items.map((item) => [item.char, item.kind]), [['你', 'ok'], ['好', 'missing'], ['吗', 'ok']]);
});

test('课文源音优先于上游标准，识别值及上游原分原样保留', () => {
  const result = gradeCantonese({ text: '呣！', sourceJyutping: [{ char: '呣', jp: 'm6' }, { char: '！', jp: null }],
    upstreamExpectedJyutping: 'm2', transcribedJyutping: 'm6', upstreamScore: 50 });
  assert.equal(result.score, 100);
  assert.equal(result.passed, true);
  assert.equal(result.expectedJyutping, 'm6');
  assert.equal(result.transcribedJyutping, 'm6');
  assert.equal(result.upstreamScore, 50);
  assert.equal(result.upstreamExpectedJyutping, 'm2');
  assert.equal(result.analysis.items[0].expected, 'm6');
  assert.equal(result.scoreMethod, SCORE_METHOD);
});

test('缺音按整句词典补齐，完全无注音时仍可评分，非匹配源音不误用', () => {
  assert.equal(expectedPronunciation('氹返', [{ char: '氹', jp: 'tam3' }, { char: '返', jp: null }]).expectedJyutping, 'tam3 faan2');
  assert.equal(expectedPronunciation('你', [{ char: '我', jp: 'ngo5' }]).expectedJyutping, 'nei5');
  assert.equal(gradeCantonese({ text: '你好', transcribedJyutping: 'nei5 hou2' }).score, 100);
  assert.equal(expectedPronunciation('OK', [], 'ou1 kei1').expectedJyutping, 'ou1 kei1');
});

test('90 分整通过，89 分未通过，保持入声别名兼容及长句取整', () => {
  const result = gradeCantonese({ text: '啊啊唔', sourceJyutping: [
    { char: '啊', jp: 'aa1' }, { char: '啊', jp: 'aa1' }, { char: '唔', jp: 'm4' },
  ], transcribedJyutping: 'aa1 aa2 m4' });
  assert.equal(result.score, 90);
  assert.equal(result.passed, true);
  const below = gradeCantonese({ text: '你好', transcribedJyutping: 'nei5 hou3', threshold: 90 });
  assert.equal(below.score, 89);
  assert.equal(below.passed, false);
  assert.equal(score('sik6', 'sik9'), 100);
  assert.equal(score('sik1', 'sik7'), 100);
  assert.equal(score('sik3', 'sik8'), 100);
  assert.equal(score(Array(100).fill('nei5').join(' '), [...Array(99).fill('nei5'), 'nei6'].join(' ')), 100);
});

test('截图记录按课文参考使用相似度得到 92 分，明细继续显示三个差异', () => {
  const text = '蔡芯佢喺唔喺度啊？';
  const syllables = 'coi3 sam1 keoi5 hai2 m4 hai2 dou6 aa3'.split(' ');
  const result = gradeCantonese({ text, sourceJyutping: [...text].map((char, i) => ({ char, jp: syllables[i] || null })),
    upstreamExpectedJyutping: 'coi3 sam1 keoi5 hai2 m4 hai2 dou6 aa2',
    transcribedJyutping: 'coi3 sam1 keoi5 hai6 m4 hai2 dok6 aa2', upstreamScore: 95 });
  assert.equal(result.score, 92);
  assert.equal(result.passed, true);
  assert.equal(result.upstreamScore, 95);
  assert.equal(result.analysis.counts.tone, 2);
  assert.equal(result.analysis.counts.final, 1);
  assert.ok(result.analysis.tips.every((tip) => !tip.includes('你读成') && !tip.includes('调错了')));
});

test('中英混合句保留英文目标音，并替换汉字源音，无法对应时不误配', () => {
  const result = gradeCantonese({ text: 'A货', sourceJyutping: [{ char: 'A', jp: null }, { char: '货', jp: 'fo3' }],
    upstreamExpectedJyutping: 'a fo2', transcribedJyutping: 'a fo3' });
  assert.equal(result.score, 100);
  assert.equal(result.expectedJyutping, 'a fo3');
  assert.deepEqual(result.analysis.items.map((item) => item.char), ['A', '货']);
  assert.equal(expectedPronunciation('OK呀', [], 'ou1 kei1 aa3').expectedJyutping, 'ou1 kei1 aa3');
});

test('历史重算保留旧纠音详情，幂等，英语及缺失识别记录不改', () => {
  const old = { ts: 123, collection: 'original-slow', day: 343, sentenceId: '343-2', language: 'cantonese',
    score: 50, passed: false, expected: 'm2', transcribed: 'm6', items: [{ expected: 'm2', actual: 'm6' }] };
  const sentence = { text: '呣！', jyutping: [{ char: '呣', jp: 'm6' }, { char: '！', jp: null }] };
  const recalculated = regradeSavedDetail(old, sentence);
  assert.equal(recalculated.score, 100);
  assert.equal(recalculated.upstreamScore, 50);
  assert.equal(recalculated.originalGrading.expected, 'm2');
  assert.equal(recalculated.transcribed, old.transcribed);
  assert.equal(recalculated.ts, old.ts);
  assert.equal(regradeSavedDetail(recalculated, sentence), null);
  assert.equal(regradeSavedDetail({ ...old, language: 'english' }, sentence), null);
  assert.equal(regradeSavedDetail({ ...old, transcribed: undefined }, sentence), null);
  assert.equal(regradeSavedDetail({ ...old, expected: '' }, { text: 'OK' }), null);
});

test('上一版本地评分会迁移，保留最早详情及原接口信息，重算后幂等', () => {
  const originalGrading = { score: 95, expected: 'aa2' };
  const old = { scoreMethod: 'jyutping-components-v1', targetSource: 'lesson',
    score: 70, passed: false, expected: 'aa3', transcribed: 'aa2',
    upstreamScore: 100, upstreamExpectedJyutping: 'aa2', originalGrading,
    items: [{ char: '啊', expected: 'aa3', actual: 'aa2', kind: 'tone' }] };
  const sentence = { text: '啊', jyutping: [{ char: '啊', jp: 'aa3' }] };
  const result = regradeSavedDetail(old, sentence);
  assert.equal(result.score, 67);
  assert.equal(result.scoreMethod, SCORE_METHOD);
  assert.equal(result.previousGrading.score, 70);
  assert.equal(result.previousGrading.scoreMethod, old.scoreMethod);
  assert.deepEqual(result.originalGrading, originalGrading);
  assert.equal(result.upstreamScore, 100);
  assert.equal(result.upstreamExpectedJyutping, 'aa2');
  assert.equal(result.items[0].label, '声调差异');
  assert.equal(regradeSavedDetail(result, sentence), null);
});

test('历史切换算法保留当时课文目标，不因课文后续修改而同时改分', () => {
  const old = { scoreMethod: 'jyutping-components-v1', targetSource: 'lesson',
    score: 70, expected: 'wai1', transcribed: 'wai3', upstreamScore: 100, upstreamExpectedJyutping: 'wai3' };
  const result = regradeSavedDetail(old, { text: '喂', jyutping: [{ char: '喂', jp: 'wai3' }] });
  assert.equal(result.expected, 'wai1');
  assert.equal(result.score, 75);
  assert.equal(result.items[0].expected, 'wai1');
  assert.equal(result.previousGrading.expected, 'wai1');
});
