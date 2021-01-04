const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n")
const directions = ["N", "E", "S", "W"];

class Ship {
    x = 0;
    y = 0;
    direction = "E";

    north(value) {
        this.y -= value;
    }
    east(value) {
        this.x += value;
    }
    south(value) {
        this.y += value;
    }
    west(value) {
        this.x -= value;
    }
    left(value) {
        this.direction = directions[(4 + directions.indexOf(this.direction) - (value / 90)) % 4];
    }
    right(value) {
        this.direction = directions[(4 + directions.indexOf(this.direction) + (value / 90)) % 4];
    }
    forward(value) {
        switch(this.direction) {
            case 'N':
                this.north(value);
                break;
            case 'E':
                this.east(value);
                break;
            case 'S':
                this.south(value);
                break;
            case 'W':
                this.west(value);
                break;
        }
    }
    command([command, value]) {
        switch (command) {
            case 'N':
                this.north(value);
                break;
            case 'E':
                this.east(value);
                break;
            case 'S':
                this.south(value);
                break;
            case 'W':
                this.west(value);
                break;
            case 'R':
                this.right(value);
                break;
            case 'L':
                this.left(value);
                break;
            case 'F':
                this.forward(value);
                break;
        }
    }
    getTotalDistance() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
}

const myFunc = (myInput) => {
    if (myInput === undefined) return undefined;
    if (myInput.length === 0) return null;
    var index = 0;
    const commands = myInput.map(e => [e[0], parseInt(e.substr(1)) || 0]), ship = new Ship();

    while (index < commands.length) {
        ship.command(commands[index]);
        index++;
    }
    return (ship.getTotalDistance());
}

// console.log(myFunc(input))
module.exports = myFunc