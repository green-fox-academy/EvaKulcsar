  
import { Thing } from './Thing.js';
import { Fleet } from './Fleet.js';

let things = [
    new Thing("Get milk"),
    new Thing("Remove the obstacles"),
    new Thing("Stand up"),
    new Thing("Eat lunch"),
];

things[2].complete();
things[3].complete();

let fleet = new Fleet();

for (let i = 0; i < things.length; i++) {
    fleet.add(things[i]);
}

// -  Van egy `Thing` osztályod
// -  Van egy `Fleet` osztályod
// - Ezen osztályokat használva érd el az alábbi kimenetet:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

console.log(fleet.toString());