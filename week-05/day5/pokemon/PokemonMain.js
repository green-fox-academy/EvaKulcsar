import { Pokemon } from './Pokemon.js';

let pokemonOfAsh = initializePokemon();

// Minden Pokemonnak van egy neve és egy típusa.
// Bizonyos típusok hatékonyak mások ellen, pl. a víz hatékony a tűz ellen.
// Ash-nek van pár Pokemonja.
// Egy vad Pokemon tűnik fel!
let wildPokemon = new Pokemon('Oddish', 'leaf', 'water');

// Melyik Pokemont használja Ash?
// Implementáld az alábbi `chooseEffective` függvényt, hogy Ash a hatékony pokémont válassza.
console.log(`${chooseEffective(pokemonOfAsh, wildPokemon)}, teged valasztalak!`);

function initializePokemon() {
  return [
    new Pokemon('Balbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Balbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}

function chooseEffective (pokemonList, wildPokemon) {
  for(let i=0; i< pokemonList.length; i++){
    if (pokemonList[i].effectiveAgainst === wildPokemon.type){
      return pokemonList[i].name;
    }
  }
  
}