const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\n")

class Ship {
    x = 0;
    y = 0;
    waypoint_x = 10;
    waypoint_y = -1;

    north(value) {
        this.waypoint_y -= value;
    }
    east(value) {
        this.waypoint_x += value;
    }
    south(value) {
        this.waypoint_y += value;
    }
    west(value) {
        this.waypoint_x -= value;
    }
    left(value) {
        let tmp_x = this.waypoint_x, tmp_y = this.waypoint_y;
        switch (value / 90) {
            case 1:
                this.waypoint_x = tmp_y;
                this.waypoint_y = -1 * tmp_x;
                break;
            case 2:
                this.waypoint_x = -tmp_x;
                this.waypoint_y = -tmp_y;
                break;
            case 3:
                this.waypoint_x = -1 * tmp_y;
                this.waypoint_y = tmp_x;
                break;
        }
    }
    right(value) {
        let tmp_x = this.waypoint_x, tmp_y = this.waypoint_y;
        switch (value / 90) {
            case 1:
                this.waypoint_x = -1 * tmp_y;
                this.waypoint_y = tmp_x;
                break;
            case 2:
                this.waypoint_x = -tmp_x;
                this.waypoint_y = -tmp_y;
                break;
            case 3:
                this.waypoint_x = tmp_y;
                this.waypoint_y = -1 * tmp_x;
                break;
        }
    }
    forward(value) {
        this.x += value * this.waypoint_x;
        this.y += value * this.waypoint_y;
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