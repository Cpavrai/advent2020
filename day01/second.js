const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\r\n").map((e) => parseInt(e))

const myFunc = (myInput) => {
    return new Promise((resolve, reject) => {
        if (myInput.length < 3) reject(null)
        myInput.forEach((elem, elemIndex) => {
            myInput.filter((e) => e != elem).forEach((second, secondIndex) => {
                myInput.filter((e) => e != elem).filter((e) => e != second).forEach((rest, restIndex) => {
                    if (elem + second + rest === 2020) resolve(elem * second * rest)
                    if (
                        (elemIndex === myInput.length - 1)
                        && (secondIndex === myInput.filter((e) => e != elem).length - 1)
                        && (restIndex === myInput.filter((e) => e != elem).filter((e) => e != second).length - 1)
                    ) reject(undefined)
                })
            })
        })
    })
}

// myFunc(input).then((res) => console.log(res))

module.exports = myFunc