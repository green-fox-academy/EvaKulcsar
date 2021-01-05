let size = 4;
let matrix = [];

for (let i=0; i<size; i++){

    matrix[i] = [];
    for(let j = 0; j<size; j++){
        matrix[i].push(j === (size -i)-1?1:0);
    }
    console.log(matrix[i]);

}