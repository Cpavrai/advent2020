const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8")

const getInfo = (line) => {
    let contents = line.split("bags contain")
    var parent = contents[0].trim(),
        content = contents[1].split(/[,|.]/)
            .map((e) => e.trim())
            .map((elem) => {
                let cont = elem.split(" ").slice(0, -1)
                return {quantity: cont[0], name: cont.slice(1).join(" ")}
            })
            .slice(0, -1)
    return {parent, content}
}

const getInfos = (myInput) => {
    var result = {}
    return new Promise((resolve, reject) => {
        if (myInput === undefined) reject(null)
        if (myInput.length === 0) reject(undefined)
        const tab = myInput.split("\n")

        tab.forEach((line, lineIndex) => {
            let {parent, content} = getInfo(line)
            result[parent] = content
            if (lineIndex == tab.length - 1) resolve(result)
        })
    })
}

const findColorOccurence = (tab, color) => {
    let result = 0
    for (let index = 0; index < Object.keys(tab).length; index++) {
        const element = tab[Object.keys(tab)[index]]
        if (Object.keys(tab)[index] === color) {
            for (let secondIndex = 0; secondIndex < element.length; secondIndex++) {
                const content = element[secondIndex]
                if (content['quantity'] !== 'no') result += parseInt(content['quantity']) * (1 + findColorOccurence(tab, content['name']))
            }
        }
    }
    return result
}

const myFunc = (myInput, color="shiny gold") => {
    return new Promise((resolve, reject) => {
        getInfos(myInput)
            .then((infos) => resolve(findColorOccurence(infos, color)))
            .catch((err) => reject(err))
    })
}

// myFunc(input).then((res) => console.log(res))
module.exports = myFunc