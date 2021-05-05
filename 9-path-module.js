const path = require('path');

console.log(path.sep);

const filepath = path.join('/content/','Subfolder','test.txt')
console.log(filepath);

const base = path.basename(filepath);

const absolute = path.resolve(__dirname,'content','Subfolder','test.txt')
console.log(absolute)