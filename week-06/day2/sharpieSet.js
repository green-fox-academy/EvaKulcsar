//Használd újra a Sharpie osztályod
//Készíts egy SharpieSet osztályt
//ez tartalmazzon egy Sharpie listát
//countUsable() -> egy filctoll használható, ha van benne tinta
//removeTrash() -> kitöröl minden használhatatlan filcet

class Sharpie {
    color = "";
    width = 0;

    constructor(color, width) {
        this.color = color;
        this.width = width;
        this.inkAmount = 1;
    }

    use() {
        this.inkAmount--;
    }
}

class SharpieSet {
    sharpies = [];

    constructor(sharpies) {
        this.sharpies = sharpies;
    }

    countUsable() {
        let counter = 0;
        this.sharpies.map((sharpie) =>
            sharpie.inkAmount !== 0 ? counter++ : null
        );
        return counter;
    }

    removeTrash() {
        this.sharpies.map((sharpie, index) =>
            sharpie.inkAmount === 0 ? this.sharpies.splice(index, 1) : null
        );
    }
}

const sharpies = [
    new Sharpie("red", 10),
    new Sharpie("black", 0),
    new Sharpie("yellow", 6),
    new Sharpie("green", 20),
];

const sharpieset = new SharpieSet(sharpies);

console.log (sharpieset);