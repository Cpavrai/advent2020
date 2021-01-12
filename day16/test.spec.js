const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 16", () => {
    describe("Part 1", () => {
        it("Should return 71", () => expect(firstFunc([
["class: 1-3 or 5-7",
"row: 6-11 or 33-44",
"seat: 13-40 or 45-50"],
["your ticket:",
"7,1,14"],
["nearby tickets:",
"7,3,47",
"40,4,50",
"55,2,20",
"38,6,12"]
        ])).to.equal(71))
        it("Should return undefined", () => expect(firstFunc()).to.be.undefined)
        it("Should return null", () => expect(firstFunc([])).to.be.null)
    })
    describe("Part 2", () => {
        it("Should return 132", () => expect(secondFunc([
["class: 0-1 or 4-19",
"class row: 0-5 or 8-19",
"seat: 0-13 or 16-19"],
["your ticket:",
"11,12,13"],
["nearby tickets:",
"3,9,18",
"15,1,5",
"5,14,9"]
        ], "class")).to.equal(132))
        it("Should return undefined", () => expect(secondFunc()).to.be.undefined)
        it("Should return null", () => expect(secondFunc([])).to.be.null)
            
    })
})