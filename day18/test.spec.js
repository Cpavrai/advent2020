const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 18", () => {
    describe("Part 1", () => {
        it("Should return 26", () => expect(firstFunc([
"2 * 3 + (4 * 5)"
        ])).to.equal(26))
        it("Should return 463", () => expect(firstFunc([
"2 * 3 + (4 * 5)",
"5 + (8 * 3 + 9 + 3 * 4 * 3)"
        ])).to.equal(463))
        it("Should return undefined", () => expect(firstFunc()).to.be.undefined)
        it("Should return null", () => expect(firstFunc([])).to.be.null)
    })
    describe("Part 2", () => {
        it("Should return 669060", () => expect(secondFunc([
"5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"
        ])).to.equal(669060))
        it("Should return undefined", () => expect(secondFunc()).to.be.undefined)
        it("Should return null", () => expect(secondFunc([])).to.be.null)
    })
})