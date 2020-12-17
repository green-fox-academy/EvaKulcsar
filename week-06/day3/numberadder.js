"use strict";

// Írj egy rekurzív függvényt, ami egy paramétert kér: n és
// összeadja a számokat 1-től n-ig.

const Recursive = n =>{
    if(n === 1){
        return 1;
    } else {
        return n+Recursive(n-1);
    }
};


console.log (Recursive(5));