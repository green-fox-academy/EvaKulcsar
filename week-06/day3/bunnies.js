// Egy bizonyos számú nyuszikánk van és minden nyuszinak két nagy, lapát füle.
// Ki szeretnénk számolni az összes nyuszifül számát rekurzívan
// (ciklusok és szorzás nélkül).

function Bunneis (head) {
    if (head === 1){
        return 2;
    }
    return Bunneis (head -1) + 2 ;
}
console.log(Bunneis(3));