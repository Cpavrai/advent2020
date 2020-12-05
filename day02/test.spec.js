const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 2", () => {
    describe("Part 1", ()=> {
        it("Should resolve 2", () => firstFunc(["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"]).then((res) => expect(res).to.equal(2)))
        it("Should resolve 0", () => firstFunc(["1-3 b: cdefg"]).then((res) => expect(res).to.equal(0)))
        it("Should resolve 2", () => firstFunc(["1-3 a: abcde", "2-9 c: ccccccccc"]).then((res) => expect(res).to.equal(2)))
        it("Should reject null", () => firstFunc(["-3 a: abcde"]).catch((err) => expect(err).to.be.null))
    })
    describe("Part 2", ()=> {
        it("Should resolve 1", () => secondFunc(["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"]).then((res) => expect(res).to.equal(1)))
        it("Should resolve 0", () => secondFunc(["1-3 b: cdefg", "2-9 c: ccccccccc"]).then((res) => expect(res).to.equal(0)))
        it("Should reject null", () => secondFunc(["1- a: abcde", "2-9 c: ccccccccc"]).catch((err) => expect(err).to.be.null))
    })
})