const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n")

const commands = {
    "nop": ({result, value, index}) => ({}),
    "acc": ({result, value, index}) => ({result: result + parseInt(value)}),
    "jmp": ({result, value, index}) => ({index: index + parseInt(value) - 1}),
}

const myFunc = (myInput) => {
    const indexes = []
    var data = {
        result: 0,
        index: 0
    }

    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return 0;
    while (data.index < myInput.length) {
        const [operator, value] = myInput[data.index].trim().split(" ")
        if (indexes.includes(data.index)) return data.result
        else indexes.push(data.index);
        data = {...data, ...commands[operator]({...data, value})}
        data.index++
    }
    return data.result
}

// console.log(myFunc(input))
module.exports = myFunc