//Asszociatív tömbökkel(Map) fogunk játszani. Nyugodtan használj bármilyen beépített függvényt,
// ahol lehetséges.
//Készíts egy üres objektumot, ahol a kulcsok(keys) számok, és az értékek(values) szöveg típusúak (string)!
//Írasd ki hogy az objektum üres-e vagy sem!
//Add hozzá az alábbi kulcs(key) érték(value) párokat az objektumhoz!
//Kulcs (Key)	Érték (Value)
//97	a
//98	b
//99	c
//65	A
//66	B
//67	C
//Írasd ki az összes kulcsot!
//Írasd ki az összes értéket!
//Add hozzá a D értéket az 68-as kulccsal!
//Írasd ki hány kulcs érték pár van az objektumban!
//Írasd ki a 99-es kulcshoz tartozó értéket!
//Töröld ki azt a kulcs-érték párt, ahol a kulcs 97!
//Írasd ki van-e társítva érték a 100-as kulcshoz vagy sem!
//Távolítsd el az összes kulcs érték párt!

/*
const obj = {};

if (Object.keys(obj).length === 0){
    console.log ("objektum üres!");

} else{
    console.log("Az objektum nem üres");
}
*/
const obj = {
    97 : "a",
    98 : "b",
    99 : "c",
    65 : "A",
    66 : "B",
    67 : "C",
};

console.log (Object.keys(obj));
console.log (Object.values(obj));



obj[68] = "D";
console.log(Object.entries(obj).length);

console.log (obj[99]);

for (const[key,value] of Object.entries(obj))
console.log (`${key}:${value}`);


console.log (obj);


console.log();
console.log("Van-e társítva érték a 100-as kulcshoz?");
console.log(obj["100"] === undefined ? "Nincs" : "Van");


for (let key in obj) {
    delete obj[key];
}

console.log();
console.log(obj);

