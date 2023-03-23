```javascript
const fs = require('fs');
const _ = require('lodash');

// Define the directory containing your project files
const directory = './src';

// Define the path and filename for the output file
const outputFile = 'unused-keys.txt';

// Load the JSON file to check
const jsonData = JSON.parse(
  fs.readFileSync('./src/assets/translations/en/en.json'),
);

// Get a list of all keys in the JSON object
const allKeys = Object.keys(jsonData);

// Loop through each file under the "src" directory
const usedKeys = [];
const unusedKeys = [];
function processDirectory(dir) {
  fs.readdirSync(dir, {withFileTypes: true}).forEach((dirent) => {
    // console.log('dirent', dirent);
    if (dirent.isDirectory()) {
      processDirectory(`${dir}/${dirent.name}`);
    } else if (dirent.isFile() && /\.(ts|js|jsx|tsx)$/i.test(dirent.name)) {
      const fileContents = fs.readFileSync(`${dir}/${dirent.name}`, 'utf8');
      // const regex = new RegExp(`(${allKeys.join('|')})`, 'g');
      // const matches = fileContents.match(regex);

      for (let i of allKeys.toString().split(',')) {
        if (fileContents.includes(i)) {
          usedKeys.push(i);
        }
      }
    }
  });
}
processDirectory(directory);

// Find all keys that are not used in the project files
const unusedKeySet = new Set(_.difference(allKeys, usedKeys));

const unusedKeysInFiles = Array.from(unusedKeySet).map((key) => `${key}`);

// Write the list of unused keys to the output file
fs.writeFileSync(outputFile, unusedKeysInFiles.concat(unusedKeys).join('\n'));
```
