class Flower {
    waterDemand = 5;
    waterLevel = 0;

    constructor(name) {
        this.name = name;
    }

    needWater() {
        if (this.waterLevel < this.waterDemand) {
            console.log(`The ${this.name} Flower needs water`);
        } else {
            console.log(`The ${this.name} Flower doesnt need water`);
        }
    }
}






export default Flowers;