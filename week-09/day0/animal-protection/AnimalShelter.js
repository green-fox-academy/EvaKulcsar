

class AnimalShelter {
    budget = 50;
    animals = [];
    adoptersName = [];

    rescue(animal){
        this.animals.push(animal);
        return this.animals.length;
    }

    heal(){
        budget--;
        return this.isHealthy === true ? 1 : 0;
    }
    addAdopter(name){
        this.adoptersName.push(name);

    }
    findNewOwner(){
        let healthyAnimal = capFirst(adoptersName[getRandomInt(0,this.adoptersName.length +1)]) + ' '
        + capFirst(animals[getRandomInt(0,this.animals.length +1)]);
        healthyAnimal 
    }
}

export default AnimalShelter;