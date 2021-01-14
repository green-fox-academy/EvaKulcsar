'use strict';

/*
Candyshop
Véletlenül hozzáadtunk a listához egy "2"-t és egy "false"-ot.
Kérlek javítsd a hibákat!
Javítsd át a "2"-t "Croissant"-ra!
Javítsd át a "false"-ot "Ice cream"-re!
Készíts egy függvényt "sweets()" névvel, ami bemeneti paraméterként egy listát vár, és elvégzi a fenti műveleteket!
Várt eredmény: "Cupcake", "Croissant", "Brownie", "Ice cream"
const candies = ["Cupcake", 2, "Brownie", false];
*/
const candies = ["Cupcake", 2, "Brownie", false];

function sweets(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 2) {
            list[i] = "croissant";
        } if (list[i] === false) {
            list[i] = "Ice cream";
        }
    }
    return list
}
console.log(sweets(candies));