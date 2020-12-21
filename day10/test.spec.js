const expect = require("chai").expect
const firstFunc = require("./first")
const secondFunc = require("./second")

describe("Day 10", () => {
    describe("Part 1", () => {
        it("Should return 35", () => expect(firstFunc([
16,
10,
15,
5,
1,
11,
7,
19,
6,
12,
4
        ])).to.equal(35))
        it("Should return 220", () => expect(firstFunc([
28,
33,
18,
42,
31,
14,
46,
20,
48,
47,
24,
23,
49,
45,
19,
38,
39,
11,
1,
32,
25,
35,
8,
17,
7,
9,
4,
2,
34,
10,
3
        ])).to.equal(220))
        it("Should return undefined", () => expect(firstFunc()).to.be.undefined)
        it("Should return null", () => expect(firstFunc([])).to.be.null)
    })
    describe("Part 2", () => {
        it("Should return 8", () => expect(secondFunc([
16,
10,
15,
5,
1,
11,
7,
19,
6,
12,
4
        ])).to.equal(8))
        it("Should return 19208", () => expect(secondFunc([
28,
33,
18,
42,
31,
14,
46,
20,
48,
47,
24,
23,
49,
45,
19,
38,
39,
11,
1,
32,
25,
35,
8,
17,
7,
9,
4,
2,
34,
10,
3
        ])).to.equal(19208))
        it("Should return undefined", () => expect(secondFunc()).to.be.undefined)
        it("Should return null", () => expect(secondFunc([])).to.be.null)
    })
//     describe("Part 2", () => {
//         it("Should return 62", () => expect(secondFunc([
// 35,
// 20,
// 15,
// 25,
// 47,
// 40,
// 62,
// 55,
// 65,
// 95,
// 102,
// 117,
// 150,
// 182,
// 127,
// 219,
// 299,
// 277,
// 309,
// 576
//         ], 5)).to.equal(62))
//         it("Should return undefined", () => expect(secondFunc()).to.be.undefined)
//         it("Should return null", () => expect(secondFunc([])).to.be.null)
//     })

})