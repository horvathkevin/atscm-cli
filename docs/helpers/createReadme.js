const { join } = require('path');
const { readFile, writeFile } = require('fs');

readFile(join(__dirname, '../../README.md'), 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading README', readErr.message);
    process.exit(1);
  } else {
    const result = `<!-- WARNING: This file is automatically generated. -->
<!-- Changes will be overwritten. -->
`
      .concat(data.replace(
        new RegExp('https://doc.esdoc.org/github.com/atSCM/atscm-cli/', 'g'),
        './'
      ));

    const path = join(__dirname, '../README.md');

    writeFile(path, result, writeErr => {
      if (writeErr) {
        console.error('Error writing README', readErr.message);
        process.exit(1);
      } else {
        console.log(`Created readme at ${path}`);
      }
    });
  }
});
