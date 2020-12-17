// Adott egy nem negatív egész szám n,
// térj vissza a számjegyei összegével rekurzívan
// (ciklusok nélkül).
//
// Tipp:
//
// A 10-zel való osztásnál (% = maradékos osztást használva)
// a maradékot kapod
// (pl.: 126 % 10 = 6)
//
// A 10-zel való osztásnál (/) maradék nélküli eredményt kapsz
// (pl.: 126 / 10 = 12).

function number(n){
   
    if (n===0) {
        return 0;
    }
    //console.log(n/10);
    return (n % 10) + number (Math.floor(n/10));
}

console.log(number(35));