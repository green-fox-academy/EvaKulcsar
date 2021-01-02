//Készíts Student és Teacher osztályokat
//Student
//learn() -> kiírja, hogy a diák valami újat tanul
//question(teacher) -> meghívja a tanár answer metódusát
//Teacher
//teach(student) -> meghívja a diák learn metódusát
//answer() -> kiírja, hogy a tanár megválaszol egy kérdést
//Példányosíts egy Student és egy Teacher objektumot
//Hívd meg a diák question() metódusát és a tanár teach() metódusát

class Student {
    learn(){
        return "A diák valami újat tanul"
    }
    question(teacher){
        return teacher.answer();
    }
}

class Teacher{
    teach(student){
        return student.learn();
    }
    answer(){
        return "A tanár megválaszol egy kérdést"
    }
}

const student = new Student();
const teacher = new Teacher();

console.log (student.question(teacher));
console.log (teacher.teach(student));

