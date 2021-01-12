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

const checkMap = (map) => map.map(e => e.column.length).reduce((a,b) => a + b) == map.length;

const inferFields = (map) => {
    let columns = new Array(map.length);

    while (!checkMap(map)) {
        // console.log(columns)
        for (let index = 0; index < map.length; index++) {
            const element = map[index];
            if (element.column.length === 1)
                columns[element.column[0]] = element.column[0];
            else
                element.column = element.column.filter((e) => !columns.includes(e));
        }
    }
    return map;
}

const myFunc = (myInput, fieldsAsked) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    var fieldValue = [], ticketsList = [], fieldCategories = [];
    var [fields, myTicket, nearbyTickets] = myInput;
    myTicket = myTicket[1].split(',').map(e => +e);
    nearbyTickets = nearbyTickets.slice(1).map(e => e.split(',').map(e => +e));

    for (let index = 0; index < fields.length; index++) {
        const [label, rest] = fields[index].split(':'),
            [firstArray, _, secondArray] = rest.trim().split(' ');
        fieldValue.push(firstArray.split('-').map(e => +e));
        fieldValue.push(secondArray.split('-').map(e => +e));
        fieldCategories.push({
            name: label.substr(0, label.length),
            column: [],
            check: (value) => (
                (value >= +firstArray.split('-')[0] && value <= +firstArray.split('-')[1])
                || (value >= +secondArray.split('-')[0] && value <= +secondArray.split('-')[1])
            )
        });
    }
    for (let nearbyTicketsIndex = 0; nearbyTicketsIndex < nearbyTickets.length; nearbyTicketsIndex++) {
        if (!nearbyTickets[nearbyTicketsIndex].map(e => checkValue(e, fieldValue)).includes(false))
            ticketsList.push(nearbyTickets[nearbyTicketsIndex]);
    }
    for (let column = 0; column < nearbyTickets[0].length; column++) {
        let fieldList = [...fieldCategories];
        for (let ticketsIndex = 0; ticketsIndex < ticketsList.length; ticketsIndex++) {
            const element = ticketsList[ticketsIndex];
            fieldList = fieldList.filter((e) => e.check(+element[column]))
        }
        for (let index = 0; index < fieldList.length; index++) {
            fieldCategories.find((e) => e.name === fieldList[index].name).column.push(column);
        }
    }
    fieldCategories = inferFields(fieldCategories);
    return myTicket.map((e, i) => fieldCategories.filter((e) => e.name.substr(0, fieldsAsked.length) === fieldsAsked).map(e => +e.column[0]).includes(i) ? +e : 1).reduce((a, b) => a * b);
}

// console.log(myFunc(input, "departure"))
module.exports = myFunc