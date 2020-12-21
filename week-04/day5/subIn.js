"use strict";

//  Hozz létre egy függvényt, ami kap egy számot és egy számokból álló tömböt
//  paraméterekként, majd visszaadja azoknak a számoknak az indexét a tömbből,
//  ahol az elsőként kapott számjegy megtalálható a számban. Ha az elsőként
//  kapott számjegy nem található meg egyik számban sem, adjon vissza egy üres
//  tömböt

// Példa
console.log(subint(1, [1, 11, 34, 52, 61]));
// ezt kéne kiírnia: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// ezt kéne kiírnia: '[]'

module.exports = subint;

function subint(number, array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let hasNumber = array[i].toString().includes(number);

        if (hasNumber) {
            result.push(i);
        }
    }

    return result;
}
