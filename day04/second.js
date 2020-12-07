const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8")

const fields = [
    { name: "byr", required: true, isValid: (value) => (value.length === 4 && parseInt(value) <= 2002 && parseInt(value) >= 1920) },
    { name: "iyr", required: true, isValid: (value) => (value.length === 4 && parseInt(value) <= 2020 && parseInt(value) >= 2010) },
    { name: "eyr", required: true, isValid: (value) => (value.length === 4 && parseInt(value) <= 2030 && parseInt(value) >= 2020) },
    { name: "hgt", required: true, isValid: (value) => (
      (value.substr(-2) === "cm" && value.length === 5 && parseInt(value.substr(0, 3)) >= 150 && parseInt(value.substr(0, 3)) <= 193)
      || (value.substr(-2) === 'in' && value.length === 4 && parseInt(value.substr(0, 2)) >= 59 && parseInt(value.substr(0, 2)) <= 76)) },
    { name: "hcl", required: true, isValid: (value) => (value.length === 7 && value[0] === '#' && /[0-9A-Fa-f]{6}/g.test(value.substr(1))) },
    { name: "ecl", required: true, isValid: (value) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value) },
    { name: "pid", required: true, isValid: (value) => (value.length === 9 && !isNaN(value)) },
    { name: "cid", required: false },
]

const checkPassport = (passport) => {
    const values = passport.split(/\s+/).map((e) => e.split(':'))
    for (let index = 0; index < fields.length; index++) {
        if (fields[index].required === true
          && (!values.map(e => e[0]).includes(fields[index].name) || !fields[index].isValid(values.find(e => e[0] === fields[index].name)[1]))) return false
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