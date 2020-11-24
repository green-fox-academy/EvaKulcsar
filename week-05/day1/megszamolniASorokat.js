// Írj egy függvényt, ami fogad egy fájlnevet stringként,
// majd visszadja a fájlban található sorok számát.
// Ha nem tudja megnyitni a fájlt adjon vissza nullát és
// ne jelezzen semmilyen hibát.

'use Strict';


let fileName = 'my-file.txt';
function countMyFile (fileName){
    const fs = require("fs");
    try{
       let myfile = fs.readFileSync(fileName);
        myfile = myfile.toString();

        const myfileRows = myfile.split('\n');

        return myfileRows.length;  
    }
    catch ( err ){
        return '0' ;
    }
       
}
countMyFile ('my-file.txt');