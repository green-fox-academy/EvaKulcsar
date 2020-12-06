"use strict";

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáit. Ezután rajzol egy vonalat
// a megadott pont és a cavas közepe között.
// Töltsd meg a canvast vonalakkal, a szélektől indulva 20 pixelenként.

const canvas = document.querySelector(".main-canvas");
const ctx = canvas.getContext("2d");


function drawLine(x,y) {
    
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(300,200);
    ctx.stroke();
}    
    for (let x = 0; x < 600; x+=20){
            drawLine(x,0);
            drawLine(x,400);
    }
    for (let y = 0; y <= 400; y+=20){
        drawLine(0,y);
        drawLine(600,y);
    }
      
