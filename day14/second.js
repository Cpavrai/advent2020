const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n")

const createBinaryString = (nMask) => {
    var result = new Array(37).join('0'), sMask = Number(nMask).toString(2);
    return result.substr(0, result.length - sMask.length) + sMask;
}

const operate = (mask, binaryString) => {
    var result = "";
    for (let index = 0; index < mask.length; index++) result += (mask[index] === "0" ? binaryString[index] : mask[index]);
    return result;
}

const computeFloating = (memoryString) => {
    if (memoryString.indexOf('X') !== -1) return [...computeFloating(memoryString.replace('X', 0)), ...computeFloating(memoryString.replace('X', 1))]
    return [parseInt(memoryString, 2)];
}

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    var result = {}, index = 0, actualMask = null, addr = null;

    while (index < myInput.length) {
        var [label, _, value] = myInput[index].split(" ");
        if (label === 'mask') actualMask = value;
        else {
            addr = computeFloating(operate(actualMask, createBinaryString(+label.substr(4, label.length - 5))));
            for (let idx=0; idx < addr.length; idx++) result[addr[idx]] = parseInt(value);
        }
        index++;
    }
    return (Object.values(result).reduce((a, b) => a + b));
}

// console.log(myFunc(input))
module.exports = myFunc