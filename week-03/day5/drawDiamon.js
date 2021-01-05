'use strict';

const lineCount = 7;


// Írj egy programot, ami rajzol egy
// olyan rombuszt, mint ez:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// A rombusznak annyi sora legyen, mint a lineCount értéke


console.log('For Diamond:')
for (let i = 1; i <= lineCount / 2 + 1; i++) {
    console.log(' '.repeat(lineCount - i) + '*'.repeat(i * 2 - 1))
}
for (let i = Math.round(lineCount / 2 - 1); i >= 1; i--) {
    console.log(' '.repeat(lineCount - i) + '*'.repeat(i * 2 - 1))
}


console.log('While Diamond:')
let i = 1;
while (i <= lineCount / 2 + 1) {
    console.log(' '.repeat(lineCount - i) + '*'.repeat(i * 2 - 1));
    i++;
}

let j = Math.round(lineCount / 2 - 1);
while (j >= 1) {
    console.log(' '.repeat(lineCount - j) + '*'.repeat(j * 2 - 1));
    j--;
}