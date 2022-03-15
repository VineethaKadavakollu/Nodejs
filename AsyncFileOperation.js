const fs=require('fs')
fs.writeFile('filetest.txt','Writing data into the file',err=>{
    if(err)
    console.log("Something went wrong");
    else
    console.log('Data Written');
});
fs.appendFile('filetest.txt','\nAppending Data into the file',err=>{
    if(err)
    console.log("Something went wrong");
    else
    console.log('Data Appended');
});
fs.readFile('filetest.txt','utf8',function(err,data){
    if(err)
    console.log("Something went wrong");
    else
    console.log(data);
});