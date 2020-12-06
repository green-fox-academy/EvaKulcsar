//Készíts egy Animal osztályt
//Minden állatnak van egy hunger (éhség) értéke, ami egy egész szám
//Minden állatnak van egy thirst (szomjúság) értéke, ami egy egész szám
//Amikor létrehozol egy új állat példányt, ezeknek az értékei alapból legyenek 50
//Minden állat tud enni (eat()), ami csökkenti az éhségét eggyel
//Minden állat tud inni (drink()), ami csökkenti a szomjúságát eggyel
//Minden állat tud játszani (play()), ami mindkét értéket növeli eggyel


class Animal {
    species;
    hunger;
    thirst;
  
    constructor (species,hunger=50,thirst=50){
        this.species = species;
        this.hunger = hunger;
        this.thirst = thirst;
    }

    eat(){

       this.hunger--;
    }
    
    drink(){

        this.thirst--;
    }

    play(){

        this.hunger++;
        this.thirst++;

    }
}

const animals = new Animal ("dog");
const animals2 = new Animal ("cat");



animals.eat();
animals2.eat();
  
console.log (animals);
console.log (animals2);

animals.drink();
animals2.drink();

console.log (animals);
console.log (animals2);

animals.play();
animals2.play();

console.log (animals);
console.log (animals2);

