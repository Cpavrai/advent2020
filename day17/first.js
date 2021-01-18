const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split('\n')

const initPositiveCubes = (myInput) => {
    var positiveCubes = new Set();

    myInput = myInput.map(e => e.split(''));
    for (let y = 0; y < myInput.length; y++) {
        const line = myInput[y];
        for (let x = 0; x < line.length; x++) {
            if (line[x] === '#') positiveCubes.add(`${x}:${y}:0`);
        }
    }
    return positiveCubes;
}

const listNeighbors = (xyz) => {
    const neighbors = [];
    const [rootx, rooty, rootz] = xyz.split(':').map(e => +e);
    const range = [-1, 0, 1];

    range.map(z => {
        range.map(y => {
            range.map(x => {
                neighbors.push(`${x + rootx}:${y + rooty}:${z + rootz}`)
            })
        })
    })
    return neighbors;
};

const cycle = (oldPositiveCubes) => {
    const cubesSet = new Set([...oldPositiveCubes].map(e => listNeighbors(e)).flat());

    return [...cubesSet].reduce((positiveCubes, key) => {
        const numberOfNeighbors = listNeighbors(key).reduce((count, cube) => (oldPositiveCubes.has(cube) && cube !== key ? count + 1 : count), 0);
  
        if (oldPositiveCubes.has(key) && numberOfNeighbors >= 2 && numberOfNeighbors <= 3) {
            positiveCubes.add(key);
        } else if (!oldPositiveCubes.has(key) && numberOfNeighbors === 3) {
            positiveCubes.add(key);
        }
  
        return positiveCubes;
    }, new Set());
}

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    var positiveCubes = initPositiveCubes(myInput), index = 0;

    while (index < 6) {
        positiveCubes = cycle(positiveCubes);
        index++;
    }
    return positiveCubes.size;
}

// console.log(myFunc(input))
module.exports = myFunc