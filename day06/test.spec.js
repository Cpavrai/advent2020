const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 3", () => {
    describe("Part 1", ()=> {
        it("Should resolve 6", () => firstFunc(
`abcx
abcy
abcz`
        ).then((res) => expect(res).to.equal(6)))
        it("Should resolve 11", () => firstFunc(
`abc

a
b
c

ab
ac

a
a
a
a

b`
        ).then((res) => expect(res).to.equal(11)))
        it("Should reject undefined", () => firstFunc([]).catch((err) => expect(err).to.be.undefined))
        it("Should reject null", () => firstFunc().catch((err) => expect(err).to.be.null))
    })
    describe("Part 2", () => {
        it("Should resolve 6", () => secondFunc(
`abc

a
b
c

ab
ac

a
a
a
a

b`
        ).then((res) => expect(res).to.equal(6)))
        it("Should reject undefined", () => secondFunc([]).catch((err) => expect(err).to.be.undefined))
        it("Should reject null", () => secondFunc().catch((err) => expect(err).to.be.null))
    })
})