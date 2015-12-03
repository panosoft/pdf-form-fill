# PDF Form Fill

Render filled PDF forms.

## Installation

```sh
npm install @panosoft/pdf-form-fill
```

## Usage

```js
const co = require('co');
const fill = require('@panosoft/pdf-form-fill');
const fs = require('fs');

co(function * () {
  const input = {
    formFile: fs.readFileSync('path/to/form.pdf', 'base64'),
    formData: {
      field1: 'value1'
    }
  };
  const output = yield fill(input); //=> Filled PDF Buffer
  fs.writeFileSync('output.pdf', output);
});
```

## API

- [`render`](#render)

---

<a name="render"/>
#### render ( input )

Render a filled PDF form from a blank PDF form and a set of field values.

Returns a `Promise` that is fulfilled with the filled PDF form `Buffer`.

__Arguments__

- `input` - An object.

  - `formFile` - A base64 encoded string that represents the PDF form to fill.

  - `formData` - An object containing key value pairs where the key is a field name, and the value is the field value.
