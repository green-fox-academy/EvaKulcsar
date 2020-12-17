// Adott a "base" és "n" változó, mindkettő értéke legalább 1 vagy magasabb,
// számold ki rekurzívan (ciklusok nélkül) az értékét:
// base-nek n-re emelve
// Tehát, pl.: powerN(3, 2) az 9 (3 a négyzeten).

function involve (base,n){
    if (n === 0) {
        return 1
    }
    return base * involve(base, n-1);
}

console.log (involve(3,2));