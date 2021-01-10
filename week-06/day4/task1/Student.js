import {Person} from "./Person.js";

export class Student extends Person {

    constructor(name,age,gender,previousOrganization= "The School of Life"){
       super(name,age,gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }

    getgoal(){
        console.log("Be a junior software developer.");
    }
    introduce(){
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`)
    }
    skipDays(numberOfDays){
        this.skippedDays += numberOfDays
    }
}
/*
let student1=new Student();

student1.getgoal();
student1.introduce();
student1.skipDays();

console.log(student1);

export default Student;
*/