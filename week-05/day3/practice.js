
        'use strict';

        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = 600;
        canvas.hight = 800;
        

        ctx.fillRect(10,10,100,100);  //négyszög

        ctx.fillStyle = 'red';
        ctx.fillRect(110,110,100,100);

        ctx.beginPath();            //vonal
        ctx.moveTo(210,210);
        ctx.lineTo(300,300);
        ctx.stroke();

        ctx.strokeStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(310,310);
        ctx.lineTo(400,400);
        ctx.stroke();

        ctx.beginPath();        //kör
        ctx.arc(500,500,50,0,Math.PI*2);
        ctx.stroke();
