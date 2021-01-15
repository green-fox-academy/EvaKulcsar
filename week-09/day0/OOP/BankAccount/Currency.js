'use strict';

export default class Currency {

    constructor(code, centralBankName, value) {
        this.code = code;               //code=pénznem,
        this.centralBankName = centralBankName;
        this.value = value;             //bksz lévő pénz


    } 

}