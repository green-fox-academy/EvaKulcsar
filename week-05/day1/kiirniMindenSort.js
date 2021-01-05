'use strict';

//Irj egy programot, ami megnyit egy 'my-file.txt' nevű fájlt
// majd kiír minden sort a fájlból.
// Ha a program nem tud olvasni a fájlból (pl.: mert nem létezik),
// akkor írja ki, hogy: 'Unable to read file: my-file.txt'



const fs = require('fs');

const myFile = fs.readFileSync('my-file.txt')
console.log (myFile.toString());



function printmyFile(fileName){
    try{
         const myFile = fs.readFileSync('my-files.txt');
            console.log (myFile.toString());
        }
    catch (err){
        console.log('unable to read file:my-file.txt');
    }
   
}

//printmyFile('my-files.txt');

function printmyFile(fileName){
    try {
        const myFile = fs.readFileSync(fileName);
        console.log(myFile);
    }
    catch( err ) {
        console.log ('Unable to read file: my-file.txt');
    }
}
  
printmyFile('mydog.txt');