const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("First day", () => {
    describe("First part", ()=> {
        it("Should resolve 514579", () => firstFunc([1721, 979, 366, 299, 675, 1456]).then((res) => expect(res).to.equal(514579)))
        it("Should reject undefined", () => firstFunc([1721, 979]).catch((err) => expect(err).to.be.undefined))
        it("Should reject null", () => firstFunc([1721]).catch((err) => expect(err).to.be.null))
    })
    describe("Second part", ()=> {
        it("Should resolve 514579", () => secondFunc([1721, 979, 366, 299, 675, 1456]).then((res) => expect(res).to.equal(241861950)))
        it("Should reject undefined", () => secondFunc([1721, 979, 366]).catch((err) => expect(err).to.be.undefined))
        it("Should reject null", () => secondFunc([1721]).catch((err) => expect(err).to.be.null))
    })
})