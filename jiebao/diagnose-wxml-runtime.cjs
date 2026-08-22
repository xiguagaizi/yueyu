const fs = require('fs');
const vm = require('vm');

const source = fs.readFileSync(process.argv[2], 'utf8');
const context = {
  console,
  Date,
  window: { screen: {} },
  navigator: { userAgent: 'iPhone' },
  document: { getElementsByTagName: () => [] },
  define() {},
  require() {},
  noCss: true,
  setCssToHead() { return () => {}; },
};
vm.createContext(context);
try {
  vm.runInContext(source, context, { filename: process.argv[2] });
} catch (error) {
  console.error(error.stack);
}
console.log(Object.keys(context).filter((key) => key.startsWith('$gwx')).sort());
console.log('$gwx types', typeof context.$gwx, typeof context.$gwx_XC_0, typeof context.$gwx_XC_63);
