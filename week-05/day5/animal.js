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
    hasEnoughhunger() {
        return this.hunger>0;
    }
    

    drink(){

        this.thirst--;
    }

    play(){

        this.hunger++;
        this.thirst++;

    }
}

const animalspeciesdog = new Animal ("dog");
const animalspediescat = new Animal ("cat");

console.log (animalspeciesdog);
console.log (animalspediescat);

animalspeciesdog.eat();
animalspediescat.eat();
animalspeciesdog.play();
animalspediescat.play();
  
