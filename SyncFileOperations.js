const fs=require('fs')

fs.writeFileSync('file.txt','Writing data into the file');

fs.appendFileSync('file.txt','\nAppending data into the file');

const data=fs.readFileSync('file.txt','utf8');

console.log(data);