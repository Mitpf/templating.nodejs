const http = require('http');

const server = http.createServer((req, res )=> {
    
    res.end('hello')
});


server.listen('5001');
console.log(`server is starting on port 5001 open here ${'http://localhost:5001/'} `)