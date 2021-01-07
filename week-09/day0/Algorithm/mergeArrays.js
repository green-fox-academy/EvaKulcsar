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

const fruits = ["apple", "pear", "banana", "orange"];
const animals = ["dog", "cat"];

//let newarray = array_merge(fruits,animals);
//console.log(newarray);
//function mergeElements(fruits,animals) {
    const fruitsAnimals = fruits.map(x=>x);
   
//}
console.log(fruitsAnimals);
//consol.log = mergeElements(fruits,animals);
//}

//onst animalsFruits = [...fruits, ...animals];
//console.log ($fruitsanimalsFruits);

