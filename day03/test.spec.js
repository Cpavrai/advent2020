const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 3", () => {
    describe("Part 1", ()=> {
        it("Should resolve 7", () => firstFunc(["..##.......",
        "#...#...#..",
        ".#....#..#.",
        "..#.#...#.#",
        ".#...##..#.",
        "..#.##.....",
        ".#.#.#....#",
        ".#........#",
        "#.##...#...",
        "#...##....#",
        ".#..#...#.#"]).then((res) => expect(res).to.equal(7)))
        it("Should resolve 1", () => firstFunc(["..##....",
        "#...#...",
        ".#....#."]).then((res) => expect(res).to.equal(1)))
        it("Should reject null", () => firstFunc(["..##.........##.........##.........##........"]).catch((err) => expect(err).to.be.null))
    })
    describe("Part 2", () => {
        it("Should return 336", () => secondFunc(["..##.......",
        "#...#...#..",
        ".#....#..#.",
        "..#.#...#.#",
        ".#...##..#.",
        "..#.##.....",
        ".#.#.#....#",
        ".#........#",
        "#.##...#...",
        "#...##....#",
        ".#..#...#.#"]).then((res) => expect(res).to.equal(336)))
    })
})