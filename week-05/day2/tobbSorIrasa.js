// Készíts egy függvényt, ami 3 paramétert vár: egy elérési utat, egy szót
// és egy számot. Tudjon írni fájlba.
// Az elérési út legyen egy string, ami leírja az írandó fájl helyét.
// A szó szintén legyen string és kerüljön be a fájlba egyenként külön sorba.
// A szám paraméter jelöli, hogy hány sora legyen a fájnak.
// Ha a szó 'alma' és a szám 5, akkor 5 sort írjon a fájlba
// és minden sorban az legyen írva: 'alma'.
// Ha a függvény nem tud írni a fájlba, ne dobjon semmilyen hibaüzenetet.

'use strict';

let path = 'alma.txt';
let word = 'alma';
let number = 5;
function threeValue (path,word,number){
    const fs = require('fs');
    let fileContent;
    try{
        for(let i = 0; i<number; i++){
            fileContent = fs.appendFileSync(path, word + '\n');
        }
        return fileContent;
    }
    catch (err) {
        return '';
    }

}
threeValue(alma.txt);