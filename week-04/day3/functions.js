'use strict';

/*
let myFunction = function (p1, p2){
    console.log(p1 * p2);
}
 myFunction(4,5);
*/


/*
function kiir (){
        document.write("szeretem az almát");
}
kiir();
*/

/*
function terület(a,b){
    return a*b;
}

var a = prompt('Add meg a téglalap egyik oldalát');
var b = prompt ('Add meg a téglalap másik oldalát');

*/

/*

let subtract = function (a,b){
   return (a-b);
}
 console.log (subtract(5,3));     
 console.log (subtract(5,-2));   
 
 */

 // kamatszámítás

 /*

 function calcInterest (amount, interestRate, years){
     //if (typeof amount === 'undefined' || typeof interestRate === 'undefined' || typeof years ==='undefined'){
         //return 0;
    // }    
   const interestAmount = amount * (1 + interestRate) ** years -amount;
        return interestAmount;
     
 }
 console.log (calcInterest(100000,0.05,5));

 */

 //IIFE - Immediatly Invoced Function Expression = azonnal meghívodó függvény
/*
 (function printCurrentDay(){
     console.log ('sunday');
 } )();
 */
           // vagy
 /* 
(function printCurrentDay(day){
    console.log(day);
})('wendesday');
*/

//callback függvény tömbmetódusnál találkoztunk vele
[].forEach (/*itt hívom meg a callback függvényt*/);



