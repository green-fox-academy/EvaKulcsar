"use strict"

import {Person} from './Person.js'


//Készíts egy Person class-t az alábbi mezőkkel:

//name: A személy neve.
//age: A személy kora (egész számok)
//gender: A személy neme (male / female)
//És az alábbi függvényekkel:

//introduce(): Kiírja, hogy "Hi, I'm name, a age year old gender."
//getGoal(): Kiírja, hogy "My goal is: Live for the moment!"
//És az alábbi konstruktorokkal:

//Person(name, age, gender)
//Person(): Beállítja a name-et "Jane Doe"-ra, age-et 30-ra és a gender-t "female"-re.


export class Person {
    name ;
    age ;
    gender ;

constructor(name ="Jane Doe" ,age = 30,gender = "female"){
     this.name = name;
     this.age = age;
     this.gender = gender;
}
introduce() {
   
    console.log (`Hi,I'm ${this.name} ,a ${this.age} year old ${this.gender}`);
}

getGoal() {
    console.log ("My goal is: Live for the moment");
}
}
/*
let personIntroduce = new Person();
personIntroduce.introduce();

const personGetGoal = new Person();
personGetGoal.getGoal();

*/



