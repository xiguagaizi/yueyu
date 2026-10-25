import { lookupJyutping } from './dictionary.mjs';
import { analyze, splitSyllables } from './jyutping.mjs';

export const SCORE_METHOD = 'jyutping-string-similarity-v1';
const HAN = /\p{Script=Han}/u;

// 按页面相同的规则取音：课文原注音优先，只对缺音查整句词典。
export function expectedPronunciation(text, sourceItems = [], upstreamExpected = '') {
  const sourceMatches = sourceItems.map((item) => item.char).join('') === text;
  const chars = [...text];
  const needsDictionary = chars.some((char, index) => HAN.test(char) && !(sourceMatches && sourceItems[index]?.jp));
  const dictionary = needsDictionary ? lookupJyutping(text) : [];
  const items = chars.map((char, index) => ({
    char,
    jp: HAN.test(char)
      ? (sourceMatches && sourceItems[index]?.jp) || (dictionary[index]?.char === char ? dictionary[index].jp : null)
      : null,
  }));
  // 没有可用汉字读音时（如纯英文 OK），沿用接口给出的目标音节。
  let expectedJyutping = items.filter((item) => item.jp).map((item) => item.jp).join(' ') || upstreamExpected;
  const hasSource = sourceMatches && sourceItems.some((item) => HAN.test(item.char) && item.jp);
  let targetSource = hasSource ? 'lesson' : items.some((item) => item.jp) ? 'dictionary' : 'upstream';
  // 混合句中的 May、A 等英文也会被接口识别，不能当作多读惩罚。
  // 汉字与英文片段能按音节一一对应时，只替换汉字目标音，保留接口的英文目标。
  if (/[A-Za-z0-9]/.test(text) && upstreamExpected) {
    const segments = [...text.matchAll(/\p{Script=Han}|[A-Za-z0-9]+/gu)];
    const upstream = splitSyllables(upstreamExpected);
    if (segments.length === upstream.length) {
      expectedJyutping = segments.map((match, index) =>
        items[[...text.slice(0, match.index)].length]?.jp || upstream[index].raw).join(' ');
    } else {
      // 英文或数字展开成多个音节时没有可靠的逐字对应，保留接口目标避免错配。
      expectedJyutping = upstreamExpected;
      targetSource = 'upstream';
    }
  }
  return { expectedJyutping, targetSource };
}

// 复用逐音节明细的解析规则，统一大小写、空格、连写和入声调号 7/8/9。
export function normalizeJyutping(jyutping) {
  return splitSyllables(jyutping).map((syllable) => syllable.raw).join(' ');
}

// 与历史接口原分吻合的字符编辑距离算法；先规范格式，排除排版差异。
// 两行动态规划，内存只随较短字符串长度增长。
export function similarityScore(expectedJyutping, transcribedJyutping) {
  const expected = normalizeJyutping(expectedJyutping);
  const actual = normalizeJyutping(transcribedJyutping);
  if (!expected || !actual) return 0;
  if (expected === actual) return 100;
  const [longer, shorter] = expected.length >= actual.length ? [expected, actual] : [actual, expected];
  let previous = Uint32Array.from({ length: shorter.length + 1 }, (_, index) => index);
  let current = new Uint32Array(shorter.length + 1);
  for (let i = 1; i <= longer.length; i++) {
    current[0] = i;
    for (let j = 1; j <= shorter.length; j++) {
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + (longer[i - 1] === shorter[j - 1] ? 0 : 1),
      );
    }
    [previous, current] = [current, previous];
  }
  return Math.max(0, Math.min(100, Math.round(100 * (1 - previous[shorter.length] / longer.length))));
}

function gradeTarget(target, { text, upstreamExpectedJyutping = '', transcribedJyutping = '', upstreamScore = 0, threshold = 90 }) {
  const analysis = analyze(target.expectedJyutping, transcribedJyutping, text);
  if (!analysis.expectedCount) {
    const error = new Error('没有可用于评分的目标粤拼');
    error.code = 'NO_TARGET_JYUTPING';
    throw error;
  }
  const score = similarityScore(target.expectedJyutping, transcribedJyutping);
  return {
    ...target,
    score,
    passed: score >= threshold,
    threshold,
    transcribedJyutping,
    analysis,
    scoreMethod: SCORE_METHOD,
    upstreamScore,
    upstreamExpectedJyutping,
  };
}

export function gradeCantonese(input) {
  const target = expectedPronunciation(input.text, input.sourceJyutping, input.upstreamExpectedJyutping);
  return gradeTarget(target, input);
}

// 旧明细保存了识别粤拼，可直接重算，保留原分及原纠音结果供追溯。
export function regradeSavedDetail(entry, sentence) {
  if (!entry || entry.scoreMethod === SCORE_METHOD || entry.mock || !sentence
    || (entry.language && entry.language !== 'cantonese') || typeof entry.transcribed !== 'string') return null;
  let result;
  try {
    const input = {
      text: sentence.text,
      sourceJyutping: sentence.jyutping,
      upstreamExpectedJyutping: entry.upstreamExpectedJyutping ?? entry.expected ?? '',
      transcribedJyutping: entry.transcribed,
      upstreamScore: entry.upstreamScore ?? entry.score,
      threshold: entry.threshold ?? 90,
    };
    // 已经按课文评分的历史保留当时目标音；本次迁移只调整算法。
    // 更早的接口评分记录仍由课文原注音恢复目标。
    result = entry.scoreMethod && splitSyllables(entry.expected).length
      ? gradeTarget({ expectedJyutping: entry.expected, targetSource: entry.targetSource || 'lesson' }, input)
      : gradeCantonese(input);
  } catch (error) {
    if (error.code === 'NO_TARGET_JYUTPING') return null;
    throw error;
  }
  return {
    ...entry,
    score: result.score,
    passed: result.passed,
    threshold: result.threshold,
    weight: result.analysis.expectedCount,
    expected: result.expectedJyutping,
    accuracy: result.analysis.syllableAccuracy,
    counts: result.analysis.counts,
    tips: result.analysis.tips,
    items: result.analysis.items.map(({ char, expected, actual, kind, label, hint }) => ({ char, expected, actual, kind, label, hint })),
    scoreMethod: result.scoreMethod,
    targetSource: result.targetSource,
    upstreamScore: result.upstreamScore,
    upstreamExpectedJyutping: result.upstreamExpectedJyutping,
    // 保留上一版本地评分，原接口详情仍由 originalGrading 保留。
    previousGrading: entry.scoreMethod ? {
      scoreMethod: entry.scoreMethod, targetSource: entry.targetSource,
      score: entry.score, passed: entry.passed, expected: entry.expected, weight: entry.weight,
      accuracy: entry.accuracy, counts: entry.counts, tips: entry.tips, items: entry.items,
    } : entry.previousGrading,
    originalGrading: entry.originalGrading || {
      score: entry.score, passed: entry.passed, expected: entry.expected, weight: entry.weight,
      accuracy: entry.accuracy, counts: entry.counts, tips: entry.tips, items: entry.items,
    },
  };
}
