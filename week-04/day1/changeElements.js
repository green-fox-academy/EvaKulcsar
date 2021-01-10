'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[1, 2, 3, 8, 5, 6]`
// Változtasd meg a 8-as számot 4-essé a map metódussal
// Logold ki a 4. elemet



const numbers = [1, 2, 3, 8, 5, 6];
let double = numbers.map(number=>{
   if(number===8){
      return number/2;
   } else {
     return number;
   }
});


console.log(double);
console.log(numbers)