const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8")

const myFunc = (myInput) => {
    return new Promise((resolve, reject) => {
        if (myInput === undefined) reject(null)
        if (myInput.length === 0) reject(undefined)
        const tab = myInput.split("\n\n").map(e => e.replace(/\n/g, "").trim()), groups = []

        tab.forEach((groupAnswer, groupAnswerIndex) => {
            groups.push(groupAnswer.split("").filter((e, i, s) => s.indexOf(e) === i))
            if (groupAnswerIndex == tab.length - 1) resolve(groups.map(e => e.length).reduce((a, b) => a + b))
        })
    })
}

// myFunc(input).then((res) => console.log(res))
module.exports = myFunc