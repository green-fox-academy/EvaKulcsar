'use strit';

//const lineCount =4;

/*
   *
  ***
 *****
*******
*/

const lineCount = 4;

for (let i = 1; i <= lineCount; i++) {
    console.log(' '.repeat(lineCount - i + 1) + '*'.repeat(i * 2 - 1))
}