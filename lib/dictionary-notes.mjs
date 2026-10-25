import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const curated = JSON.parse(fs.readFileSync(path.join(projectDir, 'data', 'dictionary-curated.json'), 'utf8'));
const wordIndex = JSON.parse(fs.readFileSync(path.join(projectDir, 'data', 'dictionary-word-index.json'), 'utf8'));
const studyPath = path.join(projectDir, 'data', 'private', 'dictionary-study-index.json');
const studyIndex = fs.existsSync(studyPath) ? JSON.parse(fs.readFileSync(studyPath, 'utf8')) : null;
const TRADITIONAL = { 长: '長', 乐: '樂', 为: '為', 着: '著', 读: '讀' };
export const WORDLIST_SOURCE = 'https://words.hk/faiman/analysis/wordslist/';

function headsFor(char) {
  return [...new Set([char, TRADITIONAL[char], ...(wordIndex.variants[char] || [])].filter(Boolean))];
}

function studyRecords(word, reading, char) {
  const positions = [...word].flatMap((letter, index) => letter === char ? [index] : []);
  const entries = studyIndex?.entries[word] || {};
  for (const [pronunciation, records] of Object.entries(entries)) {
    const syllables = pronunciation.split(' ');
    if (positions.some((position) => syllables[position] === reading)) return records;
  }
  return [];
}

function enrichedExample(word, url, reading, char) {
  const records = studyRecords(word, reading, char);
  const first = records[0];
  const pos = first?.pos || studyIndex?.wordPos[word];
  return {
    word,
    ...(url && (!first || first.published) ? { url } : {}),
    ...(pos?.length ? { pos: pos.join('／') } : {}),
    ...(first?.senses?.[0]?.gloss ? { gloss: first.senses[0].gloss } : {}),
    ...(first?.senses?.[0]?.example ? { usageExample: first.senses[0].example } : {}),
  };
}

function readingSenses(heads, reading) {
  for (const head of heads) {
    const records = studyIndex?.entries[head]?.[reading] || [];
    if (!records.length) continue;
    const senses = [];
    for (const record of records) {
      for (const sense of record.senses) {
        if (senses.some((existing) => existing.gloss === sense.gloss)) continue;
        senses.push({ ...sense, ...(record.pos?.length ? { pos: record.pos.join('／') } : {}) });
        if (senses.length === 4) return senses;
      }
    }
    return senses;
  }
  return [];
}

export function dictionaryNotes(char) {
  const heads = headsFor(char);
  const head = heads.find((candidate) => curated[candidate]) || heads.find((candidate) => wordIndex.entries[candidate]) || char;
  const readings = {};
  for (const candidate of heads) {
    for (const [jp, words] of Object.entries(wordIndex.entries[candidate] || {})) {
      if (!readings[jp]) readings[jp] = { examples: [] };
      for (const word of words) {
        if (!readings[jp].examples.some((example) => example.word === word)) {
          readings[jp].examples.push(enrichedExample(word, `https://words.hk/zidin/${encodeURIComponent(word)}`, jp, candidate));
        }
      }
    }
  }
  for (const candidate of heads) {
    for (const jp of Object.keys(studyIndex?.entries[candidate] || {})) {
      if ([...candidate].length === 1 && !readings[jp]) readings[jp] = { examples: [] };
    }
  }
  for (const [jp, note] of Object.entries(curated[head] || {})) {
    const examples = readings[jp]?.examples || [];
    const byWord = new Map(examples.map((example) => [example.word, example]));
    readings[jp] = {
      ...note,
      examples: [...new Set([...(note.words || []), ...examples.map((example) => example.word)])]
        .slice(0, 10)
        .map((word) => byWord.get(word) || enrichedExample(word, null, jp, head)),
    };
  }
  for (const [jp, entry] of Object.entries(readings)) {
    const senses = readingSenses(heads, jp);
    if (senses.length) entry.senses = senses;
    // Keep the most familiar examples, but show explained words first.
    if (!curated[head]?.[jp]) entry.examples.sort((a, b) => Number(Boolean(b.gloss)) - Number(Boolean(a.gloss)));
    entry.examples = entry.examples.slice(0, 10).map((example, index) => index < 5 ? example : {
      word: example.word,
      ...(example.url ? { url: example.url } : {}),
    });
  }
  return {
    readings,
    source: `https://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/search.php?word=${encodeURIComponent(head)}`,
    wordlistSource: WORDLIST_SOURCE,
    studySource: studyIndex ? 'https://words.hk/' : null,
    spokenSource: {
      行: 'https://words.hk/zidin/%E8%A1%8C',
      著: 'https://words.hk/zidin/%E8%91%97%E6%95%B8',
    }[head] || null,
  };
}
