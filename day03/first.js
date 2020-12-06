const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\r\n")

const myFunc = (myInput) => {
    var result = 0
    return new Promise((resolve, reject) => {
        if (myInput.length < 2) reject(null);
        myInput.slice(1).forEach((line, lineIndex) => {
            if (line[((lineIndex + 1) * 3) % line.length] === "#") result++
            if (lineIndex == (myInput.length - 2)) resolve(result)
        })
    })
}

// myFunc(input).then((res) => console.log(res))
module.exports = myFunc