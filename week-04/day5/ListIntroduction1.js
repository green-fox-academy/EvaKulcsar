//Tömbökkel fogunk játszani. Nyugodtan használj bármilyen beépített függvényt, ahol lehetséges.

//Készíts egy üres tömböt, ami szövegeket tartalmaz!
//Írasd ki a tömb elemeinek a számát!
//Add hozzá Williemet a tömbhöz!
//Írasd ki, hogy a tömb üres-e vagy sem!
//Add hozzá Johnt a tömbhöz!
//Add hozzá Amandát a tömbhöz!
//Írasd ki a tömb elemeinek a számát!
//Írasd ki a tömb harmadik elemét!
//Iterálj végig a tömbön, és írasd ki az összes nevet!
//William
//John
//Amanda
//Töröld a második elemet a tömbből!
//Iterálj végig a tömbön fordított sorrendben, és írasd ki az összes nevet!
//Amanda
//William
//Távolítsd el a lista összes elemét!

let arr = [];

console.log ("Tömb elemeinek száma : " ,arr.length);

//let name = "Williem";

arr.push("Williem");

console.log (arr);

if (arr.length){
    console.log("A tömb nem üres!");
}else{
    console.log("A tömb üres!");
}

arr.push("John");
arr.push("Amanda");

console.log(arr);

console.log(arr.length);
console.log(arr[2]);

arr.map((element) =>console.log(element));

arr.splice(1,1);
console.log (arr);

for (let i = arr.length; i>=0; i--) {
    console.log(arr[i]);
}


arr.splice(0,2);

console.log (arr);