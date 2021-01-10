'use String';

//Készíts egy függvényt countWordsEndsWithS néven, ami
//bemenetként egy string-et kap, és
//visszatér az s karakterre végződő szavak számával.
//Példa bemenet:
//countWordsEndsWithS("ends with s characters");
//A várt visszatérési érték 3, mert "ends with s characters".

//let str = ("ends with s characters");

function countWordsEndsWithS( str ) {

    let sNumber = 0;
    str = str.split(' ');
    for (let i=0; i<str.length; i++){
    if( str[i][str[i].length-1] === 's' ){
        sNumber++;     
    }
}

    return sNumber;

}
console.log(countWordsEndsWithS("ends with s characters"));

