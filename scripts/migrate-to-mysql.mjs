import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import {
  closeDatabase,
  initDatabase,
  insertLegacyCheckin,
  insertLegacyDetail,
  persistenceCounts,
  replaceLessonCollection,
} from '../lib/database.mjs';

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dataDir = path.join(projectDir, 'data');

function readLessonCollections() {
  const definitions = [
    {
      file: 'lessons.json',
      id: 'original',
      name: '初级打卡',
      description: '现有打卡课文与原声示范',
      audioDir: process.env.AUDIO_DIR || process.env.LESSON_DIR || 'D:\\粤语打卡\\小打卡任务',
    },
    {
      file: 'resource-lessons.json',
      id: 'original-slow',
      name: '粤语派',
      description: 'resource 新合集，按日期收录原声与慢速示范',
      audioDir: process.env.RESOURCE_DIR || path.join(projectDir, 'resource'),
    },
  ];
  return definitions.flatMap((definition, displayOrder) => {
    const file = path.join(dataDir, definition.file);
    if (!fs.existsSync(file)) return [];
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    return [{
      ...definition,
      displayOrder,
      generatedFrom: data.generatedFrom || null,
      lessons: Array.isArray(data.lessons) ? data.lessons : [],
    }];
  });
}

function fingerprint(prefix, value, occurrence) {
  return `${prefix}:${createHash('sha256').update(value).update(`:${occurrence}`).digest('hex')}`;
}

function readCheckins() {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(dataDir, 'checkins.json'), 'utf8'));
    return Array.isArray(data.records) ? data.records : [];
  } catch {
    return [];
  }
}

function readDetails() {
  try {
    return fs.readFileSync(path.join(dataDir, 'checkin-details.jsonl'), 'utf8')
      .split('\n')
      .filter((line) => line.trim())
      .map((line) => ({ line, entry: JSON.parse(line) }));
  } catch {
    return [];
  }
}

await initDatabase();
const before = await persistenceCounts();
const occurrences = new Map();
let insertedCheckins = 0;
let insertedDetails = 0;

try {
  const lessonCollections = readLessonCollections();
  for (const collection of lessonCollections) await replaceLessonCollection(collection);

  for (const rec of readCheckins()) {
    const raw = JSON.stringify(rec);
    const occurrence = (occurrences.get(`checkin:${raw}`) || 0) + 1;
    occurrences.set(`checkin:${raw}`, occurrence);
    insertedCheckins += await insertLegacyCheckin(rec, fingerprint('legacy-checkin', raw, occurrence));
  }

  for (const { line, entry } of readDetails()) {
    const occurrence = (occurrences.get(`detail:${line}`) || 0) + 1;
    occurrences.set(`detail:${line}`, occurrence);
    insertedDetails += await insertLegacyDetail(entry, fingerprint('legacy-detail', line, occurrence));
  }

  const after = await persistenceCounts();
  console.log(`课文：${after.collections} 个合集 / ${after.lessons} 课 / ${after.sentences} 句`);
  console.log(`打卡：${after.checkins}（本次新增 ${insertedCheckins}）`);
  console.log(`详情：${after.details}（本次新增 ${insertedDetails}）`);
  console.log(`迁移前课文：${before.collections}/${before.lessons}/${before.sentences}`);
  console.log(`迁移前记录：${before.checkins}/${before.details}`);
} finally {
  await closeDatabase();
}
