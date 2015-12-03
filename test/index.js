const co = require('co');
const fs = require('fs');
const open = require('open');
const path = require('path');
const render = require('../lib');

const input = require('./input.json');

co(function * () {
  try {
    const output = yield render(input);
    const testFilename = path.resolve(__dirname, './test.pdf');
    fs.writeFileSync(testFilename, output);
    open(testFilename);
  }
  catch (error) { console.error(error); }
});
