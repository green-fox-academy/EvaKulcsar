'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// NE NYÚLJ A FENTI KÓDHOZ

// Rajzold ki az éjszakai eget:
//  - A háttér legyen fekete
//  - A csillagok kis négyzetek legyenek
//  - A csillagok legynek véletlenszerüen elhelyezve a canvason
//  - A csillagok színe változzon véletlenszerűen (szürke árnyalatai)

function randomColor(){
    //111111
    //222222
    //333333
    //...
    //eeeeee
    const number = 15* Match.random()+1;
    return ''
}


function drawStart() {
ctx.fillStyle = 'gold';
ctx.beginPath();
ctx.rect(50,50,50,50)
ctx.fill();
}

drawStart();