const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8")

const myFunc = (myInput) => {
    return new Promise((resolve, reject) => {
        if (myInput === undefined) reject(null)
        if (myInput.length === 0) reject(undefined)
        const tab = myInput.split("\n\n").map(e => e.trim()), groups = []

        tab.forEach((groupAnswer, groupAnswerIndex) => {
            let lines = groupAnswer.split("\n")
            groups.push(
                lines[0]
                    .split("")
                    .filter((e, i, s) => s.indexOf(e) === i)
                    .map((char) => (lines.filter((e) => e.includes(char)).length === lines.length) ? 1 : 0)
                    .reduce((a, b) => a + b)
            )
            if (groupAnswerIndex == tab.length - 1) resolve(groups.reduce((a, b) => a + b))
        })
    })
}


// myFunc(input).then((res) => console.log(res))
module.exports = myFunc