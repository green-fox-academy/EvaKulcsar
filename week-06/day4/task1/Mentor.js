import {Person} from './Person.js';

export class Mentor extends Person {

    constructor(name="Jane Doe",age=30,gender="female",level="intermediate"){
        super(name,age,gender);
        this.level = level
    }

    getGoal(){
        console.log("Educate brilliant junior software developers.")
    }
    introduce(){
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
    }
}
/*
let mentor1=new Mentor();
mentor1.getGoal();
mentor1.introduce();

console.log(mentor1);


export default Mentor;
*/