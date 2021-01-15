'use strict';

import Currency from "./Currency";

export default class USADollar extends Currency{
    constructor(code=USD, CentralBankName = "Federal Reserve System", value){
        super (code,CentralBankName,value);
    }

}