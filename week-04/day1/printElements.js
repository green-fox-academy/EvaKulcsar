'use strict';
// Hozz létre egy `numbers` változót az alábbi tartalommal: `[4, 5, 6, 7]`
// Logold ki a konzolra a numbers tömb mindegyik elemét
// *hint: használj ciklust, a console.log(numbers) nem jó megoldás!
// Bónuszpont, hogyha ezt megcsinálod a megfelelő beépített függvénnyel is



const numbers = [4, 5, 6, 7];
//numbers.forEach(function log(numbers){
    //console.log(numbers)
//})

//numbers.forEach(numbers => {console.log(numbers)});

console.log ("1. megoldás");
numbers.forEach(numbers => console.log(numbers));

console.log ("2. megoldás");
for (let i=0; i < numbers.length; i++){
    console.log (numbers[i]);

}

console.log ("3. megoldás");
numbers.map((element)=>console.log(element));