import fs from 'node:fs';
import path from 'node:path';

const HAN = /\p{Script=Han}/u;
const LEADING_PUNCTUATION = /^[：:、,，.。．·\-—]$/;

function annotatedTokens(raw, { inline = false } = {}) {
  raw = String(raw || '');
  const tokens = [];
  let previousHan = null;
  const pattern = inline
    ? /[（(][^（()）]*[)）]|[A-Za-z]+[1-6]|[\s\S]/gu
    : /[（(][^（()）]*[)）]|[\s\S]/gu;
  for (const match of raw.matchAll(pattern)) {
    const value = match[0];
    const parenthesized = /^[（(]/.test(value) && value.length > 1;
    const jp = (parenthesized ? value.slice(1, -1) : value).trim().toLowerCase();
    if (parenthesized || (inline && /^[a-z]+[1-6]$/.test(jp))) {
      // 「心，(sam1)」「㖞。(wo3)」的括号仍属于前一个汉字。
      if (previousHan && /^[a-z]+[1-6]$/.test(jp)) previousHan.jp = jp;
      if (tokens.length) tokens.at(-1).end = match.index + value.length;
      continue;
    }
    if (/\s/u.test(value)) continue;
    const token = { char: value, jp: null, start: match.index, end: match.index + value.length };
    tokens.push(token);
    if (HAN.test(value)) previousHan = token;
    else if (!/\p{Punctuation}/u.test(value)) previousHan = null;
  }
  while (tokens.length && LEADING_PUNCTUATION.test(tokens[0].char)) tokens.shift();
  return tokens;
}

export function parseAnnotatedText(raw, options) {
  const tokens = annotatedTokens(raw, options);
  return {
    text: tokens.map((item) => item.char).join(''),
    items: tokens.map(({ char, jp }) => ({ char, jp })),
  };
}

// 先解析注音再分句，避免把句末标点后的粤拼分到下一句。
export function splitAnnotatedSentences(raw) {
  raw = String(raw || '');
  const tokens = annotatedTokens(raw);
  const sentences = [];
  let start = 0;
  for (let end = 0; end < tokens.length; end += 1) {
    if (!/[。！？!?；;]/.test(tokens[end].char) && end !== tokens.length - 1) continue;
    const group = tokens.slice(start, end + 1);
    const text = group.map((item) => item.char).join('').replace(/[、,，]+$/, '').trim();
    if (text.length > 1) sentences.push({ text, raw: raw.slice(group[0].start, group.at(-1).end).trim() });
    start = end + 1;
  }
  return sentences;
}

function readLessonSource(collection, lesson) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(lesson.source || '')) return null;
  for (const directory of new Set([collection.generatedFrom, collection.audioDir].filter(Boolean))) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(directory, lesson.source, 'response.json'), 'utf8'));
      if (data.data?.cantonese) return parseAnnotatedText(data.data.cantonese);
    } catch {
      // 旧课文目录可能已移动；尝试另一个资源目录，最后由词典补音。
    }
  }
  return null;
}

// 已入库的 raw_text 可能没有注音，通过原资源补回，无需重导数据库。
export function attachSourceJyutping(collection) {
  for (const lesson of collection.lessons) {
    let source;
    let cursor = 0;
    for (const sentence of lesson.sentences) {
      let raw;
      for (const inline of [false, true]) {
        raw = parseAnnotatedText(sentence.raw, { inline });
        // 导入时会删除句尾逗号，原文中的最后一个字仍保留其括号注音。
        while (/[、,，]$/.test(raw.text)) {
          raw.text = raw.text.slice(0, -1);
          raw.items.pop();
        }
        // 优先括号模式，避免把正文「A4」等文字误当行内粤拼删掉。
        if (raw.text === sentence.text) break;
      }
      if (source === undefined) source = readLessonSource(collection, lesson);
      const offset = source?.text.indexOf(sentence.text, cursor) ?? -1;
      const sourceItems = offset < 0 ? [] : source.items.slice(
        [...source.text.slice(0, offset)].length,
        [...source.text.slice(0, offset + sentence.text.length)].length,
      );
      if (offset >= 0) cursor = offset + sentence.text.length;
      const items = raw.text === sentence.text && raw.items.some((item) => item.jp) ? raw.items : sourceItems;
      if (items.some((item) => item.jp)) sentence.jyutping = items;
    }
  }
  return collection;
}
