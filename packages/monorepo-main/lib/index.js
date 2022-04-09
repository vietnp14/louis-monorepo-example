"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const sdk_1 = require("@monorepo/sdk");
function checkOddNumber() {
    console.log('IsOdd : ', sdk_1.isOdd);
    console.log('7 is odd : ', (0, sdk_1.isOdd)(7));
}
checkOddNumber();
