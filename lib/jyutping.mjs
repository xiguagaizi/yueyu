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
  ok: '正确',
  tone: '声调偏差',
  initial: '声母偏差',
  final: '韵母偏差',
  syllable: '整体读错',
  missing: '漏读 / 没听清',
  extra: '多读 / 杂音',
};

function hintFor(kind, e, a) {
  switch (kind) {
    case 'tone':
      return `声调：应读 ${TONE_NAMES[e.tone] || e.tone}，你读成 ${TONE_NAMES[a.tone] || a.tone || '不明'}`;
    case 'initial':
      return `声母：应读 “${e.initial || '零声母'}-”，你读成 “${a.initial || '零声母'}-”`;
    case 'final':
      return `韵母：应读 “-${e.final}”，你读成 “-${a.final}”`;
    case 'syllable':
      return `整个音节偏了：${e.raw} → ${a.raw}`;
    case 'missing':
      return '这个字没被识别到，可能读得太轻、太快或吞音';
    case 'extra':
      return '多出来的音，可能是拖音、口头语或环境噪音';
    default:
      return '';
  }
}

/** 取出汉字，用来给每个音节配上对应的字 */
function chineseChars(text) {
  return [...String(text || '')].filter((ch) => /[㐀-鿿豈-﫿]/.test(ch));
}

function summarize(items) {
  const counts = { ok: 0, tone: 0, initial: 0, final: 0, syllable: 0, missing: 0, extra: 0 };
  for (const it of items) counts[it.kind]++;
  const expectedCount = items.filter((it) => it.expected).length || 1;
  return { counts, accuracy: Math.round((counts.ok / expectedCount) * 100) };
}

/**
 * 整课连读时，把逐音节结果按句切回去。
 * 依据是「一个汉字 = 一个音节」，多读出来的音归到它前面那句。
 */
function groupBySentence(items, segments) {
  const groups = [];
  let idx = 0;
  for (const text of segments) {
    const need = chineseChars(text).length;
    const mine = [];
    let got = 0;
    while (idx < items.length) {
      const it = items[idx];
      if (it.expected && got >= need) break;
      if (it.expected) got++;
      mine.push(it);
      idx++;
    }
    groups.push({ text, items: mine, ...summarize(mine) });
  }
  // 剩下的尾巴（一般是多读的音）挂到最后一句
  if (idx < items.length && groups.length) {
    const last = groups[groups.length - 1];
    last.items.push(...items.slice(idx));
    Object.assign(last, summarize(last.items));
  }
  return groups;
}

/**
 * 生成逐音节的纠音报告
 * @param {string} expectedJyutping 接口返回的标准粤拼
 * @param {string} transcribedJyutping 接口从你音频识别出的粤拼
 * @param {string} text 目标句子（用于把音节和汉字对上）
 * @param {string[]} [segments] 整课连读时的分句原文，用来把结果按句切开
 */
export function analyze(expectedJyutping, transcribedJyutping, text, segments) {
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
      `有 ${counts.tone} 处声调偏差，最常见是把 ${TONE_NAMES[from] || from + '声'} 读成 ${TONE_NAMES[to] || to + '声'}。粤语六个声调是辨义的，调错了就是另一个字。`,
    );
  }
  if (counts.final) tips.push(`有 ${counts.final} 处韵母偏差，注意 -m/-n/-ng 鼻音收尾和 -p/-t/-k 入声的短促收音。`);
  if (counts.syllable)
    tips.push(`有 ${counts.syllable} 个字整体读偏了（声母韵母都不对），多半是这个字的粤语读音本身没记住 —— 先照示范逐字慢读，再连成句。`);
  if (counts.initial) tips.push(`有 ${counts.initial} 处声母偏差，常见是 n/l 不分、gw/g 丢介音、z/c/s 送气不到位。`);
  if (counts.missing) tips.push(`有 ${counts.missing} 个字没被识别到，多半读得太轻或被吞掉了，试试放慢一点、每个字都出声。`);
  if (counts.extra) tips.push(`识别到 ${counts.extra} 个多余的音，注意句尾别拖音，录音时保持环境安静。`);
  if (!wrong.length && !counts.extra) tips.push('逐音节比对完全一致，保持这个状态，可以挑更长的句子练。');
  if (!tips.length && wrong.length) tips.push(`有 ${wrong.length} 处和标准粤拼对不上，对照上面的逐字卡片再听一遍示范。`);

  // 整课连读：按句切开，好定位是哪几句拖后腿
  const groups = segments?.length && canMapChars ? groupBySentence(items, segments) : null;
  if (groups) {
    const weak = groups.filter((g) => g.accuracy < 100).sort((a, b) => a.accuracy - b.accuracy).slice(0, 3);
    if (weak.length) tips.unshift(`最需要回炉的是：${weak.map((g) => `「${g.text}」${g.accuracy}%`).join('、')}`);
    else tips.unshift(`${groups.length} 句逐音节全对，整课可以过了。`);
  }

  return {
    items,
    groups,
    counts,
    toneShifts,
    syllableAccuracy: Math.round((counts.ok / totalExpected) * 100),
    expectedCount: expected.length,
    actualCount: actual.length,
    charsAligned: canMapChars,
    tips,
  };
}
