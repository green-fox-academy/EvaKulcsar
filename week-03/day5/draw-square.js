'use strict';

const lineCount = 6;

// Írj egy programot, ami rajzol
// egy ilyen négyzetet:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke

for (let i=1; i<=lineCount ; i++){
    if(i===1 ||i === lineCount){
    console.log ('%'.repeat(lineCount));
    } else {
        console.log('%'+' '.repeat(lineCount-2)+'%')
    }
}
/*
let sum = '%';
for(let i=1; i<=lineCount; i++){
    if(i===1 || i===6){
        console.log('%'.repeat(lineCount));
       
    }else{
        console.log('%'.repeat(lineCount-5)+' '.repeat(lineCount-2)+'%'.repeat(lineCount-5))
    }
}

*/