export default class CandyShop {
    sugar = 0;
    income= 0;
    inventory =[];
    sugarUnitPrice = 600;

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
    
    sell(amountShouldBeSold){
        const amountCanBeSold = this.inventory.length;
        let amountToBeSold = Math.min(amountCanBeSold, amountShouldBeSold);

        const candisToBeSold = this.inventory.splice(0,amountToBeSold);

        candisToBeSold.forEach((candy) => {
            this.income+=candy.getPrice();
        });



        /*
        let amountToBeSold = 0;
        if (amountCanBeSold >= amountShouldBeSold ){
            amountToBeSold = amountShouldBeSold;
        }else{
            amountToBeSold = amountCanBeSold;
        }
        for (let i=0; i<amountToBeSold; i++){
            this.income+=this.inventory[i].getPrice();
            this.inventory.shift();
        }
        */
        
    }

    buySugar(amountInKG){
        const priceOfSugar = amountInKG*this.sugarUnitPrice;
        if(this.income < priceOfSugar){
                throw new Error ("Nincs elég bevétel!")
        }
        this.sugar+=amountInKG*1000;
        this.income-=priceOfSugar;
    } 


    toString(){
        let output='';
        let hardCandyCount = 0;
        let lollipopCount = 0;

        this.inventory.forEach((candy) =>{
            if(candy instanceof lollipopCount){
            lollipopCount++;
            }else if (candy instanceof hardCandyCount) {
            hardCandyCount++;
            
        }
               
            });
            output+= `Készlet: ${hardCandyCount} cukorka, ${lollipopCount} nyalóka;`
            output+= `Bevétel: ${this.income} Ft; cukor: ${this.sugar} gramm`


            return output;

        }
    }

    
    





