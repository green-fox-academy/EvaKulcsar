'use strict';

// Hozz létre egy `drinks` változót az alábbi tartalommal:
// `['Gin', 'Whiskey', 'Wine', 'Beer']`
// Duplázd meg a stringeket (szöveges elemeket)!
// Használj beépített metódust a ciklusok helyett!
// Logold ki az eredményt!
// A várt eredmény: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`


const drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];
const drinks2 = ['Gin', 'Whiskey', 'Wine', 'Beer'];
//console.log(drinks.map(drink => drink+drink));

const drinks3 = drinks.map(drink => drink+drink);

console.log(drinks3);
