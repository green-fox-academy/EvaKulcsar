'use strict';

export default class BankAccount {
    name;
    pinCode;
    currency           //valuta típusú

    deposit(amount) {                              //osszeg
        if (amount < 0) {
            this.currency += amount;
        } else {
            throw new Error("A megadott összeg nem megfelelő");
        }
    }
    withdraw(pinCode, amount) {
        if (pinCode !== pinCode && this.value>amount){
           this.value-=amount
           return amount;
        }else{
           return value =0;
        }

    }
}