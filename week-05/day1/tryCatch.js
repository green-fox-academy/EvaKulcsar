'use strict';

function susdMegARantottat(){
    console.log("Önts olajata a serpenyőbe");
    console.log("Adj hozzá 3 tojást");
    adjHozzaFuszereket();
    console.log("Süsd 4 percig");
    console.log("Kész");
}

function adjHozzaFuszereket(){
    console.log("Adj hozzá sót");
    console.log("Adj hozzá borsot");
    setTimeout(Function () {
        console.log ("Később hajtódik végre");
    }, 0);
    console.log("Adj hozzá paprikát");
}

console.log("Első sor kódami végrehajtódik");
susdMegARantottat();
console.log("script lefutott");