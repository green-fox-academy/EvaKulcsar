 /*
 Hozz létre egy függvény, ami kap egy számot és egy számokból álló tömböt
  paraméterekként Majd visszadja azoknak a számoknak az indexét a tömbből,
  ahol a elsőként kapott számjegy megtalálható a számban. Ha az elsőként
  kapott számjegy nem található meg egyik számban sem, adjon vissza egy üres
  tömböt

// Példa
console.log(subint(1, [1, 11, 34, 52, 61]));
 //ezt kéne kiírnia: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// ezt kéne kiírnia: '[]'

module.exports = subint;
*/

lépés stringgé kell alakítanom a tömb elemeit a , az elemhez nem tartozik hozzá,
for ciklus kell hgoy a tömb elemeit végigjárom
kell még egy for ciklus mivel a stirngeket megyek végig a számokon. lenght tulajdonságot lehet használni.
