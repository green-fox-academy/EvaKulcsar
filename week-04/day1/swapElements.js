'use strict';

// Hozz létre egy `names` változót az alábbi tartalommal:
// `["Arthur", "Boe", "Chloe"]`
// Cseréld fel a names első és harmadik elemét!
// Logold ki az eredményt a konzolra!
/*

const names = ["Arthur", "Boe", "Chloe"];

const first =names.shift();
const second = names.pop();

names.push(first);
names.unshift(second);



console.log(names);

*/


const names = ["Arthur", "Boe", "Chloe"];
 names.shift();
 names.pop();
 names.unshift("Chloe");
 names.push("Arthur");
 
 console.log(names);
