'use strict';
/*
Hozz létre egy "reverse()" függvényt, ami megfordítja a szöveget, amit paraméterként beadunk neki
Használd a megadott próbamondaton!
Várt eredmény: "If the meanings of true and false were switched, this sentence wouldn't be false."
*/

const toBeReversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna\
  eurt fo sgninaem eht fI";
  
  function reverse (toBeReversed){
      let reverse = toBeReversed.split("").reverse().join("");

      return reverse;
  }
console.log(reverse(toBeReversed));


