"use strict";
/*
Készíts egy függvényt multiplyMatrixItems néven, ami
bemenetként egy egész számokat tartalmazó mátrixot (kétdimenziós tömb) kap, és
minden, páratlan indexű sorban található páros számot megszoroz 2-vel, és
visszatér a módosított mátrixszal.
Példa bemenet:

1 3 6 2
4 5 6 1
3 3 1 5
9 0 5 2
Példa eredmény:

1  3  6  2
8  5  12 1
3  3  1  5
9  0  5  4
*/

function multiplyMatrixItems(matrix) {
    let copyMatrix = [];
    for (let i=0; i<matrix.length; i++){
        copyMatrix[i] = [...matrix[i]];
        if(i%2 === 1){
            for (let y=0; y<matrix[i].length; y++){
                if (matrix[i][y] %2 === 0){
                    copyMatrix[i][y]*= 2;
                }
            }
       }
    } 
    return copyMatrix;
}

module.exports = multiplyMatrixItems;

