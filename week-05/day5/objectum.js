"use strict";

console.log(
    [
        {
            brand:'Apple',
            name:'Iphone x',
            price:'250000',
            provider:{
                country:'HU',
                name:'Vodafone',
            }
        },

        {
            brand:'Huawei',
            name:'10',
            price:'150000',
            provider:{
                country:'DE',
                name:'T-Mobile',
            }
        },

        {
            brand:'AZTE',
            name:'Samsung',
            price:'500000',
            provider:{
                country:'EU',
                name:'Vodafone',
            }
        },
    ]/*[0].name */ /*[1].price */ [2].provider.country
)

//1.telefon nevét
//2.telefon árát
//3.telefon szolg.országa

class Dog {

    legs;
    name;
    color;
    numberOfTails;
    friends = [];

    constructor(legs,name,color){
        this.legs = legs;
        this.name = name;
        this.color = color;
        this.numberOfTails = this.numberOfTails;
    }
    bark(){
        console.log( `${this.name} mondja : vau vau` );
    }
    makeFriendship(cat){
            this.friends.push(cat);
    }
}

class Cat{

    name;
    breed;
    food;
    lives = 9;

    constructor (name,breed) {
        this.name = name;
        this.breed = breed;
        this.food = 10;
    }

meow(){
    this.food--;
    console.log('miáú');
}
    hasEnoughFoo(){
        return this.food > 2;
    }
}

const dogs = [
    new Dog (2,'Doge','barna',1),
    new Dog (4, 'Jókutya','fehér', 1),
    new Dog (4, 'Buksi','tarka',1),
    new Dog (6, 'Ingyen sör', 'fekete', 2),
];
const cats = [
    new cat ('cirmi','perzsa'),
    new cat ('Manci','sziámi'),
    new cat ('Lukrácia', 'maine coon'),
    new cat ('Oriza Triznyák', 'házi'),
];

dogs.forEach(dog, i)=>dog.makeFriendship(cats[i]));

dogs.forEach