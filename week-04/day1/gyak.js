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
for(let i=1; i<=lineCount-3; i++ ){
    console.log(' '.repeat(lineCount-i-2)+'*'.repeat(i*2-1));
}
for(let j=0; j<lineCount-4;j++ ){
    console.log(' '.repeat(j+lineCount-5)+'*'.repeat(lineCount-j*2-2));
}
