'use strict';

// A palindróma egy olyan szó, mondat, szám vagy karaktersorozat, ami visszafelé olvasva is ugyanaz.
//  Mint az apa, a tettet vagy a görög. 

// Készíts egy createPalindrome nevű függvényt, kövesd az eddig használt nyelvi stílus útmutatót. 
// A függvények bemeneten fogad egy stringet, készít belőle egy palindrómát és visszaadja azt.
// Példák
// bemenet       	 kimenet
//  ""              	 ""
// "greenfox" 	"greenfoxxofneerg"
// "123"        	"123321"

let str = 'greenfox';

function createPalindrome( inputString ) {
    let splittedStr = inputString.split('').;
    let array = Array(splittedStr.length);

    for( let i = 0; i < splittedStr.length; i++) {
        array[i] = splittedStr[(splittedStr.length - 1) - i];
    }
    return inputString + array.join('');
};

console.log(createPalindrome(str));
