

class Garden {
    garden = [
        new Flower("yellow"),
        new Flower("blue"),
        new Tree("purple"),
        new Tree("orange"),
    ];

    watering(amount) {
        if (!amount) {
            this.garden.map((plant) => plant.needWater());
        } else {
            console.log(`Öntözés ${amount} egységgel`);
            this.garden.map((plant) => {
                if (plant instanceof Flower) {
                    plant.waterLevel += (amount / this.garden.length) * 0.75;
                    plant.needWater();
                }
                if (plant instanceof Tree) {
                    plant.waterLevel += (amount / this.garden.length) * 0.4;
                    plant.needWater();
                }
            });
        }
    }
}

const garden = new Garden();
garden.watering();
garden.watering(40);
garden.watering(70);
