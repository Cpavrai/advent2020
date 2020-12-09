const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 8", () => {
    describe("Part 1", () => {
        it("Should return 5", () => expect(firstFunc([
"nop +0",
"acc +1",
"jmp +4",
"acc +3",
"jmp -3",
"acc -99",
"acc +1",
"jmp -4",
"acc +6"
        ])).to.equal(5))
        it("Should return undefined", () => expect(firstFunc()).to.be.undefined)
        it("Should return 0", () => expect(firstFunc([])).to.equal(0))
    })
    describe("Part 2", () => {
        it("Should return 8", () => expect(secondFunc([
"nop +0",
"acc +1",
"jmp +4",
"acc +3",
"jmp -3",
"acc -99",
"acc +1",
"jmp -4",
"acc +6"
        ])).to.equal(8))
        it("Should return undefined", () => expect(secondFunc()).to.be.undefined)
        it("Should return 0", () => expect(secondFunc([])).to.equal(0))
    })

})