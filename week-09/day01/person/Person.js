class Person {

    constructor(name = "Jane Doe",age =30,gender="female"){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }

    introduce(){
      console.log("Hi, I'm name, a age year old gender.") ;
    }
    getGoal(){
        console.log("My goal is: Live for the moment!");
    }
}

let ember = new Person();

ember.introduce();
ember.getGoal()

console.log(ember);