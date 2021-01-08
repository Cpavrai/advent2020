const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n")

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    const busOrders = myInput[1].split(',').map(e => parseInt(e) || null),
        busIds = busOrders.filter(e => e !== null).sort((a, b) => b - a);
    var index = 0, step = 0, stepGap = 1, busDiff = (busIds[step] - (busOrders.indexOf(busIds[step]) % busIds[step])) % busIds[step];

    while (step < busIds.length) {
        while (index % busIds[step] !== busDiff) {
            index += stepGap;
        }
        stepGap *= busIds[step];
        step += 1;
        busDiff = (busIds[step] - (busOrders.indexOf(busIds[step]) % busIds[step])) % busIds[step];
    }
    return (index);
}

// console.log(myFunc(input))
module.exports = myFunc