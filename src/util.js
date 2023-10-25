const url = require('url');
const fsp = require('fs/promises');

//it is async function, use with await!
function loadFile(path) {
    return fsp.readFile(path, { encoding: 'utf-8' })
}











module.exports = { loadFile }