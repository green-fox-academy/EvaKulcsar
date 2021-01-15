'use strict';

import Currency from "./Currency";

export default class HungarianForint extends Currency {
    constructor(code = HUF, centralBankName = 'Hungarian National Bank', value) {
        super(code, centralBankName, value)

    }

}

