// 没有 API Key 时的离线演示数据：MOCK_SCORE=1 npm start
// 只为把界面跑通，返回的粤拼是编的，结果里会带 mock 标记。

const KNOWN = {
  早晨: ['zou2 san4', 'zou2 sam4'],
  你好: ['nei5 hou2', 'lei5 hou2'],
  '近排点呀？': ['gan6 paai4 dim2 aa3', 'gan6 paai4 dim2 aa1'],
};

const POOL = ['nei5', 'hou2', 'aa3', 'dim2', 'gan6', 'paai4', 'sik6', 'faan6', 'mei6', 'jau5', 'mou5', 'gwai2'];
const SHIFT = { 1: 2, 2: 1, 3: 2, 4: 6, 5: 4, 6: 3 };

function chars(text) {
  return [...text].filter((c) => /[㐀-鿿]/.test(c));
}

export function mockScore(text) {
  let expected;
  let transcribed;

  if (KNOWN[text]) {
    [expected, transcribed] = KNOWN[text];
  } else {
    const n = Math.max(1, chars(text).length);
    const syls = Array.from({ length: n }, (_, i) => POOL[i % POOL.length]);
    expected = syls.join(' ');
    // 随手制造 1~2 个声调偏差，让报告有东西可看
    transcribed = syls
      .map((s, i) => (i === 1 || i === n - 2 ? s.replace(/[1-6]$/, (t) => SHIFT[t]) : s))
      .join(' ');
  }

  const wrong = expected.split(' ').filter((s, i) => s !== transcribed.split(' ')[i]).length;
  const total = expected.split(' ').length;
  return {
    success: true,
    mock: true,
    language: 'cantonese',
    score: Math.max(40, Math.round(100 - (wrong / total) * 100 * 0.8)),
    passed: wrong === 0,
    expectedJyutping: expected,
    transcribedJyutping: transcribed,
  };
}
