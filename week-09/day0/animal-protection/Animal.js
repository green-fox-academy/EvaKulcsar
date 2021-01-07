'use strict';

class Animal{

    isHealthy = true;                       //milyen tulajdonságai vannak egy állatnak
    healCost;                               //nincs értéke,be kell állítanom,hogy öröklődjön

    constructor(name = "Animal",ownerName){                 //paraméter adok tulajdonosneve és állatnevet
        this.ownerName = ownerName;  
        this.name = name;      
    }

    getOwnername(){             //ha szeretném kinyerni az owernamet getther-rel
        return this.ownerName   //visszaadjuk  -átlépünk a main-be
    }
    heal(){                     //metódus,amivel lehet gyógyítani
            this.isHealthy = true;
    }
    //an animal can be adopted if it is healthy
    isAdoptable(){
        return this.isHealthy;
                //v.
        //if(this.isHealthy === true){
        //    return true;
        //} else {
        //    return false;
        //}
              //  v.
      //return  this.isHealthy === true ? true : false;
    }

    toString(){   //abszolút beépített metódus, így nem console.log hanem return
        let output = `${this.name} is`
        if(this.isHealthy){
            //<name> is healthy, and adoptable
            output += ` healthy and`;
            }else {
                output +=' not helathy (${this.healCost}€),and ';
            }                           
            if(this.isAdoptable()){
                output+=' adoptable';
            }else{
                output +=' not adoptable'
            }
           return  output;
        }

        setToSick(){
            this.isHealthy = false;
        }
        
    }

export default Animal;
