'use strict';
// - Készíts egy `factorio` nevű függvényt, ami visszaadja 
//   a bemeneti paraméter faktoriálisát


function factorio(number) {
    let factorializedNumber = 1;

    if (number < 0) {
        return -1;
    } else {
        for (let i = 1; i <= number; i++) {
            factorializedNumber *= i;
        }
    }

    return factorializedNumber;
}

console.log(factorio(5));