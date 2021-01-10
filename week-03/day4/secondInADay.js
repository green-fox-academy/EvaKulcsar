'use strict';

const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;

// Írj egy programot, ami kiszámítja, hogy hány másodperc
// van még hátra a napból úgy, hogy az aktuális időt a fenti változókkal
// lehet beállítani


let hours =(24*60*60)-(currentHours*60*60);
let minutes=(60*60)-(currentMinutes*60);
let second = (60)-(currentSeconds*60);

let HoMiSe = hours+minutes+second;

console.log(HoMiSe);
