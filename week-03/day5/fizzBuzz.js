'use strict';


// Írj egy programot, ami 1-től 100-ig kiíratja a számokat.
// De a 3 többszörösei esetén a "Fizz" szót írja ki a szám helyett
// és az 5 többszöröseinél pedig a "Buzz" szót írja ki a szám helyett.
// Ha a szám a 3-nak és 5-nek is többszöröse,
// akkor a "FizzBuzz" szót írja ki a szám helyett
/*
for (let i= 0; i<=100; i++){
        console.log(i);
     for (let j = i; j%3==0; j++){
        console.log("Fizz");
     for(let k = i; k%5==0;k++)
        console.log("Buzz");
    }    
}
*/
    /*
    if (i%5==0){
        console.log('Buzz');
    } 
    if (i%3==0 && i%5==0){
        console.log('FizzBuzz');
    }
}
*/

for (let i = 1; i<=100; i++){
     
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if  (i % 3 === 0){
        console.log ("Fizz");
    }
    else if  (i % 5=== 0){
        console.log("Buzz");
    } 
    else{
        console.log(i);
    }
    
}

    