const {writeFileSync,readFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-sync.txt',
`the final is : ${first} , ${second}`,{flag:'a'}
)
console.log('finish');
console.log('nxt');

// blocking thread