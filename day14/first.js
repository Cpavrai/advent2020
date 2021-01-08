const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n")

const createBinaryString = (nMask) => {
    var result = new Array(37).join('0'), sMask = Number(nMask).toString(2);
    return result.substr(0, result.length - sMask.length) + sMask
}

const operate = (mask, binaryString) => {
    var result = "";
    for (let index = 0; index < mask.length; index++) result += (mask[index] === "X" ? binaryString[index] : mask[index]);
    return result;
}

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    var result = {}, index = 0, actualMask = null;

    while (index < myInput.length) {
        var [label, _, value] = myInput[index].split(" ");
        if (label === 'mask') actualMask = value;
        else result[+label.substr(4, label.length - 5)] = operate(actualMask, createBinaryString(value));
        index++;
    }
    return (Object.values(result).map(e => parseInt(e, 2)).reduce((a, b) => a + b));
}

// console.log(myFunc(input))
module.exports = myFunc