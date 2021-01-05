'use strit';

//const lineCount =4;

/*
   *
  ***
 *****
*******
*/
const star = '*';
const space = ' ';

const lineCount = 4;

for (let spac = lineCount - 1, str = 1; spac>= 0; spac--) {
    console.log(space.repeat(spac) + star.repeat(str));
    str+=2;
}