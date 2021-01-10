'use strict';

let size = 4;
let matrix = [];

for (let i=0; i<size; i++){

    matrix[i] = [];
    for(let j = 0; j<size; j++){
        matrix[i].push(j === (size -i)-1?1:0);
    }
    console.log(matrix[i]);

}
/*
let matrix= [];

let size = 4;

for (let i=0; i< size; i++){
    matrix[i] = [];
    for (let j=0; j<size;j++){
        if(size-i-1===j){
            matrix[i][j] = 1;
        }else {
            matrix[i][j] = 0;
        }
        }
}

console.log(matrix)
*/