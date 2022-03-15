const path=require('path')
const pathtofile='/users/vineetha/demo.txt';
console.log(path.dirname(pathtofile));///users/vineetha
console.log(path.basename(pathtofile)); //demo.txt
console.log(path.extname(pathtofile));//.txt