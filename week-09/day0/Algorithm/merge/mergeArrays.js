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


function mergeElements(...args) {
    const total = [];
    for (let i = 0; i < Math.max(args[0].length, args[1].length) * 2; i++) {
      if (i % 2 && args[1][Math.floor(i / 2)] !== undefined) {
        total.push(args[1][Math.floor(i / 2)]);
      } else if (i % 2 === 0 && args[0][i / 2] !== undefined) {
        total.push(args[0][i / 2]);
      }
    }
    return total;
  }
  
  const fruits = ['kiwi', 'banana', 'raspberry', 'lime'];
  const animal = ['dog', 'cat', 'hippo'];
  
  console.log(mergeElements(fruits, animal));
  
  const merged = mergeElements(
    ['apple', 'pear', 'banana', 'orange'],
    ['dog', 'cat']
  );
  console.log(merged);