import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import mysql from 'mysql2/promise';

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
try {
  process.loadEnvFile(path.join(projectDir, '.env'));
} catch {
  // CI / 首次安装时可以直接使用进程环境变量。
}

const config = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'mcapp',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mcdb',
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || 10),
  queueLimit: 0,
  charset: 'utf8mb4',
  supportBigNumbers: true,
  bigNumberStrings: true,
};

const pool = mysql.createPool(config);

const schema = [
  `CREATE TABLE IF NOT EXISTS listening_task_state (
    task_id VARCHAR(128) NOT NULL,
    seen_reference BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (task_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`,
  `CREATE TABLE IF NOT EXISTS listening_attempts (
    id CHAR(36) NOT NULL,
    task_id VARCHAR(128) NOT NULL,
    recorded_at_ms BIGINT UNSIGNED NOT NULL,
    payload JSON NOT NULL,
    PRIMARY KEY (id),
    KEY ix_listening_task_time (task_id, recorded_at_ms)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`,
  `CREATE TABLE IF NOT EXISTS lesson_collections (
    id VARCHAR(64) NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NULL,
    audio_dir VARCHAR(1024) NOT NULL,
    generated_from TEXT NULL,
    display_order SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    PRIMARY KEY (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`,
  `CREATE TABLE IF NOT EXISTS lessons (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    collection_id VARCHAR(64) NOT NULL,
    day_number INT NOT NULL,
    title TEXT NOT NULL,
    audio_path VARCHAR(1024) NULL,
    slow_audio_path VARCHAR(1024) NULL,
    source_ref TEXT NULL,
    display_order INT UNSIGNED NOT NULL DEFAULT 0,
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    PRIMARY KEY (id),
    UNIQUE KEY uq_lessons_collection_day (collection_id, day_number),
    KEY ix_lessons_collection (collection_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`,
  `CREATE TABLE IF NOT EXISTS sentences (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    lesson_id BIGINT UNSIGNED NOT NULL,
    sentence_key VARCHAR(128) NOT NULL,
    text_content TEXT NOT NULL,
    raw_text TEXT NOT NULL,
    display_order INT UNSIGNED NOT NULL DEFAULT 0,
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    PRIMARY KEY (id),
    UNIQUE KEY uq_sentences_lesson_key (lesson_id, sentence_key),
    KEY ix_sentences_lesson_order (lesson_id, display_order)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`,
  `CREATE TABLE IF NOT EXISTS checkins (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    source_key VARCHAR(96) NOT NULL,
    recorded_at_ms BIGINT UNSIGNED NOT NULL,
    collection VARCHAR(64) NOT NULL,
    day_number INT NULL,
    sentence_id VARCHAR(128) NULL,
    mode VARCHAR(32) NOT NULL DEFAULT 'single',
    language VARCHAR(32) NOT NULL DEFAULT 'cantonese',
    score SMALLINT UNSIGNED NOT NULL,
    passed BOOLEAN NOT NULL,
    syllable_weight SMALLINT UNSIGNED NOT NULL DEFAULT 1,
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    PRIMARY KEY (id),
    UNIQUE KEY uq_checkins_source_key (source_key),
    KEY ix_checkins_collection_time (collection, recorded_at_ms),
    KEY ix_checkins_sentence_time (collection, sentence_id, recorded_at_ms)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`,
  `CREATE TABLE IF NOT EXISTS checkin_details (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    source_key VARCHAR(96) NOT NULL,
    recorded_at_ms BIGINT UNSIGNED NOT NULL,
    collection VARCHAR(64) NOT NULL,
    day_number INT NOT NULL,
    sentence_id VARCHAR(128) NOT NULL,
    payload JSON NOT NULL,
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    PRIMARY KEY (id),
    UNIQUE KEY uq_checkin_details_source_key (source_key),
    KEY ix_checkin_details_latest (collection, day_number, sentence_id, recorded_at_ms)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci`,
];

export function databaseInfo() {
  return { host: config.host, port: config.port, database: config.database, user: config.user };
}

export async function initDatabase() {
  const connection = await pool.getConnection();
  try {
    for (const statement of schema) await connection.query(statement);
  } finally {
    connection.release();
  }
}

export async function replaceLessonCollection(collection) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    await connection.execute(
      `INSERT INTO lesson_collections
        (id, name, description, audio_dir, generated_from, display_order)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         name = VALUES(name),
         description = VALUES(description),
         audio_dir = VALUES(audio_dir),
         generated_from = VALUES(generated_from),
         display_order = VALUES(display_order)`,
      [
        collection.id,
        collection.name,
        collection.description || null,
        collection.audioDir,
        collection.generatedFrom || null,
        Number(collection.displayOrder) || 0,
      ],
    );
    // 没有外键（mcapp 用户只有最小权限），句子表靠这里显式清理，避免重导课文留下孤儿行。
    await connection.execute(
      `DELETE s FROM sentences s JOIN lessons l ON s.lesson_id = l.id WHERE l.collection_id = ?`,
      [collection.id],
    );
    await connection.execute('DELETE FROM lessons WHERE collection_id = ?', [collection.id]);

    for (const [lessonIndex, lesson] of collection.lessons.entries()) {
      const [lessonResult] = await connection.execute(
        `INSERT INTO lessons
          (collection_id, day_number, title, audio_path, slow_audio_path, source_ref, display_order)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          collection.id,
          Number(lesson.day),
          lesson.title,
          lesson.audio || null,
          lesson.slowAudio || null,
          lesson.source || null,
          lessonIndex,
        ],
      );
      for (const [sentenceIndex, sentence] of lesson.sentences.entries()) {
        await connection.execute(
          `INSERT INTO sentences
            (lesson_id, sentence_key, text_content, raw_text, display_order)
           VALUES (?, ?, ?, ?, ?)`,
          [lessonResult.insertId, sentence.id, sentence.text, sentence.raw ?? sentence.text, sentenceIndex],
        );
      }
    }
    await connection.commit();
  } catch (error) {
    await connection.rollback();
    error.isDatabaseError = true;
    throw error;
  } finally {
    connection.release();
  }
}

export async function loadLessonCollections() {
  try {
    const [collectionRows] = await pool.query(
      `SELECT id, name, description, audio_dir, generated_from
         FROM lesson_collections
        ORDER BY display_order ASC, id ASC`,
    );
    const [lessonRows] = await pool.query(
      `SELECT id, collection_id, day_number, title, audio_path, slow_audio_path, source_ref
         FROM lessons
        ORDER BY collection_id ASC, display_order ASC, day_number ASC`,
    );
    const [sentenceRows] = await pool.query(
      `SELECT lesson_id, sentence_key, text_content, raw_text
         FROM sentences
        ORDER BY lesson_id ASC, display_order ASC, id ASC`,
    );

    const collectionById = new Map(collectionRows.map((row) => [row.id, {
      id: row.id,
      name: row.name,
      description: row.description || '',
      audioDir: row.audio_dir,
      generatedFrom: row.generated_from,
      lessons: [],
    }]));
    const lessonById = new Map();
    for (const row of lessonRows) {
      const lesson = {
        day: Number(row.day_number),
        title: row.title,
        audio: row.audio_path,
        slowAudio: row.slow_audio_path,
        source: row.source_ref,
        sentences: [],
      };
      collectionById.get(row.collection_id)?.lessons.push(lesson);
      lessonById.set(String(row.id), lesson);
    }
    for (const row of sentenceRows) {
      lessonById.get(String(row.lesson_id))?.sentences.push({
        id: row.sentence_key,
        text: row.text_content,
        raw: row.raw_text,
      });
    }
    return [...collectionById.values()];
  } catch (error) {
    error.isDatabaseError = true;
    throw error;
  }
}

function checkinParams(rec, sourceKey = `runtime:${randomUUID()}`) {
  return [
    sourceKey,
    Number(rec.ts) || Date.now(),
    rec.collection || 'original',
    Number.isFinite(Number(rec.day)) ? Number(rec.day) : null,
    rec.sentenceId || null,
    rec.mode || 'single',
    rec.language || 'cantonese',
    Math.max(0, Number(rec.score) || 0),
    Boolean(rec.passed),
    Math.max(1, Number(rec.weight) || 1),
  ];
}

async function insertCheckinWith(executor, rec, sourceKey) {
  const [result] = await executor.execute(
    `INSERT IGNORE INTO checkins
      (source_key, recorded_at_ms, collection, day_number, sentence_id, mode, language, score, passed, syllable_weight)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    checkinParams(rec, sourceKey),
  );
  return result.affectedRows;
}

async function insertDetailWith(executor, entry, sourceKey = `runtime-detail:${randomUUID()}`) {
  const [result] = await executor.execute(
    `INSERT IGNORE INTO checkin_details
      (source_key, recorded_at_ms, collection, day_number, sentence_id, payload)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      sourceKey,
      Number(entry.ts) || Date.now(),
      entry.collection || 'original',
      Number(entry.day),
      entry.sentenceId,
      JSON.stringify(entry),
    ],
  );
  return result.affectedRows;
}

export async function insertLegacyCheckin(rec, sourceKey) {
  return insertCheckinWith(pool, rec, sourceKey);
}

export async function insertLegacyDetail(entry, sourceKey) {
  return insertDetailWith(pool, entry, sourceKey);
}

export async function saveScoreAttempt({ rec = null, detail = null }) {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();
    if (rec) await insertCheckinWith(connection, rec);
    if (detail) await insertDetailWith(connection, detail);
    await connection.commit();
  } catch (error) {
    if (connection) await connection.rollback();
    error.isDatabaseError = true;
    throw error;
  } finally {
    connection?.release();
  }
}

// 只更新有完整识别明细的既有评分，不新增练习、不改变录音时间戳。
// 明细与对应打卡成绩在同一个事务里更新，重算函数通过版本号保证幂等。
export async function recalculateSavedScores(regrade) {
  const connection = await pool.getConnection();
  let updated = 0;
  try {
    await connection.beginTransaction();
    const [rows] = await connection.query('SELECT id, payload FROM checkin_details FOR UPDATE');
    for (const row of rows) {
      const original = parseJson(row.payload);
      const entry = regrade(original);
      if (!entry) continue;
      await connection.execute('UPDATE checkin_details SET payload = ? WHERE id = ?', [JSON.stringify(entry), row.id]);
      await connection.execute(
        `UPDATE checkins SET score = ?, passed = ?, syllable_weight = ?
          WHERE collection = ? AND day_number = ? AND sentence_id = ? AND recorded_at_ms = ?
            AND language = 'cantonese'`,
        [entry.score, entry.passed ? 1 : 0, entry.weight, entry.collection, entry.day, entry.sentenceId, entry.ts],
      );
      updated += 1;
    }
    await connection.commit();
    return updated;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

export async function loadCheckins(collection) {
  try {
    const params = [];
    const where = collection ? 'WHERE collection = ?' : '';
    if (collection) params.push(collection);
    const [rows] = await pool.execute(
      `SELECT recorded_at_ms, collection, day_number, sentence_id, mode, language,
              score, passed, syllable_weight
         FROM checkins ${where}
        ORDER BY recorded_at_ms ASC, id ASC`,
      params,
    );
    return {
      records: rows.map((row) => ({
        ts: Number(row.recorded_at_ms),
        collection: row.collection,
        day: row.day_number,
        sentenceId: row.sentence_id,
        mode: row.mode,
        language: row.language,
        score: Number(row.score),
        passed: Boolean(row.passed),
        weight: Number(row.syllable_weight),
      })),
    };
  } catch (error) {
    error.isDatabaseError = true;
    throw error;
  }
}

function parseJson(value) {
  if (value == null || typeof value === 'object' && !Buffer.isBuffer(value)) return value;
  return JSON.parse(Buffer.isBuffer(value) ? value.toString('utf8') : value);
}

export async function latestCheckinDetails(collection, day) {
  const [rows] = await pool.execute(
    `SELECT sentence_id, payload
       FROM (
         SELECT sentence_id, payload,
                ROW_NUMBER() OVER (PARTITION BY sentence_id ORDER BY recorded_at_ms DESC, id DESC) AS row_num
           FROM checkin_details
          WHERE collection = ? AND day_number = ?
       ) ranked
      WHERE row_num = 1`,
    [collection, day],
  );
  return Object.fromEntries(rows.map((row) => [row.sentence_id, parseJson(row.payload)]));
}

// 历史页数据源：全部打卡明细（新→旧），左联课文/句子补标题和文本，老记录缺课文也能显示。
export async function loadHistoryDetails(collection) {
  const params = [];
  const where = collection ? 'WHERE d.collection = ?' : '';
  if (collection) params.push(collection);
  const [rows] = await pool.execute(
    `SELECT d.recorded_at_ms, d.collection, d.day_number, d.sentence_id, d.payload,
            s.text_content AS sentence_text, l.title AS lesson_title
       FROM checkin_details d
       LEFT JOIN lessons l ON l.collection_id = d.collection AND l.day_number = d.day_number
       LEFT JOIN sentences s ON s.lesson_id = l.id AND s.sentence_key = d.sentence_id
       ${where}
      ORDER BY d.recorded_at_ms DESC, d.id DESC
      LIMIT 2000`,
    params,
  );
  const [counts] = await pool.query(
    `SELECT l.collection_id, l.day_number, COUNT(s.id) AS sentence_count
       FROM lessons l
       LEFT JOIN sentences s ON s.lesson_id = l.id
      GROUP BY l.collection_id, l.day_number`,
  );
  const sentenceCount = new Map(counts.map((row) => [`${row.collection_id}/${row.day_number}`, Number(row.sentence_count)]));
  return rows.map((row) => {
    const payload = parseJson(row.payload) || {};
    return {
      ...payload,
      ts: Number(row.recorded_at_ms) || Number(payload.ts) || 0,
      collection: row.collection,
      day: Number(row.day_number),
      sentenceId: row.sentence_id,
      text: row.sentence_text || '',
      title: row.lesson_title || '',
      sentenceCount: sentenceCount.get(`${row.collection}/${row.day_number}`) || 0,
      weight: Number(payload.weight) || 0,
    };
  });
}

// 旧版平铺录音文件迁移时用：每句最新一条明细的时间戳（平铺文件就是那次评分存的）。
export async function latestDetailTsBySentence() {
  const [rows] = await pool.query(
    `SELECT collection, sentence_id, MAX(recorded_at_ms) AS ts
       FROM checkin_details
      GROUP BY collection, sentence_id`,
  );
  return new Map(rows.map((row) => [`${row.collection}/${row.sentence_id}`, Number(row.ts)]));
}

export async function persistenceCounts() {
  const [rows] = await pool.query(`
    SELECT
      (SELECT COUNT(*) FROM lesson_collections) AS collections,
      (SELECT COUNT(*) FROM lessons) AS lessons,
      (SELECT COUNT(*) FROM sentences) AS sentences,
      (SELECT COUNT(*) FROM checkins) AS checkins,
      (SELECT COUNT(*) FROM checkin_details) AS details
  `);
  return Object.fromEntries(Object.entries(rows[0]).map(([key, value]) => [key, Number(value)]));
}

export async function closeDatabase() {
  await pool.end();
}

const listeningPayload = (row) => typeof row.payload === 'string' ? JSON.parse(row.payload) : row.payload;

export const listeningStore = {
  async get(id) {
    const [rows] = await pool.execute('SELECT payload FROM listening_attempts WHERE id = ?', [id]);
    return rows.length ? listeningPayload(rows[0]) : null;
  },
  async list(taskId = null) {
    const [rows] = taskId
      ? await pool.execute('SELECT payload FROM listening_attempts WHERE task_id = ? ORDER BY recorded_at_ms DESC LIMIT 50', [taskId])
      : await pool.query('SELECT payload FROM listening_attempts ORDER BY recorded_at_ms DESC LIMIT 50');
    return rows.map(listeningPayload);
  },
  async save(attempt) {
    const connection = await pool.getConnection();
    try {
      await connection.beginTransaction();
      await connection.execute('INSERT IGNORE INTO listening_task_state (task_id) VALUES (?)', [attempt.taskId]);
      const [states] = await connection.execute('SELECT seen_reference FROM listening_task_state WHERE task_id = ? FOR UPDATE', [attempt.taskId]);
      const [existing] = await connection.execute('SELECT payload FROM listening_attempts WHERE id = ?', [attempt.id]);
      if (existing.length) {
        const saved = listeningPayload(existing[0]);
        if (saved.requestHash !== attempt.requestHash) throw Object.assign(new Error('该次提交已评分，请开始新的复述。'), { status: 409 });
        await connection.commit();
        return saved;
      }
      const saved = { ...attempt, afterReference: Boolean(states[0].seen_reference) };
      await connection.execute('INSERT INTO listening_attempts (id, task_id, recorded_at_ms, payload) VALUES (?, ?, ?, ?)',
        [saved.id, saved.taskId, saved.createdAt, JSON.stringify(saved)]);
      await connection.execute('UPDATE listening_task_state SET seen_reference = TRUE WHERE task_id = ?', [saved.taskId]);
      await connection.commit();
      return saved;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally { connection.release(); }
  },
};
