'use string';
/*

//Készíts egy üres tömböt, ami szövegeket tartalmaz!
let arr = [];
console.log ("Tömb elemeinek száma:",arr.length);

//Írasd ki a tömb elemeinek a számát!
arr.push("Williem");
//Add hozzá Williemet a tömbhöz!
//Írasd ki, hogy a tömb üres-e vagy sem!

if (arr.length){
    console.log("A tömb nem üres");
} else {
    console.log("A tömb üres!");
}
console.log(arr);
//Add hozzá Johnt a tömbhöz!
arr.push("Johnt");
//Add hozzá Amandát a tömbhöz!
arr.push("Amanda");
//Írasd ki a tömb elemeinek a számát!
console.log("A tömb elemeinek a száma:",arr.length);
//Írasd ki a tömb harmadik elemét!
console.log("A tömb harmadik eleme:",arr[2]);
//Iterálj végig a tömbön, és írasd ki az összes nevet!
//William
//John
//Amanda
console.log("A tömb elemei:");
arr.map((element)=> console.log(element));
//Töröld a második elemet a tömbből!
arr.spilce(1,1);
arr.map((element)=> console.log(element));
//Iterálj végig a tömbön fordított sorrendben, és írasd ki az összes nevet!
//Amanda
//William
//Távolítsd el a lista összes elemét!

*/


let stringVar1 = 'szoveg';  // nem lehet több soros
let stringVar2 = "szoveg";  // nem lehet több soros
let stringVar3 = `első sor
második sor
harmadik sor`;
let stringVar4 = `% ${ stringVar1 } %`  // template literal: ${ <JS_EXPRESSION> }, csak `-ek között működik
let stringVar5 = `% ${ typeof stringVar1 === 'string' ? 'jeee' : ':(' } %`

console.log( 'stringVar1 =', stringVar1 );
console.log( 'stringVar2 =', stringVar2 );
console.log( 'stringVar3 =', stringVar3 );
console.log( 'stringVar4 =', stringVar4 );
console.log( 'stringVar5 =', stringVar5 );
console.log(); // üres sor