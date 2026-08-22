// 裁掉每课开头的开场白，写成副本（不动原文件）。
//
// 默认做法不靠"猜几秒"：这批课件的开场白是同一段录音，所以先算出全部 mp3 逐字节
// 相同的最长公共前缀，那一段就是开场白，切点由数据决定。
// 这些素材是 CBR MPEG-1 Layer III，按帧丢弃即可，无需重编码、不掉音质。
//
// 用法:
//   node scripts/trim-audio.mjs                 # 自动检测公共开场白并裁掉
//   node scripts/trim-audio.mjs --dry-run       # 只看不写
//   node scripts/trim-audio.mjs --seconds 26    # 不检测，强行裁固定秒数
//   node scripts/trim-audio.mjs --src D:\xxx --out D:\yyy --force
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : fallback;
};
const has = (name) => args.includes(`--${name}`);

const SRC = flag('src', process.env.LESSON_DIR || 'D:\\粤语打卡\\小打卡任务');
const SECONDS = flag('seconds', null) === null ? null : Number(flag('seconds'));
const OUT = flag('out', path.join(SRC, SECONDS === null ? '去掉开场白' : `去掉前${SECONDS}秒`));
const DRY = has('dry-run');
const FORCE = has('force');

const BITRATE_V1L3 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0];
const BITRATE_V2L3 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0];
const SAMPLE_RATES = { 3: [44100, 48000, 32000], 2: [22050, 24000, 16000], 0: [11025, 12000, 8000] };

/** ID3v2 头长度（没有就是 0），音频帧从这里开始 */
function id3Size(buf) {
  if (buf.length < 10 || buf.toString('latin1', 0, 3) !== 'ID3') return 0;
  return 10 + (((buf[6] & 0x7f) << 21) | ((buf[7] & 0x7f) << 14) | ((buf[8] & 0x7f) << 7) | (buf[9] & 0x7f));
}

/** 逐帧遍历，遇到脏数据自动重新对齐 */
function* eachFrame(buf, start) {
  let off = start;
  while (off + 4 <= buf.length) {
    if (buf[off] !== 0xff || (buf[off + 1] & 0xe0) !== 0xe0) {
      off++;
      continue;
    }
    const ver = (buf[off + 1] >> 3) & 3;
    const layer = (buf[off + 1] >> 1) & 3;
    const brIdx = (buf[off + 2] >> 4) & 15;
    const srIdx = (buf[off + 2] >> 2) & 3;
    if (layer !== 1 || brIdx === 0 || brIdx === 15 || srIdx === 3 || !SAMPLE_RATES[ver]) {
      off++;
      continue;
    }
    const bitrate = (ver === 3 ? BITRATE_V1L3 : BITRATE_V2L3)[brIdx];
    const rate = SAMPLE_RATES[ver][srIdx];
    const samples = ver === 3 ? 1152 : 576;
    const length = Math.floor(((samples / 8) * bitrate * 1000) / rate) + ((buf[off + 2] >> 1) & 1);
    if (length < 4) {
      off++;
      continue;
    }
    yield { offset: off, length, duration: samples / rate };
    off += length;
  }
}

function stats(buf) {
  const head = id3Size(buf);
  let duration = 0;
  let count = 0;
  for (const f of eachFrame(buf, head)) {
    duration += f.duration;
    count++;
  }
  return { head, duration, count };
}

if (!fs.existsSync(SRC)) {
  console.error(`找不到素材目录: ${SRC}`);
  process.exit(1);
}

const files = fs.readdirSync(SRC).filter((f) => f.toLowerCase().endsWith('.mp3'));
if (!files.length) {
  console.error(`${SRC} 下没有 mp3`);
  process.exit(1);
}

console.log(`源目录: ${SRC}`);
console.log(`mp3 共 ${files.length} 个\n`);

/** 全部文件逐字节相同的最长前缀（相对各自 ID3 之后） */
function commonIntroBytes() {
  const ref = fs.readFileSync(path.join(SRC, files[0]));
  const refHead = id3Size(ref);
  let common = ref.length - refHead;
  for (const name of files.slice(1)) {
    const b = fs.readFileSync(path.join(SRC, name));
    const h = id3Size(b);
    const n = Math.min(common, b.length - h);
    let i = 0;
    while (i < n && ref[refHead + i] === b[h + i]) i++;
    common = i;
    if (!common) break;
  }
  return common;
}

let introBytes = null;
if (SECONDS === null) {
  console.log('检测各课共有的开场白…');
  introBytes = commonIntroBytes();
  if (introBytes < 16000) {
    console.error(
      `\n只找到 ${introBytes} 字节的共同开头（不到 1 秒），说明这批素材的开场白不是同一段录音。\n` +
        `请改用固定秒数: node scripts/trim-audio.mjs --seconds <秒>`,
    );
    process.exit(1);
  }
  // 用第一个文件把字节数换算成秒
  const ref = fs.readFileSync(path.join(SRC, files[0]));
  let acc = 0;
  for (const f of eachFrame(ref, id3Size(ref))) {
    if (f.offset - id3Size(ref) >= introBytes) break;
    acc += f.duration;
  }
  console.log(`共有开场白: ${introBytes} 字节 ≈ ${acc.toFixed(2)} 秒（所有文件完全一致）\n`);
}

console.log(`输出到: ${OUT}${DRY ? '  (dry-run，不写文件)' : ''}\n`);
if (!DRY) fs.mkdirSync(OUT, { recursive: true });

let done = 0;
let skipped = 0;
const problems = [];

for (const name of files) {
  const dst = path.join(OUT, name);
  if (!FORCE && !DRY && fs.existsSync(dst)) {
    skipped++;
    continue;
  }

  const buf = fs.readFileSync(path.join(SRC, name));
  const info = stats(buf);
  if (!info.count) {
    problems.push(`${name}: 没解析到 mp3 帧，跳过`);
    continue;
  }

  // 找切点：第一个不早于目标位置的帧边界（宁可多留一帧，也不切进正课）
  let cutOffset = null;
  let cutSeconds = 0;
  let acc = 0;
  for (const f of eachFrame(buf, info.head)) {
    const reached = introBytes === null ? acc >= SECONDS : f.offset - info.head >= introBytes;
    if (reached) {
      cutOffset = f.offset;
      cutSeconds = acc;
      break;
    }
    acc += f.duration;
  }

  if (cutOffset === null || info.duration - cutSeconds < 1) {
    problems.push(`${name}: 总长 ${info.duration.toFixed(1)}s，裁完不剩东西，跳过`);
    continue;
  }

  // 保留原 ID3 标签 + 切点之后的完整帧
  const out = Buffer.concat([buf.subarray(0, info.head), buf.subarray(cutOffset)]);
  if (!DRY) fs.writeFileSync(dst, out);
  done++;

  if (done <= 3 || done % 50 === 0) {
    const after = stats(out);
    console.log(
      `  ${name}\n    ${info.duration.toFixed(2)}s -> ${after.duration.toFixed(2)}s ` +
        `(裁 ${cutSeconds.toFixed(3)}s / ${info.count - after.count} 帧)`,
    );
  }
}

console.log(`\n完成 ${done} 个${skipped ? `，已存在跳过 ${skipped} 个（要重做加 --force）` : ''}`);
if (problems.length) {
  console.log(`有问题的 ${problems.length} 个:`);
  problems.forEach((p) => console.log('  ' + p));
}
