const girls = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
const boys = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];
/*
console.log(makingMatches(girls, boys));

function makingMatches(girls,boys){


}

}
*/
let newarray = girls.map(girls,boys => (girls + boys))
    console.log(newarray);