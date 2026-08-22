// 把「小打卡任务」目录里的 txt 课文 + mp3 示范音频，整理成 data/lessons.json
// 用法: node scripts/build-lessons.mjs [素材目录]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SRC = process.argv[2] || process.env.LESSON_DIR || 'D:\\粤语打卡\\小打卡任务';
const OUT = path.join(ROOT, 'data', 'lessons.json');

// 课文里夹杂了两种注音写法，送去评分前都要去掉：
//   1) 括号注音   一切（cei）都好吗
//   2) 行内注音   好荣幸wing6认识你
const PAREN = /[（(][^（()）]*[)）]/g;
const INLINE_JYUTPING = /[A-Za-z]+[1-6]/g;

function cleanSentence(raw) {
  return raw
    .replace(PAREN, '')
    .replace(INLINE_JYUTPING, '')
    .replace(/[\s\u3000]+/g, '')
    .replace(/^[\uff1a:\u3001,\uff0c.\u3002\uff0e\u00b7\-\u2014]+/, '')
    .trim();
}

// 课文里的占位/说明行，不是练习句
const SKIP_LINES = new Set(['这个任务走丢了']);

function parseTxt(text) {
  const lessons = [];
  let current = null;
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    const head = trimmed.match(/^day\s*0*(\d+)\s*[.、,，:：]?\s*(.*)$/i);
    if (head) {
      current = { day: Number(head[1]), title: cleanSentence(head[2]) || `Day ${head[1]}`, sentences: [] };
      lessons.push(current);
      continue;
    }

    if (!current) continue;

    // 序号可有可无（day07 那一课整段都没编号），有就剥掉
    const item = trimmed.match(/^(\d{1,2})\s*[.．、,，)）]?\s*(.+)$/);
    const raw = (item ? item[2] : trimmed).replace(/^(例如|注意|备注)\s*[:：]?/, '').trim();
    const text_ = cleanSentence(raw);

    if (!text_) continue;
    if (text_.length > 30) continue; // 讲解性的长注释，不是练习句
    if (SKIP_LINES.has(text_)) continue;
    current.sentences.push({ index: current.sentences.length + 1, raw, text: text_ });
  }
  return lessons;
}

function indexAudio(dir) {
  const map = new Map();
  for (const name of fs.readdirSync(dir)) {
    if (!name.toLowerCase().endsWith('.mp3')) continue;
    const m = name.match(/^day\s*0*(\d+)/i);
    if (!m) continue;
    map.set(Number(m[1]), name);
  }
  return map;
}

if (!fs.existsSync(SRC)) {
  console.error(`找不到素材目录: ${SRC}`);
  process.exit(1);
}

const audio = indexAudio(SRC);
const txtFiles = fs.readdirSync(SRC).filter((n) => n.toLowerCase().endsWith('.txt'));

const byDay = new Map();
for (const file of txtFiles) {
  const text = fs.readFileSync(path.join(SRC, file), 'utf8');
  for (const lesson of parseTxt(text)) {
    if (!lesson.sentences.length) continue;
    if (byDay.has(lesson.day)) {
      // 同一天出现在多个文件里就合并句子
      byDay.get(lesson.day).sentences.push(...lesson.sentences);
    } else {
      byDay.set(lesson.day, { ...lesson, source: file });
    }
  }
}

const lessons = [...byDay.values()]
  .sort((a, b) => a.day - b.day)
  .map((lesson) => ({
    day: lesson.day,
    title: lesson.title,
    audio: audio.get(lesson.day) || null,
    source: lesson.source,
    sentences: lesson.sentences.map((s, i) => ({ id: `${lesson.day}-${i + 1}`, text: s.text, raw: s.raw })),
  }));

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ generatedFrom: SRC, lessons }, null, 2), 'utf8');

const total = lessons.reduce((n, l) => n + l.sentences.length, 0);
const noAudio = lessons.filter((l) => !l.audio).map((l) => l.day);
const suspicious = [];
for (const l of lessons) {
  for (const s of l.sentences) if (/[A-Za-z]/.test(s.text)) suspicious.push(`day${l.day}: ${s.text}`);
}

console.log(`课程 ${lessons.length} 课 / 句子 ${total} 句 -> ${OUT}`);
console.log(`缺示范音频的天: ${noAudio.join(', ') || '无'}`);
console.log(`清洗后仍含字母的句子(${suspicious.length}):`);
suspicious.slice(0, 20).forEach((s) => console.log('  ' + s));
