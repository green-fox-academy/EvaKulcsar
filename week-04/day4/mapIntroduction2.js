"use strict";
//Készíts egy asszociatív tömböt (Map) ahol a kulcsok (keys) és az értékek (values) szöveges típusúak!
const map = {};

//Töltsd bele a következő kulcs-érték párokat:

//Kulcs (Key)	Érték (Value)
//978-1-60309-452-8	A Letter to Jo
//978-1-60309-459-7	Lupus
//978-1-60309-444-3	Red Panda and Moon Bear
//978-1-60309-461-0	The Lab

map ["978-1-60309-452-8"] ="A Letter to Jo";
map ["978-1-60309-459-7"] ="Lupus";
map ["978-1-60309-444-3"] ="Red Panda and Moon Bear";
map ["978-1-60309-461-0"] ="The Lab";

        console.log(map);

//Írasd ki az összes kulcs-érték párt a következő formátumban:
//A Letter to Jo (ISBN: 978-1-60309-452-8)
//Lupus (ISBN: 978-1-60309-459-7)
//Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
//The Lab (ISBN: 978-1-60309-461-0)
for (let key in map){
    console.log(map[key],"(ISBN:", key,")");
}

//Távolítsd el azt a kulcs-érték párt, melynek a kulcsa 978-1-60309-444-3!

delete map["978-1-60309-444-3"];
console.log (map);

//Távolítsd el azt a kulcs-érték párt, melynek az értéke The Lab!

for (let key in map ){
    if (map[key]==="The Lab"){
        delete map[key];
    }
}

console.log (map);

//Add hozzá az alábbi kulcs-érték párokat a Map-hez:

//Kulcs (Key)	Érték (Value)
//978-1-60309-450-4	They Called Us Enemy
//978-1-60309-453-5	Why Did We Trust Him?

map ["978-1-60309-450-4"] = "They Called Us Enemy";
map ["978-1-60309-453-5"] =  "Why Did We Trust Him?";

console.log (map);


//Írasd ki, van-e érték társítva a 478-0-61159-424-8-as kulcshoz, vagy sem!
const newNumber = "478-0-61159-424-8";
if (map[newNumber]===undefined){
    console.log ("nincs társítva érték");

}else{
    console.log ("van érték társítva");
}
//Írasd ki a 978-1-60309-453-5- as kulcshoz tartozó értéket!

console.log ("Az érték:" + map["978-1-60309-453-5"]);

console.log ("itt a vége fuss el véle");



map.map((elementArrMap, elementArrMapIndex) => {
    elementArrMap.map((element) => {
        if (element.indexOf("978-1-60309-444-3") !== -1) {
            arrMap.splice(elementArrMapIndex, 1);
        }
    });
});


