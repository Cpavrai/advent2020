const fs = require("fs")
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n")

const computer = {
    row: {
        limits: [0, 127],
        commands: ["F", "B"]
    },
    col: {
        limits: [0, 7],
        commands: ["L", "R"]
    }
}

const getElem = (string, [baseMin, baseMax], [less, more]) => {
    let medium = Math.floor((baseMax - baseMin) / 2)
    if (string.length === 1) return (string[0] === less ? baseMin : baseMax)
    return (getElem(string.substr(1), string[0] === less ? [baseMin, baseMin + medium] : [baseMin + medium + 1, baseMax], [less, more]))
}

const getSeatId = ([rowString, colString], defaultValue=0) => {
    if (!(/^[F|B]{7}$/.test(rowString)) || !(/^[L|R]{3}$/.test(colString))) return defaultValue
    var result = getElem(rowString, computer.row.limits, computer.row.commands) * 8 + getElem(colString, computer.col.limits, computer.col.commands)
    return !defaultValue ? result : (result > defaultValue ? result : defaultValue)
}

const myFunc = (myInput) => {
    var seats = []
    return new Promise((resolve, reject) => {
        if (myInput === undefined) reject(null)
        if (myInput.length === 0) reject(undefined)

        myInput.forEach((seat, seatIndex) => {
            seats.push(getSeatId([seat.substr(0, 7), seat.substr(7)]))
            if (seatIndex == myInput.length - 1) {
                seats.sort()
                seats.forEach((takenSeat, takenSeatIndex) => {
                    if (!seats.includes(takenSeat + 1) && seats.includes(takenSeat + 2)) resolve(takenSeat + 1)
                    if (takenSeatIndex === seats.length - 1) reject(undefined)
                })
            }
        })
    })
}

// myFunc(input).then((res) => console.log(res))
module.exports = myFunc