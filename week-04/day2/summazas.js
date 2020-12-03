'use strict';
// - Írj egy `sum` nevű függvényt, ami visszaadja (return) az egész számok
//   összegét nullától a megadott paraméterig


function sum() {
    let sum = 0;
    for (let i = 0; i <= 100 ; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum());






/*
function sum (){
    let sum = 0;
    for (let i = 0 ; i<=100 ; i++ ){
        return sum += parseInt(i);
    }
}

console.log(sum());
*/