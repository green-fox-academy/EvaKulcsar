export default class Cohort{
    constructor(nama){
        this.name = name;
        this.students = [];
        this.mentors = [];

    }

    addStudent(student){
        return this.students.push(student);
    }
    addMentor(mentor){
        return this.mentors.push(metor);
    }
    info(){
        console.log(export default class Cohort {
            constructor(name) {
                this.name = name;
                this.students = [];
                this.mentors = [];
            }
        
            addStudent(student) {
                return this.students.push(student);
            }
        
            addMentor(mentor) {
                return this.mentors.push(mentor);
            }
        
            info() {
                console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`)
            }
        })
    }
}