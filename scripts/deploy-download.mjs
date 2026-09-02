// 部署用：把 checkins_all_full.json 里全部打卡的课文 + 示范音频下载到 robot/resource/<date>/
// 不需要 CHECKINS_API_TOKEN（accessToken 走 query 就能过）
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const listPath = path.join(root, 'robot', 'checkins_all_full.json');
const outputRoot = path.join(root, 'robot', 'resource');

const headers = {
  openid: 'o51Gx6wubDNvcuHhWxnWlZKvhZu8',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.20 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B)',
};

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchWithRetry(url, label) {
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(url, { headers });
      if (!response.ok) throw new Error(`${label}: HTTP ${response.status}`);
      return response;
    } catch (error) {
      lastError = error;
      if (attempt < 4) await delay(400 * attempt);
    }
  }
  throw lastError;
}

async function nonEmptyFile(p) {
  try {
    return (await stat(p)).size > 0;
  } catch {
    return false;
  }
}

const pages = JSON.parse(await readFile(listPath, 'utf8'));
const items = pages.flatMap((p) => p?.data?.list ?? []).sort((a, b) => a.date.localeCompare(b.date));
console.log(`共 ${items.length} 条打卡记录`);
await mkdir(outputRoot, { recursive: true });

let next = 0;
let completed = 0;
const failures = [];
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (true) {
      const index = next;
      next += 1;
      if (index >= items.length) return;
      const item = items[index];
      try {
        const directory = path.join(outputRoot, item.date);
        await mkdir(directory, { recursive: true });

        const detailPath = path.join(directory, 'response.json');
        let data;
        if (await nonEmptyFile(detailPath)) {
          data = JSON.parse(await readFile(detailPath, 'utf8')).data;
        } else {
          const url = new URL(`https://api.cantonesepi.top/api/checkins/${item.uuid}`);
          url.search = new URLSearchParams({
            accessToken: item.accessToken,
            version: '2.5.2', channel: 'MP', brand: 'microsoft', platform: 'windows',
          }).toString();
          const raw = await (await fetchWithRetry(url, `${item.date} detail`)).text();
          const response = JSON.parse(raw);
          if (response.code !== 0 || !response.data) {
            throw new Error(`${item.date} detail code ${response.code}: ${response.msg ?? ''}`);
          }
          await writeFile(detailPath, raw, 'utf8');
          data = response.data;
        }

        const soundPath = path.join(directory, 'sound.mp3');
        if (data.sound && !(await nonEmptyFile(soundPath))) {
          const res = await fetchWithRetry(data.sound, `${item.date} sound`);
          await writeFile(soundPath, Buffer.from(await res.arrayBuffer()));
        }

        completed += 1;
        if (completed % 50 === 0 || completed === items.length) {
          console.log(`进度 ${completed}/${items.length}`);
        }
      } catch (error) {
        failures.push({ date: item.date, error: String(error.message ?? error) });
      }
    }
  }),
);

if (failures.length) {
  await writeFile(path.join(outputRoot, 'failures.json'), JSON.stringify(failures, null, 2), 'utf8');
}
console.log(`完成 ${completed}/${items.length}，失败 ${failures.length}${failures.length ? ' -> failures.json' : ''}`);
