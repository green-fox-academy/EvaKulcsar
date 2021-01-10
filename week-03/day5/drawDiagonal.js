'use strict';

const lineCount = 6;


// Írj egy programot, ami rajzol
// egy olyan négyzetet, mint ez:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// A négyzetnek annyi sora legyen, mint a lineCount értéke

for (let i=1; i<=lineCount; i++){
    if (i===1 || i===lineCount ){
        console.log('%'.repeat(lineCount))
    }else if ( i===5){
        console.log('%'+' '.repeat(lineCount-2)+"%")
   
    }else{
        console.log('%'+' '.repeat(i-2)+'%'+' '.repeat(lineCount-i-1)+'%');
    }
}
    
