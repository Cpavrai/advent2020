const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split('\n')

const compute = (str) => {
    return String(str.split(' * ').reduce((result, value) =>
        result * value.split(' + ').reduce((r, v) => r + +v, 0)
    , 1));
}

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;

    for (let index = 0; index < myInput.length; index++) {
        var line = myInput[index];
        while (line.lastIndexOf('(') !== -1) {
            let start = line.lastIndexOf('('), length = line.substr(start + 1).indexOf(')')
            line = line.substr(0, start) + compute(line.substr(start + 1, length)) + line.substr(start + length + 2)
        }
        myInput[index] = compute(line);
    }
    return myInput.reduce((result, value) => result + +value, 0);
}

// console.log(myFunc(input))
module.exports = myFunc