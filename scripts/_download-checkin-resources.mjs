import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const listPath = path.join(root, 'robot', 'checkins_all_full.json');
const outputRoot = path.join(root, 'robot', 'resource');
const apiToken = process.env.CHECKINS_API_TOKEN;

if (!apiToken) throw new Error('CHECKINS_API_TOKEN is required.');

const headers = {
  openid: 'o51Gx6wubDNvcuHhWxnWlZKvhZu8',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) UnifiedPCWindowsWechat(0xf2541c1a) XWEB/25297',
  xweb_xhr: '1',
  token: apiToken,
  accept: '*/*',
  referer: 'https://servicewechat.com/wxf078f932bb9c1348/179/page-frame.html',
  'accept-language': 'zh-CN,zh;q=0.9',
};

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function fetchWithRetry(url, label) {
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(url, { headers });
      if (!response.ok) throw new Error(`${label}: HTTP ${response.status}`);
      return response;
    } catch (error) {
      lastError = error;
      if (attempt < 4) await delay(500 * attempt);
    }
  }
  throw lastError;
}

async function nonEmptyFile(filePath) {
  try {
    return (await stat(filePath)).size > 0;
  } catch {
    return false;
  }
}

async function download(url, filePath, label) {
  if (!url || await nonEmptyFile(filePath)) return;
  const response = await fetchWithRetry(url, label);
  await writeFile(filePath, Buffer.from(await response.arrayBuffer()));
}

async function getDetail(item, directory) {
  const detailPath = path.join(directory, 'response.json');
  if (await nonEmptyFile(detailPath)) {
    const raw = await readFile(detailPath, 'utf8');
    return { raw, response: JSON.parse(raw) };
  }

  const url = new URL(`https://api.cantonesepi.top/api/checkins/${item.uuid}`);
  url.search = new URLSearchParams({
    accessToken: item.accessToken,
    version: '2.5.2', channel: 'MP', brand: 'microsoft', platform: 'windows',
  }).toString();
  const raw = await (await fetchWithRetry(url, `${item.date} detail`)).text();
  const response = JSON.parse(raw);
  if (response.code !== 0 || !response.data) {
    throw new Error(`${item.date} detail returned code ${response.code}: ${response.msg ?? ''}`);
  }
  await writeFile(detailPath, raw, 'utf8');
  return { raw, response };
}

async function processItem(item) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.date)) throw new Error(`Unsafe date directory: ${item.date}`);
  const directory = path.join(outputRoot, item.date);
  await mkdir(directory, { recursive: true });
  const { response } = await getDetail(item, directory);
  const data = response.data;
  await writeFile(path.join(directory, 'chinese.txt'), data.chinese ?? '', 'utf8');
  await writeFile(path.join(directory, 'cantonese.txt'), data.cantonese ?? '', 'utf8');
  await download(data.sound, path.join(directory, 'sound.mp3'), `${item.date} sound`);
  await download(data.slowSound, path.join(directory, 'slowSound.mp3'), `${item.date} slowSound`);
}

const pages = JSON.parse(await readFile(listPath, 'utf8'));
const items = pages.flatMap((page) => page?.data?.list ?? []);
if (items.length === 0) throw new Error('No check-in records found in the source JSON.');
await mkdir(outputRoot, { recursive: true });

const concurrency = 4;
let next = 0;
let completed = 0;
const failures = [];
await Promise.all(Array.from({ length: concurrency }, async () => {
  while (true) {
    const index = next;
    next += 1;
    if (index >= items.length) return;
    const item = items[index];
    try {
      await processItem(item);
      completed += 1;
      if (completed % 25 === 0 || completed === items.length) {
        console.log(`Completed ${completed}/${items.length}`);
      }
    } catch (error) {
      failures.push({ date: item.date, uuid: item.uuid, error: String(error.message ?? error) });
      console.error(`Failed ${item.date}: ${error.message ?? error}`);
    }
  }
}));

if (failures.length) {
  await writeFile(path.join(outputRoot, 'failures.json'), JSON.stringify(failures, null, 2), 'utf8');
  throw new Error(`${failures.length} resource directories failed; see robot/resource/failures.json`);
}
console.log(`Saved resources for all ${completed} check-ins to ${outputRoot}`);
