const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\r\n")

const myFunc = (myInput) => {
    var result = 0
    return new Promise((resolve, reject) => {
        myInput.forEach((line, lineIndex) => {
            let [range, letter, sentence] = line.split(" ")
            let [firstPos, secondPos] = range.split("-"), character = letter[0]
            if (!range || !letter || !sentence || !firstPos || !secondPos || !character) reject(null)
            if (
                (sentence[firstPos - 1] == character && sentence[secondPos - 1] != character)
                || (sentence[firstPos - 1] != character && sentence[secondPos - 1] == character)
            ) result++
            if (lineIndex === (myInput.length - 1)) resolve(result)
        })
    })
}

// myFunc(input).then((res) => console.log(res))
module.exports = myFunc