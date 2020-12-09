const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n")

const commands = {
    "nop": ({result, value, index}) => ({}),
    "acc": ({result, value, index}) => ({result: result + parseInt(value)}),
    "jmp": ({result, value, index}) => ({index: index + parseInt(value) - 1}),
}

const checkBoot = (tab) => {
    const indexes = []
    var data = {
        result: 0,
        index: 0
    }

    while (data.index < tab.length) {
        const [operator, value] = tab[data.index].trim().split(" ")
        if (indexes.includes(data.index)) return -1
        else indexes.push(data.index);
        data = {...data, ...commands[operator]({...data, value})}
        data.index++
    }
    return data.result
}

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return 0;
    for (let index = 0; index < myInput.length; index++) {
        const operation = myInput[index].split(" ")[0]
        if (["jmp", "nop"].includes(operation)) {
            let newTab = [...myInput]
            newTab[index] = newTab[index].replace(operation, operation === "jmp" ? "nop" : "jmp")
            if (checkBoot(newTab) !== -1) return checkBoot(newTab)
        }
    }
    return -1
}

// console.log(myFunc(input))
module.exports = myFunc