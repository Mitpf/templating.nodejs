const http = require('http');
const { loadFile } = require('./util.js');

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url == '/' || req.url == '/catalog' || req.url == '/home') {
        const homePageTemplate = await loadFile('./src/views/homePage.html');
        res.end(homePageTemplate)
    }
    if (req.url == '/src/content/styles/styles.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        const css = await loadFile('./src/content/styles/styles.css');
        res.end(css)
    }

});


server.listen('5001');
console.log(`server is starting on port 5001 open here ${'http://localhost:5001/'} `)