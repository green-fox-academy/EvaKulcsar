'use strict';

//Készíts egy függvényt, mely paraméterben egy tömböt vár
//A függvény írja ki:
//a diákoknak összesen hány édessége van
//azon diákok korának összegét, akiknek 5-nél kevesebb édessége van
const students = [
    { nev: 'Theodor', kor: 3, edesseg: 2 },
    { nev: 'Paul', kor: 9.5, edesseg: 2 },
    { nev: 'Mark', kor: 12, edesseg: 5 },
    { nev: 'Peter', kor: 7, edesseg: 3 },
    { nev: 'Olaf', kor: 12, edesseg: 7 },
    { nev: 'George', kor: 10, edesseg: 1 }
];

function studySweet(array) {
    let sugar = 0;
    for (let i = 0; i < array.length; i++) {

        sugar += array[i].edesseg;
    }
    return sugar;
}
console.log(studySweet(students));

function studyAge(array) {
    let age = 0;
    for (let i = 0; i < array.length; i++) {

        if (array[i].edesseg < 5) {

            age += array[i].kor;
        }

    }
    return age;
}
console.log(studyAge(students));