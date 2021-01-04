const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 12", () => {
    describe("Part 1", () => {
        it("Should return 25", () => expect(firstFunc([
"F10",
"N3",
"F7",
"R90",
"F11"
        ])).to.equal(25))
        it("Should return undefined", () => expect(firstFunc()).to.be.undefined)
        it("Should return null", () => expect(firstFunc([])).to.be.null)
    })
    describe("Part 2", () => {
        it("Should return 286", () => expect(secondFunc([
"F10",
"N3",
"F7",
"R90",
"F11"
        ])).to.equal(286))
        it("Should return undefined", () => expect(secondFunc()).to.be.undefined)
        it("Should return null", () => expect(secondFunc([])).to.be.null)            
    })
})