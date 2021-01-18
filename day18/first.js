const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split('\n')

const operation = {
    '+': (a, b) => a + b,
    '*': (a, b) => a * b
}

const compute = (str) => {
    let actualSign = '+';

    return String(str.split(' ').reduce((result, value) => {
        if (['+', '*'].includes(value)) actualSign = value;
        else result = operation[actualSign](result, +value);
        return result;
    }, 0));
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