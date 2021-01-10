import{Person} from "./Person.js";

export class Sponsor extends Person {
    hiredStudent = 0;

    constructor(name = "Jane Doe",age=30,gender="female",company="Google"){
        super(name,age,gender);
        this.company=company;
    }

    introduce(){
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }
    hire(){
        this.hireStudents++;
    }
        gitGoal(){
        console.log("Hire brilliant junior software developers.");
    }
}


//export default Sponsor;