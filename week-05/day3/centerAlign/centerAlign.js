'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Készíts egy függvényt, ami rajzol egy vonalat és két paramétert vár:
// A vonal kezdőpontjának x és y koordinátáit. Ezután rajzol egy vonalat
// a megadott pont és a cavas közepe között.
// Töltsd meg a canvast vonalakkal, a szélektől indulva 20 pixelenként.


let x = 0;
let y = 0;
let w = 300;
let h = 200;

function drawLines(x,y,w,h){
    ctx.beginPath();
    ctx.moveTo(x,Y);
    ctx.lineTo(w,h);
    ctx.stroke();
}

for(let i = 0 ; i<=300; i+=20);{
    drawLines();
}