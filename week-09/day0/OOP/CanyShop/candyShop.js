export default class CandyShop {
    sugar = 0;
    income= 0;
    inventory =[];

    constructor(amountOfSugar){

        this.sugar = amountOfSugar;
    }

    createdCandy(candy){
        const sugarNeeded = candy.getSugar();
        if(this.sugar < sugarNeeded ){
            throw new Error ("A cukor mennyisége 0 alá csökkent!!!")
        }
        this.inventory.push(candy);
        this.sugar-=sugarNeeded;
    };
    raisePrice(amount) {
        this.inventory.forEach((candy) =>{
            candy.increasePrice(amount);
           // candy.setPrice(candy.getPrice()+amount);
        })
    }
    
    sell(amountToBeSold){
    }
    /*
    this.income += this.sellprice;
    this.inventory -= this.sellSugar;
    if (sellSugar>=inventory){
        throw error ('Készlet hiány!'){

        }else {
            sellSugar == inventory
        }
    }

buySugar(valueKg){
    if(income<0){
        throw error ("Nincs bevétel!")
    }else {
        valueKg += amountOfSugar;
        this.income -= this.sugarOfPrice;
    }
}
toString(){
    'Készlet: 0 cukorka, 1 nyalóka; bevétel: 30000 Ft; cukor: 400 gramm'
}
}
*/
}
    





