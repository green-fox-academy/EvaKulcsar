'use strict';
// - Készíts egy `factorio` nevű függvényt, ami visszaadja 
//   a bemeneti paraméter faktoriálisát


let number = 5; 

function factorio(number) {
    let factorioNumber = 1;

    for (let i = 1; i<=number; i++){
      factorioNumber*=i;
    }
    return factorioNumber;
}

console.log (factorio(number));