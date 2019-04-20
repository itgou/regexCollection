import {
    floatReg,
    intOrFloatReg,
    intReg,
} from "./regexCollection"

let res = intOrFloatReg.test('123')
console.log('intOrFloat:', res)


