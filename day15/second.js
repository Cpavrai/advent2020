const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8")

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    const numbers = myInput.split(',')
    var lastDigit = 0,
        lastIndexes = new Array(30000000),// Can't be more than this, as numbers are index' diff
        idx = numbers.length
        lastNumber = 0;

    for (let index = 0; index < numbers.length; index++) {
        lastIndexes[numbers[index]] = index;
    }
    while (idx < 29999999) {
        lastDigit = lastNumber;
        lastNumber = (
            lastIndexes[lastNumber] !== undefined ?
            idx - lastIndexes[lastNumber]
            :
            0
        );
        lastIndexes[lastDigit] = idx;
        idx++;
    }
    return lastNumber;
}

// console.log(myFunc(input))
module.exports = myFunc