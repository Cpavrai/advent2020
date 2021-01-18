const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 17", () => {
    describe("Part 1", () => {
        it("Should return 112", () => expect(firstFunc([
".#.",
"..#",
"###"
        ])).to.equal(112))
        it("Should return undefined", () => expect(firstFunc()).to.be.undefined)
        it("Should return null", () => expect(firstFunc([])).to.be.null)
    })
    describe("Part 2", () => {
        it("Should return 848", () => expect(secondFunc([
".#.",
"..#",
"###"
        ])).to.equal(848))
        it("Should return undefined", () => expect(secondFunc()).to.be.undefined)
        it("Should return null", () => expect(secondFunc([])).to.be.null)
    })
})