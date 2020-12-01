'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Készíts egy függvényt, ami egy paramétert vár:
// Egy listát [x, y] pontokkal
// és összeköti őket zöld vonalakkal.
// Kösd össze, kapsz egy dobozt: [[10, 10], [290, 10], [290, 290], [10, 290]]
// Kösd össze ezeket: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(150,290);
ctx.stroke();
