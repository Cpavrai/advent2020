const fs = require("fs")
const path = require("path")
const firstFunc = require("./first")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n").map(e => parseInt(e))

const findInList = (myInput, numberToFind) => {
    let idx = 0, secondIdx = 0, tmp = [];

    while (idx < myInput.length) {
        while (tmp.length < 2 || tmp.reduce((a, b) => a + b) <= numberToFind) {
            if (tmp.length >= 2 && tmp.reduce((a, b) => a + b) === numberToFind) return tmp;
            tmp.push(myInput[secondIdx]);
            secondIdx++;
        }
        idx++;
        secondIdx = idx;
        tmp = [];
    }
    return null;
}

const myFunc = (myInput, preambleLength=25) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    let numberToFind = firstFunc(myInput, preambleLength);
    if (numberToFind === undefined) return undefined;
    if (numberToFind === 0) return 0;
    var result = findInList(myInput, numberToFind);
    if (result === null) return null;
    return result.sort()[0] + result.sort()[result.length - 1];
}

// console.log(myFunc(input))
module.exports = myFunc