'use strict';

//Készíts egy searchPalindrome nevű függvényt, ami követi a jelenlegi nyelv stílus útmutatóját. 
//Bemeneten fogad egy stringet. Majd kikeresi, hogy taláhatóak-e 3 karakternél hoszabb palindrómák benne és 
//végül visszaküldi a talált palindrómák listáját.

//Példák
//bemenet	kimenet
//"dog goat dad duck doodle never"	["og go", "g g", " dad ", "dad", "d d", "dood", "eve"]
//"apple"	[]
//"racecar"	["racecar", "aceca", "cec"]
//""	[]
/*

const str = "dog goat dad duck doodle never";

function searchPalindrome(searchstr) {
    let splittedstr = searchstr.split(" ");
    let array = splittedstr.filter(splittedstr =>splittedstr.length>3); 

    for (i=0; i<splittedstr.length; i++){
        array[i] = 
    }
    
}
*/