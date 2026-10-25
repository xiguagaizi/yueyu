import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { lookupJyutping } from '../lib/dictionary.mjs';
import { dictionaryIndexStats } from '../lib/dictionary-notes.mjs';

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const curated = JSON.parse(fs.readFileSync(path.join(projectDir, 'data', 'dictionary-curated.json'), 'utf8'));

test('单字和词句使用各自读音，详细资料按需返回', () => {
  const single = lookupJyutping('期', { details: true })[0];
  assert.equal(single.jp, 'kei4');
  assert.ok(single.readingDetails.some((reading) => reading.jp === 'gei1' && reading.examples.some(({ word }) => word === '期月')));
  assert.equal(lookupJyutping('日期')[1].jp, 'kei4');
  assert.equal(lookupJyutping('期月')[0].jp, 'gei1');
  assert.equal(lookupJyutping('期年')[0].jp, 'gei1');
  assert.equal(lookupJyutping('期').at(0).readingDetails, undefined);
});

test('公开词表为未手工整理的多音字提供可追溯词例', () => {
  const item = lookupJyutping('得', { details: true })[0];
  const reading = item.readingDetails.find(({ jp }) => jp === 'dat1');
  assert.ok(reading.examples.length > 0);
  assert.ok(reading.examples.every(({ url }) => !url || url.startsWith('https://words.hk/zidin/')));
  assert.ok(dictionaryIndexStats().readingGroups > 6000);
  const simplified = lookupJyutping('会', { details: true })[0];
  assert.ok(simplified.readingDetails.some(({ jp, examples }) => jp === 'wui2' && examples.length));
});

test('本地词典补充按读音区分的释义和组词用法', { skip: !fs.existsSync(path.join(projectDir, 'data', 'private', 'dictionary-study-index.json')) }, () => {
  const item = lookupJyutping('得', { details: true })[0];
  const dak1 = item.readingDetails.find(({ jp }) => jp === 'dak1');
  assert.ok(dak1.senses.some(({ gloss }) => gloss));
  assert.ok(dak1.examples.some(({ gloss }) => gloss));
  const zung6 = lookupJyutping('重', { details: true })[0].readingDetails.find(({ jp }) => jp === 'zung6');
  assert.ok(zung6.senses.length);
  assert.ok(!zung6.senses.some(({ gloss }) => gloss.includes('仍然')));
  assert.equal(lookupJyutping('得')[0].readingDetails, undefined);
});

test('人工核对的词例与实际整词注音一致', () => {
  for (const [char, readings] of Object.entries(curated)) {
    for (const [jp, note] of Object.entries(readings)) {
      for (const word of note.words) {
        const index = [...word].indexOf(char);
        assert.equal(lookupJyutping(word)[index].jp, jp, `${char} ${word}`);
      }
    }
  }
});
