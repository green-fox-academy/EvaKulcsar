//Készíts egy tömböt ('TombA') mely tartalmazza a következő értékeket:
// Alma, Avokádó, Áfonya, Durian, Mangó
//Készíts egy új tömböt TombB névvel amely a TombA értékeit tartalmazza!
//Írattasd ki, hogy a TombA tartalmazza-e a Durian-t vagy sem!
//Távolítsd el a Durian-t a TombB-ből!
//Add hozzá a Kivi-t a TombA 4. eleme utánn!
//Hasonlítsd össze TombA és TombB méretét!
//Keresd meg az Avokádó indexét a TombA-ban!
//Keresd meg az Durian indexét a TombB-ban!
//Add hozzá a TombB-hez a Dinnye-t és a Pomelo-t egyszerre!
//Írasd ki a TombA 3. elemét!

const TombA = ["Alma","Avokádó","Áfonya","Durian","Mangó"];
//let TombB= TombA;
const TombB = TombA.slice(1,5);
console.log (TombB);  
//for (let i = 0; i<=TombA.lenth; i++){
//TombB.push(TombA[i]);
//}

console.log ("A TombA tartalmazza-e a Durian-t?");
console.log ( TombA.includes("Durian")? "Igen" : "Nem");

TombB.splice (3,1);
console.log("B tömb:" + TombB);

TombA.splice (4,0,"Kivi");
console.log ("A tömb:" + TombA);
   
//Hasonlítsd össze TombA és TombB méretét!
console.log(
       TombA.lenth < TombB.lenth ? "A TombA nagyobb méretű" : "TombA nagyobb méretű"
);

console.log("Keresd meg az Avokádó indexét a TombA-ban!");
console.log(TombA.indexOf("Avokádó"));

console.log ("Keresd meg az Durian indexét a TombB-ban!");
console.log (TombB.indexOf("Diroan"));

//Add hozzá a TombB-hez a Dinnye-t és a Pomelo-t egyszerre!
TombB.push("Dinnye","Pomelo");
console.log(TombB);
//Írasd ki a TombA 3. elemét!
console.log(TombA[2]);


