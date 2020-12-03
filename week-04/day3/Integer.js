//  Hozz létre egy függvény, ami kap egy számot és egy számokból álló tömböt
//  paraméterekként Majd visszadja azoknak a számoknak az indexét a tömbből,
//  ahol a elsőként kapott számjegy megtalálható a számban. Ha az elsőként
//  kapott számjegy nem található meg egyik számban sem, adjon vissza egy üres
//  tömböt
/*
// Példa
console.log(subint(1, [1, 11, 34, 52, 61]));
// ezt kéne kiírnia: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// ezt kéne kiírnia: '[]'

module.exports = subint;
*/
const number = 2;
const array =(2,[1,3,4,22,26,40]) ;

function find (number,array){
    let newNumbers = [];

    if (number===2){
        return newNumbers.push
    }
         for (i = 0; i <= array.length; i++){
            let hasNumber = array[i].includes(number);
            if (hasNumber){
                newNumbers.push(i);
            }
            return  newNumbers;
         }
         
         console.log (newNumbers);
    
        
        }
            

 /*   
 console.log (find(newNumbers));   */
/*
function subint(number, array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let hasNumber = array[i].toString().includes(number);

        if (hasNumber) {
            result.push(i);
        }
    }

    return result;
}
*/
