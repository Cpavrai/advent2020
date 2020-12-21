const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n").map(e => parseInt(e))

const myFunc = (myInput) => {
    let index = 1, resultMap = {}, diff = 0;
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;

    myInput = myInput.sort((a, b) => a - b);
    myInput = [0, ...myInput, myInput[myInput.length - 1] + 3]
    while (index < myInput.length) {
        diff = myInput[index] - myInput[index - 1];
        resultMap[diff] = (resultMap[diff] !== undefined ? resultMap[diff] + 1 : 1);
        index++;
    }
    return (resultMap[1] || 0) * (resultMap[3] || 0);
}

// console.log(myFunc(input))
module.exports = myFunc