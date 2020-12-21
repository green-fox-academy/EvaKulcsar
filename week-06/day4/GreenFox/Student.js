"use strict"

import {Person} from './Person.js'

//Hozz létre egy Student class-t amelynek megvannak ugyanazon mezői és függvényei mint a Person class-nak, 
//és az alábbiak:

//mezők:
//previousOrganization: A tanuló előző munkahelyének/iskolájának a neve.
//skippedDays: A képzésről való hiányzások száma.
//függvények:
//getGoal(): Kiírja, hogy "Be a junior software developer."
//introduce(): Kiírja, hogy "Hi, I'm name, a age year old gender from previousOrganization 
//who skipped skippedDays days from the course already."
//skipDays(numberOfDays): Növeli a skippedDays-t a numberOfDays-el.
//A Student class-nak az alábbi konstruktorjai vannak:

//Student(name, age, gender, previousOrganization): A beadott paraméterek mellett, beállítja a skippedDays-t 0-ra.
//Student(): Beállítja a name-et "Jane Doe"-ra, age-et 30-ra és a gender-t "female"-re, a previousOrganization-t 
//"The School of Life"-ra, a skippedDays-t pedig 0-ra.

export class Student extends Person {
    previousOrganization;
    skippedDays = 0;

    constructor (name, age ,gender, previousOrganization = "The School of Life"){

        super(name,age,gender);
            this. previousOrganization = previousOrganization;
            this. skippedDays = skippedDays;

    }
        
        getGoal() {
            console.log ("Be a junior software developer")
}

        introduce() { 
            console.log (`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} 
            from ${previousOrganization} who skipped ${skippedDays} days from the course already`)
        }
        skipedDays(numberOfDays) {
           this.skipedDays += numberOfDays;
           return this.skippedDays;
        }

}


