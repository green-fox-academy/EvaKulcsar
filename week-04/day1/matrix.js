'use strict';
// Hozz létre dinamikusan* egy kétdimenziós tömböt!
// Tartalma az alábbi mátrix** legyen.
// Használj ciklust hozzá!

//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0

// Logold ki a mátrixot a konzolra.
//
// * a mérete egy változóból érkezzen, így téve dinamikussá a mátrix létrehozását
// ** ne ijedj meg a kifejezéstől, egy mátrix: tömbök a tömbben

//const matrix = [];
//const size = 4;
/*
let size = 4;
let matrix = [];
for ( let i = 0; i < size; i++) {
    matrix[i] = [];
    for ( let j = 0; j < size; j++ ) {
    //matrix[i].push(j);
    matrix[i].push( j === (size - i) - 1 ? 1 : 0 );
    }
  console.log( matrix[i] );
}

*/
let matrix = [];

let size = 4;

for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
        if (size -i - 1 === j) {
            matrix[i][j] = 1;
        } else {
            matrix[i][j] = 0;
        }
    }
}

console.log(matrix);





/*
const matrix = [
    [5,8,6],
    [9,6,7],
    [4,8,9],
];

const doubleMatrix = [];

*/
/*
for (let i = 0 ; i<matrix.length; i++){
    let doubleRow= [];
    for (let j = 0; j < matrix[i].length; j++){
        doubleRow.push(matrix[i][j]*2);
    } 
    doubleMatrix.push(doubleRow);
}
console.log (doubleMatrix);
*/
/*
for (let i = 0 ; i<matrix.length; i++){
    doubleMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++){
        doubleMatrix[i][j] = 2* matrix[i][j];
    } 
    
}
console.log (doubleMatrix);
*/