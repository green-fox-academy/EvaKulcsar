"use strict"

// Egy bizonyos számú nyuszikánk van és minden nyuszinak két nagy, lapát füle.
// Ki szeretnénk számolni az összes nyuszifül számát rekurzívan
// (ciklusok és szorzás nélkül).

function Bunneis (head) {
    if (head === 0){
        return 0;
    }
    return (Bunneis(head -1) + 2) ;
}
console.log(Bunneis(9));
//vagy

function getEarsSum(n) {
    if ( n === 0) {
        return 0;
    }
    return (2 + getEarsSum(n - 1));
}

console.log(getEarsSum(9));

