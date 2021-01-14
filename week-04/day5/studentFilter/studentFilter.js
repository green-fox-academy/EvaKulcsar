'use strict';

const students = [
    { nev: 'Mark', kor: 9.5, edesseg: 2 },
    { nev: 'Paul', kor: 12, edesseg: 5 },
    { nev: 'Clark', kor: 7, edesseg: 3 },
    { nev: 'Pierce', kor: 12, edesseg: 7 },
    { nev: 'Sean', kor: 10, edesseg: 1 }
];


function StudentSugar(array) {
    for (let i = 0; i < students.lenght; i++) {
        if (array[i].edesseg > 4) {
            return (array[i].nev);

        }
    }
}
console.log(StudentSugar(students));


function studentAvarage(array) {
    let sugar = 0;
    let avarage = 0;
    for (let i = 0; i < students.lenght; i++) {
        sugar += array[i].edesseg
        avarage = sugar / (i+1);
    }
    return avarage;
}
console.log(studentAvarage(students));



