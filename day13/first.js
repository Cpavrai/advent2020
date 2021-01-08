const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n")

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    var index = 0, myTime = parseInt(myInput[0]), busIds = myInput[1].split(',').filter(e => e != 'x').map(e => parseInt(e)), bestBusId, result;

    while (bestBusId === undefined) {
        result = busIds.filter(e => (myTime+index) % e === 0);
        if (result.length) {
            bestBusId = result[0];
            break;
        }
        index++;
    }
    return (index * bestBusId);
}

// console.log(myFunc(input))
module.exports = myFunc