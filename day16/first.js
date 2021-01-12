const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split('\n\n').map(e => e.split('\n'))

const checkValue = (value, fieldValue) => {
    for (let index = 0; index < fieldValue.length; index++) {
        if (value >= fieldValue[index][0] && value <= fieldValue[index][1]) {
            return true;
        }
    }
    return false;
}

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    var fieldValue = [], result = []
    const [fields, _, nearbyTickets] = myInput;

    for (let index = 0; index < fields.length; index++) {
        const values = fields[index].split(' ')
        fieldValue.push(values[1].split('-').map(e => +e));
        fieldValue.push(values[3].split('-').map(e => +e));
    }
    for (let nearbyTicketsIndex = 1; nearbyTicketsIndex < nearbyTickets.length; nearbyTicketsIndex++) {
        result = [...result, nearbyTickets[nearbyTicketsIndex].split(',').map(e => +e).filter(e => !checkValue(e, fieldValue))];
    }
    return result.flat().reduce((a, b) => a + b);
}

// console.log(myFunc(input))
module.exports = myFunc