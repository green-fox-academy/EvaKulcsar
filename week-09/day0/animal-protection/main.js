"use strict";

import Animal from './Animal.js'; 
import Cat from './Cat.js';
import Dog from './Dog.js';
import Parrot from './Parrot.js'
import AnimalShelter from './AnimalShelter.js'

const buksi = new Animal("Buksi","Thor"); //kinyerni példányisítás
const animal = new Animal();          
const ownerName = buksi.getOwnername();
const sziamiau = new Cat("Sziamiau","HókuszPók");
const scoobyDoo = new Dog("Scooby Doo");
scoobyDoo.setToSick();
const gyurika = new Parrot("Gyurika","Jack Sparrow");
const noe = new AnimalShelter();
console.log(sziamiau);
console.log(scoobyDoo);
console.log(gyurika);
//console.log(buksi);
console.log(animal.toString());

