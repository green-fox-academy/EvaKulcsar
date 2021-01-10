import Candy from './candy.js';
import Lollipop from './lollipop.js';
import HardCandy from './hardCandy.js';
import CandyShop from './candyShop.js';


const sugarShop = new CandyShop (100);
const chupaChupsLollipop = new Lollipop();
const poppingLollipop = new Lollipop();
console.log(sugarShop);

try{
    sugarShop.createdCandy(chupaChupsLollipop);
    sugarShop.createdCandy(poppingLollipop);
}catch (error){
    console.error(error.message);
}
console.log(sugarShop);
sugarShop.raisePrice(50);
console.log(sugarShop);

sugarShop.raisePrice(2)




