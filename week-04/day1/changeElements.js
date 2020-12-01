'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[1, 2, 3, 8, 5, 6]`
// Változtasd meg a 8-as számot 4-essé a map metódussal
// Logold ki a 4. elemet

const numbers = [1, 2, 3, 8, 5, 6];

let change = numbers.map(number => number/2)
console.log(change);
let fourth = numbers[4];
console.log(fourth);

/*let numbers = [1, 2, 3, 4, 5];
let doubles = numbers.map(number => number * 2)
console.log(doubles)
// --> [ 2, 4, 6, 8, 10 ]
*/