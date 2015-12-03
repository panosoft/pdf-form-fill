const path = require('path');
const spawn = require('spawn-promise');

const jarPath = path.resolve(__dirname, './pdfFormFill.jar');
/**
 * Render pdf form using pdfFormFill.jar
 *
 * @param {Object} input
 *   { formFile: Base64, formData: Object }
 * @return {Promise}
 *   Fullfilled with pdf:Buffer
 */
const render = (input) => spawn('java', ['-jar', jarPath], JSON.stringify(input));
module.exports = render;
