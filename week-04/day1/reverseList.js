'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[3, 4, 5, 6, 7]`
// Fordítsd meg a bejárás sorrendjét, kezdd a végéről!
// - beéptett metódussal
// - egy átmeneti arrayt létrehozva, és egy ciklus segítségével
// Logold ki a konzolra a megfordított numbers tömb mindegyik elemét

const numbers = [3, 4, 5, 6, 7];

numbers.sort((a, b) => b - a);

console.log(numbers);



let numbers2 = [3, 4, 5, 6, 7];

let temporaryArr = [];

for (let i = numbers2.length - 1; i >= 0; i--) {
    temporaryArr.push(numbers2[i]);
}
numbers2 = temporaryArr;

console.log(numbers2);