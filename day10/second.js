const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n").map(e => parseInt(e))

const possibility = (myInput, memo={}) => {
    const key = myInput.join(`,`);
    if (Object.keys(memo).includes(key)) return memo[key];

    let result = 1, index = 1;
    while (index < myInput.length - 1) {
        if (myInput[index + 1] - myInput[index - 1] <= 3) {
            const arr2 = [myInput[index - 1]].concat(myInput.slice(index + 1))
            result += possibility(arr2, memo);
        }
        index++;
    }
    memo[key] = result;
    return result;
}

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;

    myInput = myInput.sort((a, b) => a - b);
    myInput = [0, ...myInput, myInput[myInput.length - 1] + 3];
    return possibility(myInput);
}

// console.log(myFunc(input))
module.exports = myFunc