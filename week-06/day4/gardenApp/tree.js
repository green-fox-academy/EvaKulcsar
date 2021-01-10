class Tree {
    waterDemand = 10;
    waterLevel = 0;

    constructor(name) {
        this.name = name;
    }

    needWater() {
        if (this.waterLevel < this.waterDemand) {
            console.log(`The ${this.name} Tree needs water`);
        } else {
            console.log(`The ${this.name} Tree doesnt need water`);
        }
    }
}



export default Tree;

