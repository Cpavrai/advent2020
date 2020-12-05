const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\r\n")

const myFunc = (myInput) => {
    var result = 0
    return new Promise((resolve, reject) => {
        myInput.forEach((line, lineIndex) => {
            let [range, letter, sentence] = line.split(" ")
            let [min, max] = range.split("-"), character = letter[0]
            if (!range || !letter || !sentence || !min || !max || !character) reject(null)
            let nb = (sentence.match(new RegExp(character, "g")) || []).length
            if (nb >= min && nb <= max) result++
            if (lineIndex == (myInput.length - 1)) resolve(result)
        })
    })
}

// myFunc(input).then((res) => console.log(res))
module.exports = myFunc