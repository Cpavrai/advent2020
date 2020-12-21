const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n").map(e => parseInt(e))

const checkNumber = (number, numbersList) => {
    let i = 0, j = 1;

    while (i < numbersList.length) {
        while (j < numbersList.length) {
            if (numbersList[i] + numbersList[j] === number) return true;
            j++;
        }
        i++;
        j = i + 1;
    }
    return false;
}

const myFunc = (myInput, preambleLength=25) => {
    let index = preambleLength;

    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    while (index < myInput.length) {
        if (!checkNumber(myInput[index], myInput.slice(index - preambleLength, index))) return myInput[index];
        index++;
    }
    return undefined;
}

// console.log(myFunc(input))
module.exports = myFunc