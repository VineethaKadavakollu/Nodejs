/**
 * @description Create a copy of the file in directory name "destination" with prefix with copy_
 * Print Count no of words in the file.
 * Print count no of lines(\n) or statements(.) in the file.
 * Print the word with highest occurrence in the file with no of count.
 * Count no of files and directory in current node project
 * Print Total memory used to execute program
 */

/**
 * Modules required
 */
const readline = require('readline');
const fs = require('fs');
const { promises: fK } = require('fs');
const proces = require('process')


/**
 * Memory usage to execute the program
 */
console.log(process.memoryUsage())// // Prints the output as an object

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);// IN MegaBytes

/**
 * To print number of files in a directory
 */
const dir = '/';
const getNumFiles = async (dir) => {
  const files = await fK.readdir(dir)
  console.log("No.of Files = "+files.length)
}
getNumFiles(dir)
  
/**
 * Code to return number of lines in the given Text File.
 * @returns No. of lines in the dummy.txt
 */
var file = 'dummy.txt';
var linesCount = 0;
var rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});
rl.on('line', function () {
    linesCount++; // on each linebreak, add +1 to 'linesCount'
});
rl.on('close', function () {
    console.log("Number of Lines: "+linesCount); // print the result when the 'close' event is called
});

/**
 * Reads the text file dummy.txt .
 * Prints the count of Words, Sentences and Most repeated word
 */
fs.readFile(file,'utf8',(err,data)=>{
    if(err)
        console.log("The text file is empty");
    console.log("Number of Words in the given Text file: "+WordCount(data));
    console.log("Number of Sentences: "+Sentences(data));
    console.log("Most Repeated Word in file: "+findMostRepeatedWord(data));
    /**
     * To Create a copy of the file in directory name "destination" with prefix with copy_
     */
fs.writeFile('/users/kadavakollu.vineetha/Desktop/MAIN JS/destination/copy.txt',data,err=>{
    if(err)
      console.log("Something went wrong");})
})
/**
 * Takes the text in the file dummy.txt as input-str
 * @param {*} str 
 * @returns  Number of Words
 */
function WordCount(str) { 
    return str.split(" ").length;
  }

/**
 * Takes the text in the file dummy.txt as input-str
 * @param {*} str 
 * @returns  Number of Sentences
 */
function Sentences(str){
    return str.split(". ").length;
}

/**
 * Takes the text in the file dummy.txt as input-str
 * @param {*} str 
 * @returns  Most Repeated Word
 */
function findMostRepeatedWord(str) 
   { 
     let words = str.match(/\w+/g); // splitting words
     let occurances = {}; 
     for (let word of words) { 
       if (occurances[word]) { 
         occurances[word]++; 
       } 
       else { 
         occurances[word] = 1; 
       } 
     } 
     // Here occurances will give count of each word
     let max = 0; 
     let mostRepeatedWord = ''; 
     for (let word of words) { 
       if (occurances[word] > max) 
       { 
         max = occurances[word];
          mostRepeatedWord = word; 
       } 
     } 
     return mostRepeatedWord; 
   }
 
