import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { attachSourceJyutping, parseAnnotatedText, splitAnnotatedSentences } from '../lib/lesson-source.mjs';

test('标点后的注音归属前一个汉字，分句仍保留句末读音', () => {
  const raw = '氹(tam3)返(faan1)佢(keoi5)㖞。(wo3)\n佢（keoi5）都(dou1)傻(so4)嘅，(ge3)我(ngo5)都(dou1)冇(mou5)唔(m4)开(hoi1)心。(sam1)';
  const sentences = splitAnnotatedSentences(raw);
  assert.deepEqual(sentences.map((s) => s.text), ['氹返佢㖞。', '佢都傻嘅，我都冇唔开心。']);
  assert.ok(sentences[0].raw.endsWith('㖞。(wo3)'));
  assert.deepEqual(parseAnnotatedText(sentences[0].raw).items, [
    { char: '氹', jp: 'tam3' }, { char: '返', jp: 'faan1' },
    { char: '佢', jp: 'keoi5' }, { char: '㖞', jp: 'wo3' }, { char: '。', jp: null },
  ]);
  assert.equal(parseAnnotatedText(sentences[1].raw).items.find((item) => item.char === '心').jp, 'sam1');
});

test('无声调括号内容不冒充粤拼，TXT 行内粤拼可解析', () => {
  assert.deepEqual(parseAnnotatedText('一切（cei）好(hou2)').items.map((i) => i.jp), [null, null, 'hou2']);
  assert.equal(parseAnnotatedText('好荣幸wing6认识你', { inline: true }).items[2].jp, 'wing6');
  assert.equal(parseAnnotatedText('𠮷，(gat1)').items[0].jp, 'gat1');
});

test('已入库课文从原资源恢复注音，重复句子按位置取音且文本不匹配时不误配', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'lesson-source-'));
  try {
    fs.mkdirSync(path.join(directory, '2024-11-22'));
    fs.writeFileSync(path.join(directory, '2024-11-22', 'response.json'), JSON.stringify({
      data: { cantonese: '氹(tam3)返(faan1)佢(keoi5)㖞。(wo3)氹(tam5)返(faan2)佢(keoi5)㖞。(waa1)' },
    }));
    const sentences = [
      { text: '氹返佢㖞。', raw: '氹返佢㖞。' },
      { text: '氹返佢㖞。', raw: '氹返佢㖞。' },
      { text: '完全不同。', raw: '完全不同。' },
    ];
    attachSourceJyutping({ generatedFrom: path.join(directory, 'missing'), audioDir: directory,
      lessons: [{ source: '2024-11-22', sentences }] });
    assert.equal(sentences[0].jyutping[0].jp, 'tam3');
    assert.equal(sentences[1].jyutping[0].jp, 'tam5');
    assert.equal(sentences[2].jyutping, undefined);
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

test('离线导入原文足以还原注音，尾逗号清理不会丢失最后一个字的读音', () => {
  const sentences = [
    { text: '开心', raw: '开(hoi1)心，(sam1)' },
    { text: 'A4纸', raw: 'A4(A4)纸(zi2)' },
    { text: '荣幸', raw: '荣幸wing6' },
  ];
  attachSourceJyutping({ lessons: [{ sentences }] });
  assert.deepEqual(sentences[0].jyutping, [{ char: '开', jp: 'hoi1' }, { char: '心', jp: 'sam1' }]);
  assert.equal(sentences[1].jyutping.map((i) => i.char).join(''), 'A4纸');
  assert.equal(sentences[1].jyutping.at(-1).jp, 'zi2');
  assert.equal(sentences[2].jyutping.at(-1).jp, 'wing6');
});
