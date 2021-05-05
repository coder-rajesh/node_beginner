// npm local project usage 

// npm i <packg-name>

// npm global proj usage

// npm i -g <pckg-name>

// npm --v

// package.json- store info abt project/package
// npm init (step by step) creates package file
// npm init -y (default )


const h = require('lodash');

const item = [1,[1,2, [3,4]]];
const newitem = h.flattenDeep(item);
console.log(newitem);
