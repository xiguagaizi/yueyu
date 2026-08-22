const fs = require('fs');
const path = require('path');

const sourceRoot = path.resolve(process.argv[2]);
const outputRoot = path.resolve(process.argv[3]);
const packageRoot = path.join(sourceRoot, 'pages', 'checkin');
const files = fs.readdirSync(packageRoot)
  .filter((name) => name.endsWith('.appservice.js'))
  .map((name) => path.join(packageRoot, name));

const modules = new Map();
const pattern = /define\("([^"]+\.js)", function\([^)]*\) \{\r?\n([\s\S]*?)\r?\n\}, \{\r?\n\s*isPage:/g;

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  for (const match of source.matchAll(pattern)) {
    if (match[1].startsWith('pages/checkin/')) modules.set(match[1], match[2] + '\n');
  }
}

for (const [name, source] of modules) {
  const target = path.join(outputRoot, ...name.split('/'));
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, source, 'utf8');
}

console.log(JSON.stringify({ extracted: modules.size, files: [...modules.keys()].sort() }, null, 2));
