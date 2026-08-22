const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(process.argv[2]);
const errors = [];
const jsonFiles = [];
const jsFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.gwxapkg') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.json')) jsonFiles.push(full);
    else if (entry.name.endsWith('.js')) jsFiles.push(full);
  }
}

function existsStem(stem, extensions, label) {
  for (const extension of extensions) {
    if (!fs.existsSync(stem + extension)) errors.push(`${label}: ${path.relative(root, stem + extension)}`);
  }
}

const app = JSON.parse(fs.readFileSync(path.join(root, 'app.json'), 'utf8'));
const routes = [...(app.pages || [])];
for (const sub of app.subPackages || app.subpackages || []) {
  for (const page of sub.pages || []) routes.push(path.posix.join(sub.root, page));
}
for (const route of routes) {
  existsStem(path.join(root, ...route.split('/')), ['.js', '.wxml'], 'missing route file');
}

walk(root);
for (const file of jsonFiles) {
  let config;
  try {
    config = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    errors.push(`invalid JSON: ${path.relative(root, file)}: ${error.message}`);
    continue;
  }
  for (const target of Object.values(config.usingComponents || {})) {
    if (typeof target !== 'string' || /^(plugin|wx):\/\//.test(target)) continue;
    const stem = target.startsWith('/')
      ? path.join(root, ...target.slice(1).split('/'))
      : path.resolve(path.dirname(file), ...target.split('/'));
    existsStem(stem, ['.js', '.json', '.wxml'], `missing component for ${path.relative(root, file)}`);
  }
}

for (const file of jsFiles) {
  try {
    new vm.Script(fs.readFileSync(file, 'utf8'), { filename: file });
  } catch (error) {
    errors.push(`invalid JS: ${path.relative(root, file)}: ${error.message}`);
  }
}

console.log(JSON.stringify({ routes: routes.length, jsonFiles: jsonFiles.length, jsFiles: jsFiles.length, errors }, null, 2));
process.exitCode = errors.length ? 1 : 0;
