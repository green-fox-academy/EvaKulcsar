/*hogyan olvasom be a readme.txt-ből az adatot?*/
var fs = require('fs'); /*modul behívásához használom a require függvényt.változóba kellmenteni ugyanolyan néven.*/

let readme = fs.readFileSync('readme.txt','utf8') /*elérési út az első, és a második,hogy milyen kódolásban van
az adott file. Majd változóba elmentema fsfüggvényt is kiírom.*/
console.log(readme);

fs.writeFileSync('writeme.txt',readme); /*hogyan tudok írni egy fájlban? meg kell adni,hova szeretném elhelyezni a
fájlomat és mi legyen a neve (writeme.txt) és mi legyen a tartalma id readme -re utalok*/



//ez így néz ki aszinkron működében



var fs = require('fs');      /*kiveszem a Sync aszinkron függvények lesznek*/

let readme = fs.readFile('readme.txt','utf8',(err,data)=>{/*ilyenkor megadok egy harmadik bemeneti változója a 
callback függvényt.Ez két bemeneti változót vár a hibakezelő és egy adatrárolót a readfile eredményét fogja majd
megkapni.*/
    fs.writeFile('writeme.txt',data,(err)=>{});/*id is be kell tenni egy callback függvényt , ami csak hibakezelőt vár.
    ez a js.megkötések miatt kell.*/
    console.log(data);
});
console.log('valami'); /*ez hamarabb fog lefutni, mint a másik,ez az aszinkron viselkedés.*/

/* a readme.txt tartalma is mgváltozott*/

