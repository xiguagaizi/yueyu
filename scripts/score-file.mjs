// 命令行跑一次评分，用来验证 key / 接口是否通
// 用法: node scripts/score-file.mjs <音频文件> "<目标句子>" [cantonese|mandarin|english]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { analyze, TONE_NAMES } from '../lib/jyutping.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
try {
  process.loadEnvFile(path.join(ROOT, '.env'));
} catch {}

const [file, text, language = 'cantonese'] = process.argv.slice(2);
if (!file || !text) {
  console.error('用法: node scripts/score-file.mjs <音频文件> "<目标句子>" [语言]');
  process.exit(1);
}

const key = process.env.CANTONESE_AI_API_KEY;
if (!key) {
  console.error('缺少 CANTONESE_AI_API_KEY（写进 .env 或设成环境变量）');
  process.exit(1);
}

const proxy = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;
if (proxy && !process.execArgv.includes('--use-env-proxy') && process.env.NODE_USE_ENV_PROXY !== '1') {
  console.error(`检测到代理 ${proxy}，Node 默认不走它。请改用: npm run score -- "${file}" "${text}"`);
  process.exit(1);
}

const buf = fs.readFileSync(file);
if (buf.length > 10 * 1024 * 1024) {
  console.error(`音频 ${(buf.length / 1048576).toFixed(1)}MB，超过接口 10MB 上限`);
  process.exit(1);
}

const form = new FormData();
form.append('api_key', key);
form.append('text', text);
form.append('language', language);
form.append('audio', new Blob([buf]), path.basename(file));

const res = await fetch(process.env.CANTONESE_AI_URL || 'https://cantonese.ai/api/score-pronunciation', {
  method: 'POST',
  body: form,
  signal: AbortSignal.timeout(60_000),
});

const raw = await res.text();
console.log(`HTTP ${res.status}`);
let data;
try {
  data = JSON.parse(raw);
} catch {
  console.log(raw.slice(0, 1000));
  process.exit(1);
}
console.log(JSON.stringify(data, null, 2));

if (language === 'cantonese' && (data.expectedJyutping || data.transcribedJyutping)) {
  const a = analyze(data.expectedJyutping, data.transcribedJyutping, text);
  console.log('\n逐音节纠音:');
  for (const it of a.items) {
    const mark = it.kind === 'ok' ? '✓' : '✗';
    console.log(`  ${mark} ${it.char || ' '} ${String(it.expected || '—').padEnd(8)} → ${String(it.actual || '(没听到)').padEnd(8)} ${it.label}${it.hint ? ' | ' + it.hint : ''}`);
  }
  console.log('\n统计:', JSON.stringify(a.counts));
  console.log('建议:');
  a.tips.forEach((t) => console.log('  - ' + t));
}
