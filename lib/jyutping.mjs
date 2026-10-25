// 粤拼解析 + 目标粤拼/识别粤拼对齐，用来定位到底错在声母、韵母还是声调。

// 声母表（长的排前面，保证 ng/gw/kw 先于 n/g/k 匹配）
const INITIALS = ['ng', 'gw', 'kw', 'b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'z', 'c', 's', 'j', 'w'];

// 声调调值描述，报告里给人看
export const TONE_NAMES = {
  1: '第1声 高平 ˥',
  2: '第2声 高升 ˧˥',
  3: '第3声 中平 ˧',
  4: '第4声 低降 ˨˩',
  5: '第5声 低升 ˩˧',
  6: '第6声 低平 ˨',
};

// 有些系统把入声单列成 7/8/9 调，折回粤拼的 1/3/6
const TONE_ALIAS = { 7: 1, 8: 3, 9: 6 };

/** 把一个音节拆成 声母 / 韵母 / 声调 */
export function parseSyllable(raw) {
  const s = String(raw).trim().toLowerCase();
  const m = s.match(/^([a-z]+)([1-9])?$/);
  if (!m) return { raw: s, initial: '', final: s, tone: null, valid: false };

  const body = m[1];
  const rawTone = m[2] ? Number(m[2]) : null;
  const tone = rawTone === null ? null : (TONE_ALIAS[rawTone] ?? rawTone);
  const normalized = `${body}${tone ?? ''}`;

  // m / ng 这类鼻音自成音节，没有声母
  if (body === 'm' || body === 'ng') return { raw: normalized, initial: '', final: body, tone, valid: true };

  let initial = '';
  for (const cand of INITIALS) {
    if (body.startsWith(cand) && body.length > cand.length) {
      initial = cand;
      break;
    }
  }
  return { raw: normalized, initial, final: body.slice(initial.length), tone, valid: true };
}

/** 从一串粤拼里取出所有音节，兼容空格分隔和连写两种返回格式 */
export function splitSyllables(jyutping) {
  if (!jyutping) return [];
  const text = String(jyutping).toLowerCase();
  const spaced = text.split(/[\s,，、.。!！?？;；:：]+/).filter(Boolean);
  const looksSpaced = spaced.length > 1 && spaced.every((t) => /^[a-z]+[1-9]?$/.test(t));
  const tokens = looksSpaced ? spaced : text.match(/[a-z]+[1-9]/g) || spaced;
  return tokens.filter((t) => /[a-z]/.test(t)).map(parseSyllable);
}

/** 两个音节的距离：0 表示完全一致，最大 3 */
function distance(a, b) {
  if (a.raw === b.raw) return 0;
  let d = 0;
  if (a.initial !== b.initial) d += 1;
  if (a.final !== b.final) d += 1.2;
  if (a.tone !== b.tone) d += 0.8;
  return d;
}

const GAP = 1.6; // 插入/删除代价：两个 GAP > 最大替换代价，所以“全错”仍按替换对齐

/** Needleman-Wunsch 对齐目标音节与识别音节 */
function align(expected, actual) {
  const n = expected.length;
  const m = actual.length;
  const cost = Array.from({ length: n + 1 }, () => new Float64Array(m + 1));
  const back = Array.from({ length: n + 1 }, () => new Uint8Array(m + 1)); // 1=对角 2=上(漏读) 3=左(多读)

  for (let i = 1; i <= n; i++) {
    cost[i][0] = i * GAP;
    back[i][0] = 2;
  }
  for (let j = 1; j <= m; j++) {
    cost[0][j] = j * GAP;
    back[0][j] = 3;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const diag = cost[i - 1][j - 1] + distance(expected[i - 1], actual[j - 1]);
      const up = cost[i - 1][j] + GAP;
      const left = cost[i][j - 1] + GAP;
      let best = diag;
      let dir = 1;
      if (up < best) {
        best = up;
        dir = 2;
      }
      if (left < best) {
        best = left;
        dir = 3;
      }
      cost[i][j] = best;
      back[i][j] = dir;
    }
  }

  const pairs = [];
  let i = n;
  let j = m;
  while (i > 0 || j > 0) {
    const dir = i === 0 ? 3 : j === 0 ? 2 : back[i][j];
    if (dir === 1) {
      pairs.push({ expected: expected[i - 1], actual: actual[j - 1] });
      i--;
      j--;
    } else if (dir === 2) {
      pairs.push({ expected: expected[i - 1], actual: null });
      i--;
    } else {
      pairs.push({ expected: null, actual: actual[j - 1] });
      j--;
    }
  }
  return pairs.reverse();
}

function classify(expected, actual) {
  if (!expected) return 'extra'; // 多读
  if (!actual) return 'missing'; // 漏读
  if (expected.raw === actual.raw) return 'ok';
  const sameInitial = expected.initial === actual.initial;
  const sameFinal = expected.final === actual.final;
  if (sameInitial && sameFinal) return expected.tone === actual.tone ? 'ok' : 'tone';
  if (sameFinal && !sameInitial) return 'initial';
  if (sameInitial && !sameFinal) return 'final';
  return 'syllable';
}

const LABELS = {
  ok: '匹配',
  tone: '声调差异',
  initial: '声母差异',
  final: '韵母差异',
  syllable: '音节差异',
  missing: '未识别',
  extra: '额外识别',
};

function hintFor(kind, e, a) {
  switch (kind) {
    case 'tone':
      return `声调：参考 ${TONE_NAMES[e.tone] || e.tone}，识别 ${TONE_NAMES[a.tone] || a.tone || '不明'}`;
    case 'initial':
      return `声母：参考 “${e.initial || '零声母'}-”，识别 “${a.initial || '零声母'}-”${e.tone !== a.tone ? `；声调：${e.tone ?? '不明'} → ${a.tone ?? '不明'}` : ''}`;
    case 'final':
      return `韵母：参考 “-${e.final}”，识别 “-${a.final}”${e.tone !== a.tone ? `；声调：${e.tone ?? '不明'} → ${a.tone ?? '不明'}` : ''}`;
    case 'syllable':
      return `参考音节 ${e.raw}，识别音节 ${a.raw}`;
    case 'missing':
      return '这个音节未被识别到，请复听录音确认；也可能是识别遗漏';
    case 'extra':
      return '识别结果有额外音节，请复听确认是否多读、口头语或误识别';
    default:
      return '';
  }
}

/** 汉字或英文片段，用来给每个音节配上对应的字 */
function chineseChars(text) {
  return String(text || '').match(/\p{Script=Han}|[A-Za-z0-9]+/gu) || [];
}

function summarize(items) {
  const counts = { ok: 0, tone: 0, initial: 0, final: 0, syllable: 0, missing: 0, extra: 0 };
  for (const it of items) counts[it.kind]++;
  const expectedCount = items.filter((it) => it.expected).length || 1;
  return { counts, accuracy: Math.round((counts.ok / expectedCount) * 100) };
}

/**
 * 生成逐音节的纠音报告
 * @param {string} expectedJyutping 评分目标粤拼（优先课文原注音）
 * @param {string} transcribedJyutping 接口从你音频识别出的粤拼
 * @param {string} text 目标句子（用于把音节和汉字对上）
 */
export function analyze(expectedJyutping, transcribedJyutping, text) {
  const expected = splitSyllables(expectedJyutping);
  const actual = splitSyllables(transcribedJyutping);
  const chars = chineseChars(text);
  const canMapChars = chars.length === expected.length;

  let expIdx = 0;
  const items = align(expected, actual).map((pair) => {
    const kind = classify(pair.expected, pair.actual);
    const char = pair.expected && canMapChars ? chars[expIdx] : null;
    if (pair.expected) expIdx++;
    return {
      char,
      expected: pair.expected ? pair.expected.raw : null,
      actual: pair.actual ? pair.actual.raw : null,
      kind,
      label: LABELS[kind],
      hint: kind === 'ok' ? '' : hintFor(kind, pair.expected, pair.actual),
      detail: {
        expected: pair.expected || null,
        actual: pair.actual || null,
      },
    };
  });

  const { counts } = summarize(items);

  const toneShifts = {};
  for (const it of items) {
    if (it.kind !== 'tone') continue;
    const key = `${it.detail.expected.tone}->${it.detail.actual.tone}`;
    toneShifts[key] = (toneShifts[key] || 0) + 1;
  }

  const totalExpected = expected.length || 1;
  const wrong = items.filter((it) => it.expected && it.kind !== 'ok');

  const tips = [];
  if (counts.tone) {
    const top = Object.entries(toneShifts).sort((a, b) => b[1] - a[1])[0];
    const [from, to] = top[0].split('->');
    tips.push(
      `有 ${counts.tone} 处识别声调与参考不同，最常见的差异是 ${TONE_NAMES[from] || from + '声'} → ${TONE_NAMES[to] || to + '声'}。建议对照示范复听确认。`,
    );
  }
  if (counts.final) tips.push(`有 ${counts.final} 处识别韵母与参考不同，可重点复听长短元音、-m/-n/-ng 鼻音收尾和 -p/-t/-k 入声。`);
  if (counts.syllable)
    tips.push(`有 ${counts.syllable} 个识别音节的声母和韵母均与参考不同，请对照示范和自己的录音确认。`);
  if (counts.initial) tips.push(`有 ${counts.initial} 处识别声母与参考不同，可重点复听 n/l、gw/g 和 z/c/s。`);
  if (counts.missing) tips.push(`有 ${counts.missing} 个参考音节未被识别到，请复听确认是否漏读或识别遗漏。`);
  if (counts.extra) tips.push(`识别结果有 ${counts.extra} 个额外音节，请复听确认；环境噪音也可能造成误识别。`);
  if (!wrong.length && !counts.extra) tips.push('逐音节比对完全一致，保持这个状态，可以挑更长的句子练。');
  if (!tips.length && wrong.length) tips.push(`有 ${wrong.length} 处识别粤拼与参考不同，对照上面的逐字卡片复听确认。`);

  return {
    items,
    counts,
    toneShifts,
    syllableAccuracy: Math.round((counts.ok / totalExpected) * 100),
    expectedCount: expected.length,
    actualCount: actual.length,
    charsAligned: canMapChars,
    tips,
  };
}
