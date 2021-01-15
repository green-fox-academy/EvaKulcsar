'use strict';

//Készíts egy getNameAndBalance() függvényt, amely visszaadja az ügyfél nevét és egyenlegét 
//a bankszámlaszáma alapján a megadott listából:getNameAndBalance(11234543);
//várt eredmény: ['Adam', 203004099.2]
const accounts = [
  { ugyfelNev: 'Adam', szamlaszam: 11234543, egyenleg: 203004099.2 },
  { ugyfelNev: 'Anna', szamlaszam: 43546731, egyenleg: 5204099571.23 },
  { ugyfelNev: 'Attila', szamlaszam: 23456311, egyenleg: 1354100.0 }
]
function getNameAndBalance(szamlaszam) {
  let eredmeny = [];
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].szamlaszam === szamlaszam) {
      eredmeny.push(accounts[i].ugyfelNev);
      eredmeny.push(accounts[i].egyenleg);
    }

  }
  return eredmeny;
}
console.log(getNameAndBalance(11234543));


//transferAmount()
//Készíts egy függvényt, amely átualja a megadott összeget egyik számláról a másikra. 4 paramétert vár:
//egy tömböt (accounts)
//ahonnan utalnak (számlaszám)
//ahová utalnak (számlaszám)
//összeg
//transferAmount(accounts, 43546731, 23456311, 500.0);

function transferAmount(array, szamlaszam1, szamlaszam2, amount) {
  for (let i = 0; i < array.length; i++) {
      if(szamlaszam1 === array[i].szamlaszam){
        array[i].egyenleg -= amount;
        for(let j = 0; j< array.length; j++){
          if(szamlaszam2 === array[j].szamlaszam){
            array[j].egyenleg += amount
          }
        }
      }
  }
}
transferAmount(accounts, 43546731, 23456311, 500.0);
console.log(accounts);

//A program írja ki a képernyőre az alábbi szöveget, ha valamelyik számla nem létezik: 404 - nem létező számla
//Ha a függvény meghívása után kilogoljuk az accounts tömböt, már ebben a formájában kell látnunk:
//const accounts = [
//  { ugyfelNev: 'Adam', szamlaszam: 11234543, egyenleg: 203004099.2 },
//  { ugyfelNev: 'Anna', szamlaszam: 43546731, egyenleg: 5204099571.23 },
//  { ugyfelNev: 'Attila', szamlaszam: 23456311, egyenleg: 1354100.0 }
//]
// használd fel ezt a tömböt:
//const accounts = [
//  { ugyfelNev: 'Adam', szamlaszam: 11234543, egyenleg: 203004099.2 },
//  { ugyfelNev: 'Anna', szamlaszam: 43546731, egyenleg: 5204100071.23 },
//  { ugyfelNev: 'Attila', szamlaszam: 23456311, egyenleg: 1353600.0 }
//];