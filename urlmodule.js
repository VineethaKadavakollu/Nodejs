let url = require('url');
let address = 'http://127.0.0.1:8087/index.htm?name=vineetha';
let q = url.parse(address,true);
console.log(q.host); 