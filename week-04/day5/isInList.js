'use strict';

/*
Is in list
Nézd meg, hogy a lista tartalmazza-e a következő elemeket: 4, 8, 12, 16
Készíts egy függvényt, ami bemeneti paraméterként egy listát vár$
Térjen vissza "true"-val, ha tartalmazza a lista minden elemét, és "false"-al ha nem.
let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(checkNums(listOfNumbers));
*/
let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
function checkNums(list) {

    if (list.includes(4) && list.includes(8) && list.includes(12) && list.includes(16)) {
        return true;
    }else {
        return false;
    }
}
console.log(checkNums(listOfNumbers));