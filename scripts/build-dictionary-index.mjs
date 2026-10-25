import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getJyutpingList } from 'to-jyutping';

// 粤典明确将词表、词频表标为公有领域；OpenCC 简繁对应表使用 Apache-2.0。
const SOURCES = {
  words: 'https://words.hk/faiman/analysis/wordslist.json',
  frequency: 'https://words.hk/faiman/analysis/existingwordcount.json',
  variants: 'https://raw.githubusercontent.com/BYVoid/OpenCC/master/data/dictionary/STCharacters.txt',
};
const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const options = Object.fromEntries(process.argv.slice(2).map((argument) => {
  const match = argument.match(/^--(words|frequency|variants|out)=(.+)$/);
  if (!match) throw new Error(`未知参数：${argument}`);
  return [match[1], match[2]];
}));

async function load(name) {
  if (options[name]) return fs.readFile(options[name], 'utf8');
  const response = await fetch(SOURCES[name]);
  if (!response.ok) throw new Error(`${SOURCES[name]}: HTTP ${response.status}`);
  return response.text();
}

const [words, frequency, variantText] = await Promise.all([
  load('words').then(JSON.parse),
  load('frequency').then(JSON.parse),
  load('variants'),
]);
const groups = new Map();
let acceptedWords = 0;

for (const [word, pronunciations] of Object.entries(words)) {
  const characters = Array.from(word);
  if (characters.length < 2 || characters.length > 5 || !/^\p{Script=Han}+$/u.test(word)) continue;
  const pronunciationsByPosition = characters.map(() => new Set());
  for (const pronunciation of new Set(pronunciations)) {
    const syllables = pronunciation.split(' ');
    if (syllables.length !== characters.length || syllables.some((syllable) => !/^[a-z]+[1-6]$/.test(syllable))) continue;
    syllables.forEach((syllable, index) => pronunciationsByPosition[index].add(syllable));
  }
  let accepted = false;
  const appReadings = getJyutpingList(word).map(([, jp]) => jp);
  characters.forEach((character, index) => {
    const readings = pronunciationsByPosition[index];
    // 同一词有多种读法时，不将它当成某个读音的唯一例词。
    if (readings.size !== 1) return;
    const reading = [...readings][0];
    // 点击例词再查字典时，应与当前整词注音保持一致。
    if (appReadings[index] !== reading) return;
    if (!groups.has(character)) groups.set(character, new Map());
    const byReading = groups.get(character);
    if (!byReading.has(reading)) byReading.set(reading, new Set());
    byReading.get(reading).add(word);
    accepted = true;
  });
  if (accepted) acceptedWords++;
}

const entries = {};
let exampleCount = 0;
let readingGroups = 0;
for (const character of [...groups.keys()].sort()) {
  const byReading = groups.get(character);
  entries[character] = {};
  for (const reading of [...byReading.keys()].sort()) {
    const ranked = [...byReading.get(reading)]
      .sort((a, b) => (Number(frequency[b] || 0) - Number(frequency[a] || 0))
        || Array.from(a).length - Array.from(b).length || a.localeCompare(b, 'zh-Hant'));
    const examples = [];
    for (const word of ranked) {
      if (examples.some((selected) => word.includes(selected) || selected.includes(word))) continue;
      examples.push(word);
      if (examples.length === 10) break;
    }
    entries[character][reading] = examples;
    exampleCount += examples.length;
    readingGroups++;
  }
}

const variants = {};
for (const line of variantText.split(/\r?\n/)) {
  if (!line || line.startsWith('#')) continue;
  const [simplified, alternatives = ''] = line.split('\t');
  const traditional = alternatives.split(' ').filter((character) => entries[character]);
  if (traditional.length) variants[simplified] = [...new Set(traditional)];
}

const output = {
  meta: {
    sources: SOURCES,
    license: 'words.hk word list and frequency: public domain; OpenCC variants: Apache-2.0',
    acceptedWords,
    characters: Object.keys(entries).length,
    readingGroups,
    examples: exampleCount,
  },
  variants,
  entries,
};
const outputPath = options.out || path.join(projectDir, 'data', 'dictionary-word-index.json');
await fs.writeFile(outputPath, `${JSON.stringify(output)}\n`);
console.log(`已生成 ${outputPath}：${output.meta.characters} 字、${readingGroups} 读音组、${exampleCount} 个词例位置`);
