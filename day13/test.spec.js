const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 13", () => {
    describe("Part 1", () => {
        it("Should return 295", () => expect(firstFunc([
"939",
"7,13,x,x,59,x,31,19"
        ])).to.equal(295))
        it("Should return undefined", () => expect(firstFunc()).to.be.undefined)
        it("Should return null", () => expect(firstFunc([])).to.be.null)
    })
    describe("Part 2", () => {
        it("Should return 1068781", () => expect(secondFunc([
"939",
"7,13,x,x,59,x,31,19"
        ])).to.equal(1068781))
        it("Should return 754018", () => expect(secondFunc([
"939",
"67,7,59,61"
        ])).to.equal(754018))
        it("Should return 3417", () => expect(secondFunc([
"939",
"17,x,13,19"
        ])).to.equal(3417))
        it("Should return 779210", () => expect(secondFunc([
"939",
"67,x,7,59,61"
        ])).to.equal(779210))            
        it("Should return undefined", () => expect(secondFunc()).to.be.undefined)
        it("Should return null", () => expect(secondFunc([])).to.be.null)
    })
})