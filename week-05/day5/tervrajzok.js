'use strict';

/*
function Termek(name,price,isInStock) {
    this.name = name;
    this.price = price;
    this.isInStock = isInStock;
//nincs return helyett new operator
//metodokat futási időben lehet rácsatlakoztatni prototype kulcs révén.Ezzel a tervr-ra fűzök fel funkcionitást.
}
Termek.prototype.applyDiscount = function (discount){
    this.price = this.price * discount;
}

Termek.prototype.getMessage = function(){
    console.log( `A termék neve: ${this.name}, ára: ${this.price} és
    ${this.isInStock ? 'van készleten': 'nincs készleten'}`)
}
//példányosítás,instantiation
//new termek('kasza',2700,true),
var termekek = [
    
    new Termek('Kasza',23000,false),
    new Termek('Traktor',23000000,true),
    new Termek('Lapát',5000,true),
    new Termek('Hólapát',2700,true),
    new Termek('futóbicikle',10000,true),
];

for(var termek of termekek) {
    console.log(termek.getMessage());

}

*/

class Termek_{

    quantity = 10
    constructor(name,price,isInStock){
        this.name = name;
        this.price = price;
        this.isInStock = isInStock;

    }

    applyDiscount(discount){
        this.price = this.price * discount;
    }

    getMessage(){
        console.log(
            `A termék neve: ${this.name}, ára: ${this.price} és 
            ${this.isInStock ? "van készlen" : "nincs készleten" }`,
        )
    }
}
var termek2 = new Termek_("Ásó",4300,false);

termek2.applyDiscount(2);


console.log(termek2.getMessage());