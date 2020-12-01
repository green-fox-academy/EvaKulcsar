'use Strict';

// Ha a páros, növeld az out változó értékét 1-gyel

const a = 24;
let out = 0;
 if(a%2===0){
     console.log(++out);
 }



// Ha b 10 és 20 között van, akkor az out2 legyen 'Édes!'
// Ha b kevesebb, mint 10, out2 legyen 'Kevés!'
// Ha b több, mint 20, out2 legyen 'Sok!'



const b = 13;
let out2 = '';

if (  b > 10 || b < 20){
    console.log('Édes');
}else if (b<10) {
    console.log('Kevés');

} else {(b>20)
   console.log('Sok');
}

console.log(out2);


// Ha credits legalább 50,
// és isBonus hamis, c legyen csökkentve 2-vel
// Ha credits kisebb, mint 50,
// és isBonus hamis, c legyen csökkentve 1-gyel
// Ha isBonus igaz, c ne változzon


let c = 123;
const credits = 100;
const isBonus = false;

if (credits >= 50 && isBonus === false, c-=2){
   console.log(c);
}else if(credits<50 && isBonus === false, c--) { 
    console.log(c);
}else {
    (isBonus === true)
    console.log (c);
}

// Ha d osztható 4-gyel
// és a time nem több, mint 200
// out3 legyen 'check'
// Ha time nagyobb, mint 200
// out3 legyen 'Az idő lejárt!'
// különben out3 legyen 'Fuss, Forest, Fuss!'

let d = 8;
const time = 120;
let out3 = '';

if (d%4==0 && time <=200){
    console.log(out3='check');
}else if (time>200){
    console.log(out3='Az idő járás!');
}else{
    console.log(out3='Fuss,Forest,Fuss');
}



