'use strict'

//Készíts egy Counter osztályt
//Legyen egy number tulajdonsága
//Példányosításkor tudjuk ezt az értéket megadni, de ha nem adunk meg, akkor az alapérték legyen 0
//Tudjunk hozzáadni (add(number)), ami megnöveli a számláló értékét a paraméterül kapott számmal
//Vagy tudjunk hozzáadni (add()) paraméter nélkül is, ami megnöveli eggyel a számláló értékét
//Tudjuk kiolvasni az aktuális értéket a get() metódussal
//Végül tudjuk beállítani a kezdeti értéket a reset() metódussal
//Használj export Counter-t a file-od végén
//Próbáld ki, hogy minden teszt jól működik-e
//Töltsd le a counter.test.js file-t, és helyezd a megoldásod mellé
//A root mappádból futtasd a npm install tape @types/tape --save-dev parancsot (ahol már van egy package-lock.json file-od)
//Futtasd a tesztfile-t a node counter.test.hu.js paranccsal

class Counter {
    number;
    startnumber = 0;

    constructor(number=0){
            this.number = number;
            this.strartnumber = number;

    }

    add(number=1){
        this.number +=number;
    }
    get(){
        return this.number;
    }
    reset(){
        this.number = this.startnumber;
    }
};

export {Counter};

