'use strict';

// Hozz létre egy `names` változót az alábbi tartalommal:
// `["Arthur", "Boe", "Chloe"]`
// Cseréld fel a names első és harmadik elemét!
// Logold ki az eredményt a konzolra!

const names = ["Arthur", "Boe", "Chloe"];
 names.shift();
 names.pop();
 names.unshift("Chloe");
 names.push("Arthur");
 
 console.log(names);
