// Modules
// const data= require('./6-alternateflavour')

// // require('./7-mind-granade-function')
// console.log(data)


const http = require('http');
const server= http.createServer((req,res)=>{
if(req.url ==='/'){
    res.end('Welcome to homepage')
}

if (req.url ==='/about'){
    res.end('this is the history')
}

res.end(`
<h1>OOPS!</h1>
<p>pls check the request</p>
<a href="/">back home</a>
`)

    
    // res.write();
}
)
server.listen(5000);