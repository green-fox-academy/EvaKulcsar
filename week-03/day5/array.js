//onst tömb1 = [1,2,3,4,5,6,7];
//const tömb2 = ["macska","kutya", "krokodil","medve","galamb"];

//const a = tömb1[0];
//const b = tömb1[1];

//console.log(a,b);

//const [a,b, ,c,...rest] = tömb1;

//console.log(a,b,c,rest);

//function összeadásÉsSzorzás(a, b){
    //return [a+b,a*b];
//}
//const[összeadás,szorzat] = összeadásÉsSzorzás(2,3);
//console.log(szorzat);
//console.log(összeadás);
/*
function összeadásÉsSzorzás(a, b){
    return [a+b,a*b,a/b];
}

const[összeadás,szorzat,hányados = 7] = összeadásÉsSzorzás(2,3);
console.log(szorzat);
console.log(összeadás);
console.log(hányados);
*/
/*
const személy1 = {
    név: "Erika",
    kor: 23,
    cím:{
        utca:"Posta utca 3",
        zip:"1152",
    },
};

const személy2 = {
    név: "Béla",
    kor: 42,
    cím:{
        utca:"Juh utca 12",
        zip:"1014",
    },
};

//const{név,kor} = személy1;
//console.log(név,kor);

const{név: keresztnév, kor} = személy1;
console.log(keresztnév,kor);
*/
/*
const személy1 = {
    név: "Erika",
    cím:{
        utca:"Posta utca 3",
        zip:"1152",
    },
};

const{név, kor = -1, ...rest} = személy1;
console.log(név,kor,rest);
*/
/*
const személy1 = {
    név: "Erika",
    cím:{
        utca:"Posta utca 3",
        zip:"1152",
    },
};

const{cím:{utca},} = személy1;
console.log (utca);
*/
/*
const személy1 = {
    név: "Erika",
    kor: 23,
    cím:{
        utca:"Posta utca 3",
        zip:"1152",
    },
};

const személy2 = {
    név: "Béla",
    kor: 42,
};

const személy3 = {...személy1, ...személy2};
console.log(személy3);
*/
const személy1 = {
    név: "Erika",
    kor: 23,
    cím:{
        utca:"Posta utca 3",
        zip:"1152",
    },
};

const személy2 = {
    név: "Béla",
    kor: 42,
};

//const személyek = [személy1,személy2];
//for(let személy of személyek){
   // console.log(személy.név);

//}
const személyek = [személy1,személy2];
for(let {név,kor} of személyek){
    console.log(név,kor);
}

