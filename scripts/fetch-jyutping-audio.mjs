// 下载 words.hk 粤拼音节库到 public/jyutping-audio/：每个粤拼音节一个小 mp3（官方 app 同款女声）。
// 覆盖范围 = to-jyutping 词典能产出的全部音节，保证前端查到粤拼的字都有音可播。
// 用法: npm run fetch:jyutping-audio （已存在且大小正常的文件会跳过）
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getJyutpingCandidates } from 'to-jyutping';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'jyutping-audio');
// 音源：words.hk 官方 app 仓库内置的音节库（公司自有资源）
const RAW_BASE = 'https://raw.githubusercontent.com/AlienKevin/wordshk_app/main/assets/jyutping_female';
const CONCURRENCY = 16;
// 正常音节至少几百字节；比这小得多的是下载出错或空文件
const MIN_BYTES = 200;

// to-jyutping 把词典整个打包在 dist 里：把里面的 CJK 字全部跑一遍，收集所有能产出的粤拼音节。
// 注意要用 getJyutpingCandidates（全部读法）：单字查询只会给词典头音，
// 多音字的词语读音（嘅 ge2、門 mun2 这类口语调）只在候选里出现。
function syllableInventory() {
  const dist = path.join(ROOT, 'node_modules', 'to-jyutping', 'dist', 'index.cjs');
  const source = fs.readFileSync(dist, 'utf8');
  const chars = new Set(source.match(/[\u3400-\u9fff\uF900-\uFAFF]/g) || []);
  if (!chars.size) throw new Error('to-jyutping/dist 里没找到词典数据，请确认依赖已安装（npm install）');
  const syllables = new Set();
  for (const char of chars) {
    try {
      for (const [, readings] of getJyutpingCandidates(char)) {
        for (const reading of readings || []) {
          if (!reading) continue;
          for (const syllable of String(reading).split(/\s+/).filter(Boolean)) syllables.add(syllable);
        }
      }
    } catch { }
  }
  if (!syllables.size) throw new Error('没能从 to-jyutping 词典提取到音节');
  return [...syllables].sort();
}

async function downloadOne(syllable) {
  const target = path.join(OUT_DIR, `${syllable}.mp3`);
  if (fs.existsSync(target) && fs.statSync(target).size >= MIN_BYTES) return 'kept';
  const response = await fetch(`${RAW_BASE}/${syllable}.mp3`);
  if (!response.ok) return 'missing';
  const body = Buffer.from(await response.arrayBuffer());
  if (body.length < MIN_BYTES) return 'missing';
  fs.writeFileSync(target, body);
  return 'fetched';
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const syllables = syllableInventory();
  console.log(`to-jyutping 词典共 ${syllables.length} 个音节，开始下载到 public/jyutping-audio/ …`);
  const missing = [];
  let fetched = 0;
  let kept = 0;
  let index = 0;
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (index < syllables.length) {
      const syllable = syllables[index++];
      const result = await downloadOne(syllable);
      if (result === 'missing') missing.push(syllable);
      else if (result === 'fetched') fetched++;
      else kept++;
      if (fetched && fetched % 300 === 0) console.log(`  已下载 ${fetched}…`);
    }
  });
  await Promise.all(workers);
  const bytes = fs.readdirSync(OUT_DIR).reduce((total, name) => total + fs.statSync(path.join(OUT_DIR, name)).size, 0);
  console.log(`完成：新下载 ${fetched}，已有 ${kept}，音源缺失 ${missing.length}；目录共 ${(bytes / 1024 / 1024).toFixed(1)}MB`);
  if (missing.length) {
    fs.writeFileSync(path.join(OUT_DIR, 'missing.txt'), `${missing.join('\n')}\n`);
    console.log(`音源里没有的音节列在 public/jyutping-audio/missing.txt（播放时会跳过这些字）`);
  } else if (fs.existsSync(path.join(OUT_DIR, 'missing.txt'))) {
    fs.rmSync(path.join(OUT_DIR, 'missing.txt'));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
