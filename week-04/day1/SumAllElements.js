'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Logold ki az elemek összegét a konzolra!



const numbers = [3, 4, 5, 6, 7];

let total = 0;

for (let i = 0; i<numbers.length; i++){
    total += numbers[i];
};

console.log (total);


const list = [3, 4, 5, 6, 7];
console.log(list.reduce((number, nextNumber) => number + nextNumber));

let numbers2 = [3, 4, 5, 6, 7];
let sum2 = 0;
numbers2.forEach( number => sum2 += number );
console.log( sum2 );
