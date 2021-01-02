'use strict';

//Készíts egy PostIt osztályt, aminek a következők a tagváltozói:
//backgroundColor
//text
//textColor
//Készíts néhány példa post-it objektumot:
//egy narancssárgát kék szöveggel: "Egy, megerett a meggy"
//egy rózsaszínt fekete szöveggel: "Ketto, csipkebokor vesszo"
//egy sárgát zöld szöveggel: "1 liter tej!"


class PostIt{
    constructor(backgroundColor,text,textColor){
    
        this.beckgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

console.log (new PostIt("orange","blue","Egymegérett a meggy"));
console.log (new PostIt("pink","black","Ketto,csipkebokor vessző"));
console.log (new PostIt("yellow","green","1 liter tej!"));

