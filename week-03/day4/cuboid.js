'use strict';

// Írj egy programot, ami egy téglatest 3 oldalát tartalmazza változókban (floats)
// A program írja ki a felületét és térfogatát a testnek ilyen formátumban:
//
// Felület: 600
// Térfogat: 1000

const a = 5;
const b = 7;
const c = 9;

let térfogat = a*b*c;
let felület = 2*(a*b + a*c + b*c);

console.log ('Felület :' + felület);
console.log ('térfogat : ' + térfogat);