'use strict';
// Hozz létre egy `animals` változót az alábbi tartalommal:
// `['koal', 'pand', 'zebr']`
// Minden elemhez fűzz hozzá egy "a" betűt
// Próbálj meg beépített metódust használni ciklus helyett!

const animals = ['koal','pand','zebr'];

const plusA = 'a';
let animals2 = animals.map(animals => animals+plusA);

console.log(animals2);
