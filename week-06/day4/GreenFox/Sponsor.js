"use strict"


import {Person} from './Person.js'

//Hozz létre egy Sponsor class-t amelynek megvannak ugyanazon mezői és függvényei mint 
//a Person class-nak, és az alábbiak:

//mezők:
//company: A cég neve.
//hiredStudents: A felvett tanulók száma.
//függvények:
//introduce(): Kiírja, hogy "Hi, I'm name, a age year old gender who represents company and hired hiredStudents students so far."
//hire(): Növeli a hiredStudents-et 1-el.
//getGoal(): Kiírja, hogy "Hire brilliant junior software developers."
//A Sponsor class-nak az alábbi konstruktorjai vannak:

//Sponsor(name, age, gender, company):A beadott paraméterek mellett, beállítja a hiredStudents-et 0-ra.
//Sponsor(): Beállítja a name-et "Jane Doe"-ra, age-et 30-ra és a gender-t "female"-re, a company-t
//"Google"-re és a hiredStudents-et pedig 0-ra.

export class Sponsor extends Person {
    company;
    hiredStudents = 0;

    constructor(name ,age ,gender, company = "Google" ){
        super(name,age,gender);
        this.company = company;
    }

    introduce(){
        console.log (`Hi,I'm ${this.name} ,a ${this.age} year old ${this.gender} 
        who represents ${company} and hirec ${this.hiredStudents} students so far.`);
    }
    hire(){
        this.hiredStudents ++;
    }
    getGoal(){
        console.log ("Hire brilliant junior software developers.");
    }
}