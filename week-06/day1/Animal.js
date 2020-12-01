'use strict';

//Készíts egy Animal osztályt
//Minden állatnak van egy hunger (éhség) értéke, ami egy egész szám
//Minden állatnak van egy thirst (szomjúság) értéke, ami egy egész szám
//Amikor létrehozol egy új állat példányt, ezeknek az értékei alapból legyenek 50
//Minden állat tud enni (eat()), ami csökkenti az éhségét eggyel
//Minden állat tud inni (drink()), ami csökkenti a szomjúságát eggyel
//Minden állat tud játszani (play()), ami mindkét értéket növeli eggyel

class Animal {

    hunger = 50;
    thirst = 50;

    constructor (hunger,thirst){
        this.hunger = hunger;
        this.thirst = thirst;
}
        eat(){ 
            console.log(this.hunger--);
}

        drink(){
            (this.thirst--);
}
        play(){
            (this.hunger++);
            (this.thirst++);
}

}
const Animal = [
  new dog
  new  cat
  new  Duck
  new  Horse
  new  Cock
]

console.log(dog);

dog.eat();