const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8")

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    const numbers = [...myInput.split(',').map(e => +e)];
    var lastDigit;

    while (numbers.length < 2020) {
        lastDigit = numbers[numbers.length - 1];
        numbers.push(
            numbers.slice(0, numbers.length - 2).includes(lastDigit) ?
                numbers.lastIndexOf(lastDigit) - numbers.slice(0, numbers.lastIndexOf(lastDigit)).lastIndexOf(lastDigit)
                :
                0
        )
    }
    return numbers[2019];
}

// console.log(myFunc(input))
module.exports = myFunc