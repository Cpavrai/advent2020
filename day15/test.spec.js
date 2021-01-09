const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 15", () => {
    describe("Part 1", () => {
        it("Should return 436", () => expect(firstFunc("0,3,6")).to.equal(436))
        it("Should return undefined", () => expect(firstFunc()).to.be.undefined)
        it("Should return null", () => expect(firstFunc([])).to.be.null)
    })
    describe("Part 2", () => {
        it("Should return 175594", () => expect(secondFunc("0,3,6")).to.equal(175594))
        it("Should return undefined", () => expect(secondFunc()).to.be.undefined)
        it("Should return null", () => expect(secondFunc([])).to.be.null)
    })
})