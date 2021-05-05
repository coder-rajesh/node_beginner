const OS = require('os');

const user = OS.userInfo();
console.log(user);

console.log(`${OS.uptime()}`);
console.log (`${ OS.type()},${OS.version()},${OS.totalmem()},${OS.freemem()}`);