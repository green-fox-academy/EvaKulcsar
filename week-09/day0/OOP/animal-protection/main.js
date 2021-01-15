"use strict";

import Animal from './Animal.js'; 
import Cat from './Cat.js';
import Dog from './Dog.js';
import Parrot from './Parrot.js'
import AnimalShelter from './AnimalShelter.js'

const buksi = new Animal("Buksi","Thor"); //kinyerni példányisítás Animalből
const animal = new Animal();  
const ownerName = buksi.getOwnername();
//console.log(ownerName);
console.log(buksi.toString());          //buksi is healthy and adoptable
console.log(animal.toString());         //Animal is healthy and adoptable
console.log(String(buksi));              //buksi is healthy and adoptable

const sziamiau = new Cat("Sziamiau","HókuszPók");
console.log(sziamiau);
const scoobyDoo = new Dog("Scooby Doo");
console.log(scoobyDoo);
scoobyDoo.setToSick();
const gyurika = new Parrot("Gyurika","Jack Sparrow");
console.log(gyurika);
const noe = new AnimalShelter();

console.log(animal.toString());

