// 部署用：从 robot/resource/<date>/response.json 生成 data/lessons.json，
// 并把示范音频硬链接成 lessons/dayNNN.mp3（LESSON_DIR/AUDIO_DIR 指向 lessons/）
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'robot', 'resource');
const OUT = path.join(ROOT, 'data', 'lessons.json');
const AUDIO_OUT = path.join(ROOT, 'lessons');

// 课文里夹杂注音：括号注音 以(ji5)学(hok6)，去掉括号部分就是干净句子
const PAREN = /[（(][^（()）]*[)）]/g;

function cleanSentence(raw) {
  return raw
    .replace(PAREN, '')
    .replace(/[\s\u3000]+/g, '')
    .replace(/^[\uff1a:\u3001,\uff0c.\u3002\uff0e\u00b7\-\u2014]+/, '')
    .trim();
}

function splitSentences(cantonese) {
  const cleaned = cleanSentence(cantonese);
  return cleaned
    .split(/(?<=[。！？!?；;])/)
    .map((s) => s.replace(/[、,，\uff0c]+$/, '').trim())
    .filter((s) => s.length > 1);
}

if (!fs.existsSync(SRC)) {
  console.error(`找不到素材目录: ${SRC}，先跑 scripts/deploy-download.mjs`);
  process.exit(1);
}
fs.mkdirSync(AUDIO_OUT, { recursive: true });

const dates = fs
  .readdirSync(SRC)
  .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d))
  .filter((d) => fs.existsSync(path.join(SRC, d, 'response.json')))
  .sort();

const lessons = [];
for (const [i, date] of dates.entries()) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(path.join(SRC, date, 'response.json'), 'utf8')).data;
  } catch {
    continue;
  }
  if (!data?.cantonese) continue;

  const day = i + 1;
  const audioName = `day${String(day).padStart(3, '0')}.mp3`;
  const soundSrc = path.join(SRC, date, 'sound.mp3');
  const hasAudio = fs.existsSync(soundSrc) && fs.statSync(soundSrc).size > 0;
  if (hasAudio) {
    const dest = path.join(AUDIO_OUT, audioName);
    try {
      fs.unlinkSync(dest);
    } catch {}
    try {
      fs.linkSync(soundSrc, dest);
    } catch {
      fs.copyFileSync(soundSrc, dest);
    }
  }

  const chineseTitle = cleanSentence(data.chinese || '').slice(0, 20);
  const sentences = splitSentences(data.cantonese).map((text, j) => ({
    id: `${day}-${j + 1}`,
    text,
    raw: text,
  }));
  if (!sentences.length) continue;

  lessons.push({
    day,
    title: `${date} ${chineseTitle}`,
    audio: hasAudio ? audioName : null,
    source: date,
    sentences,
  });
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ generatedFrom: SRC, lessons }, null, 2), 'utf8');

const total = lessons.reduce((n, l) => n + l.sentences.length, 0);
const withAudio = lessons.filter((l) => l.audio).length;
console.log(`课程 ${lessons.length} 天 / 句子 ${total} 句 / 有示范音频 ${withAudio} 天 -> ${OUT}`);
