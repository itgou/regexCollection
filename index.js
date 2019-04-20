import {floatReg, intOrFloatReg, intReg, ipv4Reg} from "./regex"

let res = intOrFloatReg.test('123')
console.log('intOrFloat:', res)


