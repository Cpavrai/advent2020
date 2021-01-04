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

const getOccupiedSeat = (tab, pos_x, pos_y, direction) => {
    switch (direction) {
        case 'LEFT-UP':
            if (pos_y === 0 || pos_x === 0) return 0;
            else if (tab[pos_y - 1][pos_x - 1] === '.') return getOccupiedSeat(tab, pos_x - 1, pos_y - 1, direction);
            else if (tab[pos_y - 1][pos_x - 1] === '#') return 1;
            else return 0;
        case 'UP':
            if (pos_y === 0) return 0;
            else if (tab[pos_y - 1][pos_x] === '.') return getOccupiedSeat(tab, pos_x, pos_y - 1, direction);
            else if (tab[pos_y - 1][pos_x] === '#') return 1;
            else return 0;
        case 'RIGHT-UP':
            if (pos_y === 0 || pos_x === tab[0].length - 1) return 0;
            else if (tab[pos_y - 1][pos_x + 1] === '.') return getOccupiedSeat(tab, pos_x + 1, pos_y - 1, direction);
            else if (tab[pos_y - 1][pos_x + 1] === '#') return 1;
            else return 0;
        case 'LEFT':
            if (pos_x === 0) return 0;
            else if (tab[pos_y][pos_x - 1] === '.') return getOccupiedSeat(tab, pos_x - 1, pos_y, direction);
            else if (tab[pos_y][pos_x - 1] === '#') return 1;
            else return 0;
        case 'RIGHT':
            if (pos_x === tab[0].length - 1) return 0;
            else if (tab[pos_y][pos_x + 1] === '.') return getOccupiedSeat(tab, pos_x + 1, pos_y, direction);
            else if (tab[pos_y][pos_x + 1] === '#') return 1;
            else return 0;
        case 'LEFT-DOWN':
            if (pos_y === tab.length - 1 || pos_x === 0) return 0;
            else if (tab[pos_y + 1][pos_x - 1] === '.') return getOccupiedSeat(tab, pos_x - 1, pos_y + 1, direction);
            else if (tab[pos_y + 1][pos_x - 1] === '#') return 1;
            else return 0;
        case 'DOWN':
            if (pos_y === tab.length - 1) return 0;
            else if (tab[pos_y + 1][pos_x] === '.') return getOccupiedSeat(tab, pos_x, pos_y + 1, direction);
            else if (tab[pos_y + 1][pos_x] === '#') return 1;
            else return 0;
        case 'RIGHT-DOWN':
            if (pos_y === tab.length - 1 || pos_x === tab[0].length - 1) return 0;
            else if (tab[pos_y + 1][pos_x + 1] === '.') return getOccupiedSeat(tab, pos_x + 1, pos_y + 1, direction);
            else if (tab[pos_y + 1][pos_x + 1] === '#') return 1;
            else return 0;
        default:
            return 0;
    }
}

const countOccupied = (tab, pos_x, pos_y) => {
    var result = 0;

    result += getOccupiedSeat(tab, pos_x, pos_y, "LEFT-UP");
    result += getOccupiedSeat(tab, pos_x, pos_y, "UP");
    result += getOccupiedSeat(tab, pos_x, pos_y, "RIGHT-UP");
    result += getOccupiedSeat(tab, pos_x, pos_y, "LEFT");
    result += getOccupiedSeat(tab, pos_x, pos_y, "RIGHT");
    result += getOccupiedSeat(tab, pos_x, pos_y, "LEFT-DOWN");
    result += getOccupiedSeat(tab, pos_x, pos_y, "DOWN");
    result += getOccupiedSeat(tab, pos_x, pos_y, "RIGHT-DOWN");
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
            } else if (tab[i][j] === '#' && countOccupied(tab, j, i) >= 5) {
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