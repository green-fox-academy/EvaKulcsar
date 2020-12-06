'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// Töltsd ki a canvast sakktábla mintával.

/*
function drawSquare(x,y,width,heigth,color){

    ctx.fillrect = (x,y,width,heigth);
    ctx.fillStyle = color;

}

*/
function drawSquare(x, y, width, heigth, color) {
    ctx.fillRect(x, y, width, heigth);
    ctx.fillStyle = color;
}

for (let i = -60; i < 400; i += 120) {
    for (let j = -60; j < 600; j += 120) {
        drawSquare(j + 60, i + 60, 60, 60, "black");
    }
}

for (let i = 0; i < 400; i += 120) {
    for (let j = 0; j < 600; j += 120) {
        drawSquare(j + 60, i + 60, 60, 60, "black");
    }
}