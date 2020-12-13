'use strit';

const lineCount = 4;
//i=csillagok szama
for(let i = 0; i<= lineCount*2; i+=2){
    
  let strStar = '';
  let strSpace = '';
   for(let j = 1; j <= i; j++){
  strStar +='*';
   }
   for(let j = 1; j <= i; j++){
       strSpace += '';
   }
   console.log(strSpace + strStar);
}

/*
   //1.
   console.log('*'.repeat(i));
}
*/
/*
1: 1 2n-1;2*1-1
2: 3 2n-1;2*2-1

i=1
1: 1
2:1+=2
*/

//2.
/*
for(let i =0; i< lineCount*2; i++){
    console.log('*'.repeat(2*1-1));

}
*/

const lineCount = 4;

/*
for (let i = 1; i<=lineCount*2; i+=2){
    for(let i = 1; i <= lineCount; i++){
    console.log(`${''.repeat(lineCount-i)}${'*'.repeat(2*i-1)}`);
}
}
*/
/*
   *
  ***
 *****
*******
*/

/*
let stars = "*";
let lineLength = 7;
let starsCount = 1;

for (let i=0; i<lineCount; i++){
    let numberOfSpace = (lineLength - starsCount)/2;
    let space = "";
    for(let j = 0; j<numberOfSpace; j++){
        space +="";
    }
    console.log(space, stars);
    stars += "**";
    starsCount +=2;

}
*/