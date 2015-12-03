#!/usr/bin/env node

const co = require('co');
const getStdin = require('get-stdin');
const render = require('../lib');

co(function * () {
  try {
    const input = JSON.parse(yield getStdin());
    const output = yield render(input);
    process.stdout.write(output);
  }
  catch (error) {
    console.error(error.stack);
    process.exit(1);
  }
});
