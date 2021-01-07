'use strict';
/*
class Currency (code,centralBankName,value) {
        this.code = code;
        this.centralBankName = centralBankName;
        this.value = value;
}

USADollar 
pozitív értéket fogad El
code = USD
name = Federal Reserve System

HungarianForint
pozitív értéket fogad el
code = HUF
name = Hungarian National Bank

BankAccount(name,pinCode,Currency)

deposit (value)
ellenőrzi,hogy a paraméterként megadott érték pozitív-e,
najd hozzáadja a paraméter érétkét a valuta érték mezőjéhez

withdraw (pincode,value,)
ellenőrzi, hogy a megadott pin kód helyes-e (egyenlő-e az eredeti pin kóddal),
és a valuta értéke nagyobb, mint a felvenni kívánt összeg
ha igen, akkor levonja az összeget a valuta értékéből,
és visszatér a felvenni kívánt összeggel
egyébként nem módosítja a valuta értékét,
és 0-val tér vissza

Bank
A bankot a hozzá tartozó bankszámlák (BankAccount) listája jellemzi.
Van számla létrehozás (createAccount) metódusa, amelynek az egyetlen paramétere a bankszámla
 (BankAccount típusú), és
hozzáadja a bankszámlát a listához
Van tőke lekérdezés (getAllMoney) metódusa, amely
visszatér az összes bankszámlán található pénz összegével (függetlenül a valuta pénznemétől)

*/

