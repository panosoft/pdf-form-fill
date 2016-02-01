const co = require('co');
const expect = require('chai').expect;
const pdfText = require('pdf-text');
const render = require('../lib');

const pdfToText = pdf => new Promise((resolve, reject) =>
  pdfText(pdf, (error, chunks) => error ? reject(error) : resolve(chunks))
);

describe('pdf-form-fill', () => {
  describe('render', () => {
    it('render form', co.wrap(function * () {
      this.timeout(30000);
      const input = require('./input.json');
      const pdf = yield render(input);
      const text = yield pdfToText(pdf);
      expect(text).to.contain(input.formData.fullName);
    }));
  });
});
