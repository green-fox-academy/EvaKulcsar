'use strict';
//Készíts egy Animal osztályt
//Minden állatnak van egy hunger (éhség) értéke, ami egy egész szám
//Minden állatnak van egy thirst (szomjúság) értéke, ami egy egész szám
//Amikor létrehozol egy új állat példányt, ezeknek az értékei alapból legyenek 50
//Minden állat tud enni (eat()), ami csökkenti az éhségét eggyel
//Minden állat tud inni (drink()), ami csökkenti a szomjúságát eggyel
//Minden állat tud játszani (play()), ami mindkét értéket növeli eggyel


class Animal {
    species;
    hunger = 50;
    thirst = 50;
  
    constructor (species){
        this.species = species;
    }

    eat(){

        this.hunger--;
    }
    
    drink(){

       this.thirst--;
    }

    play(){

        this.hunger++ && this.thirst++;

    }
}

const animals = [
    new Animal('Dog'),
    new Animal('Cat'),
    new Animal('Duck'),

]

animals.forEach((animal, i) => animal.eat());
animals.forEach((animal, i) => animal.drink());
animals.forEach((animal, i) => animal.play());
//animals.eat();
//animals.drink();
//animals.play();

console.log(animals);

