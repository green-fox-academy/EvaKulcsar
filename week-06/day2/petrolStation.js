//Készíts egy Station és egy Car osztályt
        //Station
//gasAmount -> az állomáson elérhető üzemanyag mennyisége
//refill(car) -> csökkenti az állomás gasAmount értékét és növeli az autó gasAmount értékét,
// az autó kapacitásától függően
        //Car
//gasAmount -> az autóban lévő üzemanyag mennyisége
//capacity -> az autó üzemanyag tankjának mérete
//készíts konstruktort a Car osztályhoz, amely:
//kezdőértéket ad: gasAmount -> 0
//kezdőértéket ad: capacity -> 100

class Station{
   gasAmount = 1000;
   
    refill(car){
        this.gasAmount -=car.capacity;
        return (car.gasAmount += car.capacity);
    }  
}
    

class Car{
    gasAmount;
    capacity;

    constructor(gasAmount=0,capacity=100){
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
}

const station = new Station();
const car = new Car();

station.refill(car);

console.log(station);
console.log(car);
