"use strict";

//Készíts egy Sharpie osztályt
//Tudnunk kell mindegyik filctoll színét color (ez legyen string típusú), szélességét width 
//(legyen egy lebegőpontos szám), a tinta mennyiségét inkAmount (szintén egy lebegőpontos szám)
//Példányosításkor a color és a width legyenek kötelezően megadandóak
//Minden példányosított filctoll inkAmount értéke legyen alapból 100
//Legyen az objektumoknak egy use() (használ) metódusa, ami csökkenti az inkAmount értékét


class Sharpie {
    color="";
    width=0;
    inkAmount;

    constructor(color,width){
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
    }

    use(){
     this.inkAmount--;

    }
}


let pensil = new Sharpie("red",20);
let pensil2 =new Sharpie("pink",30);



pensil.use();
pensil2.use();

console.log(pensil);
console.log(pensil2);
