const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n")

const compareMap = (first, second) => {
    let i = 0, j = 0;

    while (i < first.length) {
        j = 0;
        while (j < first[i].length) {
            if (first[i][j] !== second[i][j]) return false;
            j++;
        }
        i++;
    }
    return true;
}

const countOccupied = (tab, pos_x, pos_y) => {
    var result = 0;

    result += (tab[pos_y - 1] || [])[pos_x - 1] === '#' ? 1 : 0;
    result += (tab[pos_y - 1] || [])[pos_x] === '#' ? 1 : 0;
    result += (tab[pos_y - 1] || [])[pos_x + 1] === '#' ? 1 : 0;
    result += (tab[pos_y] || [])[pos_x - 1] === '#' ? 1 : 0;
    result += (tab[pos_y] || [])[pos_x + 1] === '#' ? 1 : 0;
    result += (tab[pos_y + 1] || [])[pos_x - 1] === '#' ? 1 : 0;
    result += (tab[pos_y + 1] || [])[pos_x] === '#' ? 1 : 0;
    result += (tab[pos_y + 1] || [])[pos_x + 1] === '#' ? 1 : 0;
    return result;
}

const countAllOccupied = (tab) => {
    let result = 0, y = 0, x = 0;

    while (y < tab.length) {
        x = 0;
        while (x < tab[y].length) {
            result += tab[y][x] === '#' ? 1 : 0;
            x++;
        }
        y++;
    }
    return result;
}

const processStep = (tab) => {
    let i = 0, j = 0, newTab = [];

    while (i < tab.length) {
        j = 0;
        newTab.push([]);
        while (j < tab[i].length) {
            if (tab[i][j] === 'L' && countOccupied(tab, j, i) === 0) {
                newTab[i].push('#');
            } else if (tab[i][j] === '#' && countOccupied(tab, j, i) >= 4) {
                newTab[i].push('L');
            }
            else newTab[i].push(tab[i][j]);
            j++;
        }
        i++;
    }
    return newTab;
}

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    myInput = myInput.map(e => e.split(''));
    var oldMap = [...myInput], newMap = [...myInput], idx = 0;

    while (compareMap(oldMap, newMap) === false || idx === 0) {
        oldMap = [...newMap];
        newMap = [...processStep(oldMap)];
        idx++;
    }
    return (countAllOccupied(newMap));
}

// console.log(myFunc(input))
module.exports = myFunc