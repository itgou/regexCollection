/**
 * collect regex expression in my work
 * @type {boolean}
 */

const intReg = /^\d+$/  //正整数 Int
const floatReg = /^\d+\.\d+$/ //小数  Float
const intOrFloatReg = /^\d+(\.\d+)?$/ //整数或者小数 Int or Float

export {
    intReg,
    floatReg,
    intOrFloatReg,
}
