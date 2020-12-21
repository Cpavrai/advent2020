const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 9", () => {
    describe("Part 1", () => {
        it("Should return 127", () => expect(firstFunc([
35,
20,
15,
25,
47,
40,
62,
55,
65,
95,
102,
117,
150,
182,
127,
219,
299,
277,
309,
576
        ], 5)).to.equal(127))
        it("Should return undefined", () => expect(firstFunc()).to.be.undefined)
        it("Should return null", () => expect(firstFunc([])).to.be.null)
    })
    describe("Part 2", () => {
        it("Should return 62", () => expect(secondFunc([
35,
20,
15,
25,
47,
40,
62,
55,
65,
95,
102,
117,
150,
182,
127,
219,
299,
277,
309,
576
        ], 5)).to.equal(62))
        it("Should return undefined", () => expect(secondFunc()).to.be.undefined)
        it("Should return null", () => expect(secondFunc([])).to.be.null)
    })

})