"use strict"

// A nyuszikáink egy sorban állnak megszámozva 1, 2, 3, 4, ...
// A páratlan nyusziknak (1, 3, ...) 2 fülük van.
// A páros nyusziknak (2, 4, ..) most 3 fülük van, mert
// mindegyik felemeli az egyik lábát is.
// Rekurzívan térj vissza a sorban álló nyuszik
// füleinek számával 1, 2, ... n (ciklusok és szorzás nélkül).

//head =4   1234 = 1,3 = 4fül 2,4=6 fül

function bunnyEarCounter (num, ears) {
    if (num < 1) return num;
    if (num % 2 === 0) {
        ears = 3;
    } else {
        ears = 2;
    }
    num--;
    return ears + bunnyEarCounter(num, ears)
}

console.log(bunnyEarCounter(4));
