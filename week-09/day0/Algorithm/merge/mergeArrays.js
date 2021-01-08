'use strict';
//Készíts egy függvényt mergeElements néven, ami
//bemenetként 2 string-eket tartalmazó tömböt / listát kap, és
//összefésüli a két tömböt / listát eggyé, és
//visszatér az új tömbbel / listával.
//Figyelj arra, hogy a tömböket / listákat nem összefűzni (concat) kell, hanem összefésülni (merge)!
//Példa bemenet:
//mergeElements(["apple", "pear", "banana", "orange"], ["dog", "cat"]);
//Példa eredmény:
//["apple", "dog", "pear", "cat", "banana", "orange"]
let fruits = ["apple", "pear", "banana", "orange"];
let animals = ["dog", "cat"];

function mergeElements(fruits,animals) {
    let shorterArray;
    let longerArray;
    if (fruits.length < animals.length) {
        shorterArray = fruits;
        longerArray = animals;
    } else {
        shorterArray = animals;
        longerArray = fruits;
    }
    //return shorterArray;

}

