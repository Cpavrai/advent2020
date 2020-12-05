const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\r\n").map((e) => parseInt(e))

const myFunc = (myInput) => {
    return new Promise((resolve, reject) => {
        if (myInput.length < 2) reject(null);
        myInput.forEach((elem, elemIndex) => {
            myInput.filter((e) => e != elem).forEach((rest, restIndex) => {
                if (elem + rest === 2020) resolve(elem * rest)
                if ((elemIndex === myInput.length - 1) && (restIndex === myInput.filter((e) => e != elem).length - 1)) reject(undefined)
            })
        })
    })
}

// myFunc(input).then((res) => console.log(res))

module.exports = myFunc