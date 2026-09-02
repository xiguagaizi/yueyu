// 从 resource/<date>/response.json 生成独立合集索引，音频继续使用原目录中的文件。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(process.argv[2] || process.env.RESOURCE_DIR || path.join(ROOT, 'resource'));
const OUT = path.join(ROOT, 'data', 'resource-lessons.json');
const PAREN = /[（(][^（()）]*[)）]/g;

function clean(raw) {
  return String(raw || '')
    .replace(PAREN, '')
    .replace(/[\s\u3000]+/g, '')
    .replace(/^[：:、,，.。．·\-—]+/, '')
    .trim();
}

function splitSentences(cantonese) {
  return clean(cantonese)
    .split(/(?<=[。！？!?；;])/)
    .map((sentence) => sentence.replace(/[、,，]+$/, '').trim())
    .filter((sentence) => sentence.length > 1);
}

if (!fs.existsSync(SRC)) {
  console.error(`找不到素材目录: ${SRC}`);
  process.exit(1);
}

const dates = fs.readdirSync(SRC)
  .filter((name) => /^\d{4}-\d{2}-\d{2}$/.test(name))
  .filter((name) => fs.existsSync(path.join(SRC, name, 'response.json')))
  .sort();

const lessons = [];
for (const date of dates) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(path.join(SRC, date, 'response.json'), 'utf8')).data;
  } catch {
    continue;
  }
  if (!data?.cantonese) continue;

  const sentences = splitSentences(data.cantonese);
  if (!sentences.length) continue;

  const day = lessons.length + 1;
  const sound = path.join(SRC, date, 'sound.mp3');
  const slowSound = path.join(SRC, date, 'slowSound.mp3');
  lessons.push({
    day,
    title: `${date} ${clean(data.chinese).slice(0, 20)}`,
    audio: fs.existsSync(sound) && fs.statSync(sound).size > 0 ? `${date}/sound.mp3` : null,
    slowAudio: fs.existsSync(slowSound) && fs.statSync(slowSound).size > 0 ? `${date}/slowSound.mp3` : null,
    source: date,
    sentences: sentences.map((text, index) => ({ id: `${day}-${index + 1}`, text, raw: text })),
  });
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ generatedFrom: SRC, lessons }, null, 2), 'utf8');

const sentenceCount = lessons.reduce((total, lesson) => total + lesson.sentences.length, 0);
const audioCount = lessons.filter((lesson) => lesson.audio).length;
const slowAudioCount = lessons.filter((lesson) => lesson.slowAudio).length;
console.log(`新合集 ${lessons.length} 天 / ${sentenceCount} 句 / 原速 ${audioCount} / 慢速 ${slowAudioCount} -> ${OUT}`);
