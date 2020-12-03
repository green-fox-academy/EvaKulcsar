'use strict';
// - Hozz létre egy `typo` nevű változót, legyen az értéke `Csincsill`
// - Írj egy `appendAFunc` nevű függvényt, ami kap egy string paramétert és
//   hozzácsatol egy 'a' karaktert a string végéhez, majd visszatér az így
//   kapott teljes stringel
// - Írd ki az `appendAFunc(typo)` eredményét  a konzolra

/*
let typo = "Csincsill";
const newAnimal = "a";
function appendAFunc(){
   return typo + newAnimal;
};

console.log(appendAFunc(typo));
*/
let typo = 'Csincsill';
let appendAFunc = (str) => {
    let newStr = str += 'a';
    return newStr;
};

console.log( appendAFunc(typo) );