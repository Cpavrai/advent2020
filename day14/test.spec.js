const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 14", () => {
    describe("Part 1", () => {
        it("Should return 165", () => expect(firstFunc([
"mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X",
"mem[8] = 11",
"mem[7] = 101",
"mem[8] = 0"
        ])).to.equal(165))
        it("Should return undefined", () => expect(firstFunc()).to.be.undefined)
        it("Should return null", () => expect(firstFunc([])).to.be.null)
    })
    describe("Part 2", () => {
        it("Should return 208", () => expect(secondFunc([
"mask = 000000000000000000000000000000X1001X",
"mem[42] = 100",
"mask = 00000000000000000000000000000000X0XX",
"mem[26] = 1"
        ])).to.equal(208))
        it("Should return undefined", () => expect(secondFunc()).to.be.undefined)
        it("Should return null", () => expect(secondFunc([])).to.be.null)
    })
})