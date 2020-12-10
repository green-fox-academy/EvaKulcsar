// TBD arrow function vs classicfunction as object/class method

import Person from './importadModule.js';  //relatív elérési utat írok be ahonnan importálok
import {add} from './importadModule.js';
                // vagy
import {add as addFunction} from './importadModule.js'; //alias használata
                //vagy
import fs from 'fs';                //filesistem

console.log (Person);
console.log (add);