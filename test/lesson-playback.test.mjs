import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import test from 'node:test';

const app = fs.readFileSync(new URL('../public/app.js', import.meta.url), 'utf8');
// 去掉模块导入和页面初始化，仅执行待测的朗读逻辑。
const appWithoutBoot = app.slice(0, app.indexOf('\nconst listening =')).replace(/^import .*;$/gm, '');

function harness(sentences, fallback = []) {
  const requests = [];
  const played = [];
  const warmed = [];
  const context = vm.createContext({
    localStorage: { getItem: () => null },
    document: { getElementById: () => ({}) },
    setTimeout, clearTimeout, console,
    fetch: async (url) => {
      requests.push(url);
      return { ok: true, json: async () => ({ items: fallback }) };
    },
    sentences,
    capture: (items) => played.push(items.map((item) => item.jp)),
    warm: (jp) => warmed.push(jp),
  });
  vm.runInContext(`${appWithoutBoot}
    state.lessons = [{ day: 340, sentences }];
    state.day = 340;
    state.session = 1;
    unlockAudio = () => {};
    stopPlayback = () => { sayToken += 1; };
    speakItems = async (items) => { capture(items); return 0; };
    fetchSyllableBuffer = async (jp) => { warm(jp); return {}; };
    globalThis.api = { annotateSentenceJyutping, fetchSentenceJyutping, say, playSentenceChars, prefetchAudio };
  `, context);
  const classList = { add() {}, remove() {} };
  const cards = sentences.map((sentence) => {
    const textEl = { dataset: { text: sentence.text } };
    const button = { classList };
    const chars = [...sentence.text].filter((char) => /[\u3400-\u9fff]/.test(char))
      .map((char) => ({ dataset: { say: char }, classList }));
    textEl.querySelectorAll = () => chars;
    const card = {
      dataset: { sentenceId: sentence.id }, isConnected: true,
      querySelector: (selector) => selector === '.sentence-text' ? textEl : button,
      querySelectorAll: () => chars,
    };
    for (const char of chars) char.closest = () => card;
    return { card, chars };
  });
  return { api: context.api, cards, requests, played, warmed };
}

test('页面注音、点读、连播、预热均使用原粤拼，完整原注音不查词典', async () => {
  const h = harness([{ id: '340-1', text: '氹返㖞。', jyutping: [
    { char: '氹', jp: 'tam3' }, { char: '返', jp: 'faan1' },
    { char: '㖞', jp: 'wo3' }, { char: '。', jp: null },
  ] }]);
  const { card, chars } = h.cards[0];
  // 注音尚未渲染的首次点击也要取到原音。
  await h.api.say('氹', chars[0]);
  h.api.annotateSentenceJyutping(card, 1);
  await h.api.fetchSentenceJyutping(card);
  assert.deepEqual(chars.map((el) => el.dataset.jp), ['tam3', 'faan1', 'wo3']);
  assert.ok(chars[2].innerHTML.includes('<rt>wo3</rt>'));
  await h.api.say('㖞', chars[2]);
  await h.api.playSentenceChars(card);
  await h.api.prefetchAudio('氹返㖞。', chars[0]);
  assert.deepEqual(h.played.map((items) => Array.from(items)), [['tam3'], ['wo3'], ['tam3', 'faan1', 'wo3']]);
  assert.deepEqual(h.warmed, ['tam3', 'faan1', 'wo3']);
  assert.equal(h.requests.length, 0);
});

test('只补齐缺音，同文异音的两句独立缓存，无原注音的句子仍查词典', async () => {
  const fallback = [{ char: '氹', jp: 'tam5' }, { char: '返', jp: 'faan2' }];
  const h = harness([
    { id: '340-1', text: '氹返', jyutping: [{ char: '氹', jp: 'tam3' }, { char: '返', jp: null }] },
    { id: '340-2', text: '氹返', jyutping: [{ char: '氹', jp: 'tam4' }, { char: '返', jp: null }] },
    { id: '340-3', text: '氹返' },
  ], fallback);
  for (const { card } of h.cards) await h.api.playSentenceChars(card);
  assert.deepEqual(h.played.map((items) => Array.from(items)), [['tam3', 'faan2'], ['tam4', 'faan2'], ['tam5', 'faan2']]);
  assert.equal(h.requests.length, 1);
});
