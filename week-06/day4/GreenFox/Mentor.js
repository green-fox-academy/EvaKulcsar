"use strict"


import {Person} from './Person.js'

//Hozz létre egy Mentor class-t amelynek megvannak ugyanazon mezői és függvényei mint a Person class-nak, 
//és az alábbiak:

//mezők:
//level: A mentor szintje (junior / intermediate / senior).
//függvények:
//getGoal(): Kiírja, hogy "Educate brilliant junior software developers."
//introduce(): Kiírja, hogy "Hi, I'm name, a age year old gender level mentor."
//A Mentor class-nak az alábbi konstruktorjai vannak:

//Mentor(name, age, gender, level)
//Mentor(): Beállítja a name-et "Jane Doe"-ra, age-et 30-ra és a gender-t "female"-re és a 
//level-t pedig "intermediate"-re.

class Mentor extends Person {

    level;

    constructor (name, age, gender, level = "intermediate"){
        
        super(name,age,gender);
            this.level = level;
    }

    getGoal(){
        console.log ("Educate brilliant junior software developers.")        
    }
    introduce(){
        console.log (`Hi,I'm ${this.name} ,a ${this.age} year old ${this.gender} ${this.level} mentor.` )
    }

}