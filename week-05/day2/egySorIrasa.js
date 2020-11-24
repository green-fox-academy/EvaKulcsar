// Készíts egy függvényt, ami képes megváltoztatni egy fájl tartalmát
// Írja bele a Te nevedet egy sorban.
// A fájl neve 'my-file-txt' legyen.
// Ha a program nem tud írni a fájlba,
// Írja ki a következő hibaüzenetet: 'Unable to write file: my-file.txt'
'use strict';

const fs = require('fs');

let fileName = my-file-txt;
let myName = "Kulcsár Éva";
function writeFileSync (fileName,myName){
  
   let fileContent = fs.writeFileSync(fileName,myName);
console.log(myFile);
}
writeFileSync('my-file.txt');


//nano --terminálba beírni