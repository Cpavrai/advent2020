const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8")

const fields = [
    { name: "byr", required: true },
    { name: "iyr", required: true },
    { name: "eyr", required: true },
    { name: "hgt", required: true },
    { name: "hcl", required: true },
    { name: "ecl", required: true },
    { name: "pid", required: true },
    { name: "cid", required: false },
]

const checkPassport = (passport) => {
    const values = passport.split(/\s+/).map((e) => e.split(':')[0])
    for (let index = 0; index < fields.length; index++) {
        if (fields[index].required === true && !values.includes(fields[index].name)) return false
    }
    return true;
}

const myFunc = (myInput) => {
    return new Promise((resolve, reject) => {
        if (!myInput) reject(null)
        const tab = myInput.split("\n").map(e => e.trim()).join("\n").split("\n\n")
        var result = 0
        if (tab.length === 0) resolve(0)

        tab.forEach((passport, passportIndex) => {
            if (checkPassport(passport)) result++
            if (passportIndex == tab.length - 1) resolve(result)
        })
    })
}

// myFunc(input).then((res) => console.log(res))
module.exports = myFunc