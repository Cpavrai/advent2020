const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 5", () => {
    describe("Part 1", ()=> {
        it("Should resolve 820", () => firstFunc([
            "BFFFBBFRRR",
            "FFFBBBFRRR",
            "BBFFBBFRLL"
        ]).then((res) => expect(res).to.equal(820)))
        it("Should reject undefined", () => firstFunc([]).catch((err) => expect(err).to.be.undefined))
        it("Should reject null", () => firstFunc().catch((err) => expect(err).to.be.null))
    })
    describe("Part 2", () => {
        it("Should resolve 4", () => secondFunc([
            "FFFFFFFLRR",
            "FFFFFFFRLR",
            "BBBFFBFRLR"
        ]).then((res) => expect(res).to.equal(4)))
        it("Should reject undefined", () => secondFunc([
            "FFFFFFFLRR",
            "FBBFFFFRLR",
            "BBBFFBFRLR"
        ]).catch((err) => expect(err).to.be.undefined))
        it("Should reject null", () => secondFunc().catch((err) => expect(err).to.be.null))
    })
})