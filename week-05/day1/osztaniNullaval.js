'use strict';

// Készíts egy függvényt, ami kap egy számot,
// majd elosztja ezzel a számmal a tízet és
// kiírja az eredményt.
// Ha a bemeneti paraméter 0, azt írja ki, hogy 'hiba'

function divide(a, b){
    if (b === 0) throw Error('hiba');
    return a / b;
}
console.log (divide(10,0));