'use strict';
/*
Element finder
Írj egy függvényt, amely ellenőrzi, hogy a lista tartalmazza-e a "7"-et
Ha igen, térjen vissza azzal, hogy "Hoorray", ha nem, akkor pedig azzal, hogy "Nooooo"!
Várt eredmény: "Noooooo"
Csináld meg mégegyszer más megoldással, más listát használva.
const numbers = [1, 2, 3, 4, 5, 6, 8];
console.log(containsSeven(numbers));
*/
const numbers = [1, 2, 3, 4, 5, 6, 8];
function containsSeven(numbers) {
    if (numbers.find(number => number === 7)) {
        return "Hoorray";
    } else {
        return "Nooooo";
    }
}

console.log(containsSeven(numbers));