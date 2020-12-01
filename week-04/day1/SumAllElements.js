'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Logold ki az elemek összegét a konzolra!

const numbers = [3, 4, 5, 6, 7];
console.log(numbers.reduce((number,nextNumber)=> number+nextNumber));


/*
const list = [1, 2, 3, 4, 5];
console.log(list.reduce((number, nextNumber) => number + nextNumber));
// --> 15
*/