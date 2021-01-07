'use strict';

// Írj egy programot, ami egy ilyen "sakktáblát" rajzol ki:
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

for(let i=0; i<8; i++){
    if(i%2===1){
        console.log (" "+"%".repeat(4));
    }else{
        console.log ("%".repeat(4));
    }
    
}