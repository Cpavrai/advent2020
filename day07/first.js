const fs = require("fs")
const { resolve } = require("path")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8")

const getInfo = (line) => {
    let contents = line.split("bags contain")
    var parent = contents[0].trim(),
        content = contents[1].split(/[,|.]/)
            .map((e) => e.trim())
            .map((elem) => elem.split(" ").slice(1, -1).join(" "))
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

const findColorOccurence = (tab, color, tmp_result=[]) => {
    let result = []
    return new Promise((resolve, _reject) => {
        Object.keys(tab).forEach((key, keyIndex) => {
            if (tab[key].includes(color)) result.push(key)
            if (keyIndex === Object.keys(tab).length - 1) {
                if (!result.length) resolve(tmp_result)
                else Promise
                    .all(result.map((r) => findColorOccurence(tab, r, tmp_result)))
                    .then((resp) => {
                        resolve([...result, ...tmp_result, ...resp].flat().filter((e, i, s) => s.indexOf(e) === i))
                    })
            }
        })
    })
}

const myFunc = (myInput, color="shiny gold") => {
    return new Promise((resolve, reject) => {
        getInfos(myInput)
            .then((infos) => {
                findColorOccurence(infos, color).then((res) => resolve(res.length))
            })
            .catch((err) => reject(err))
    })
}

// myFunc(input).then((res) => console.log(res))
module.exports = myFunc