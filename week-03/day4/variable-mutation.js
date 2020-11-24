'use strict';

let a = 3;
a +=10;
// Növeld meg az "a" változó értékét 10-zel

console.log(a);

let b = 100;
b -=7;
// Csökkentsd a "b" változó értékeét 7-tel

console.log(b);

let c = 44;
c *=2;
// A c értéke legyen dupla akkora

console.log(c);

let d = 125;
d /=5
// Oszd el a d-t 5-tel

console.log(d);

let e = 8;
e **=3;
// Emeld köbre az e változó értékét

console.log(e);

const f1 = 123;
const f2 = 345;
const f3 = f1 > f2;

console.log (f3);

// Logikai (boolean) értékként írasd ki hogy f1 nagyobb-e f2-nél

const g1 = 350;
const g2 = 200;
const g3 = g2*2 > g1;
console.log (g3);
// Mondja meg a program, hogy g2 duplája nagyobb-e g1-nél (boolean)

const h = 1357988018575474;
let g = h%11 <1;
console.log (g);
// Mondja meg a program, hogy osztható-e 11-el maradék nélkül?
// Írasd is ki logikai (boolean) értékként

const i1 = 10;
const i2 = 3;
const i3 = i1>i2*i2 && i1<i2**1/3;
console.log (i3);
// Mondja meg a program hogy i1 nagyobb-e i2 négyzeténél ÉS ugyanakkor kisebb-e i2 köbénél (boolean)

// Írasd ki, hogy j osztható-e 3-mal vagy 5-tel (boolean)