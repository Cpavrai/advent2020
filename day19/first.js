const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split('\n\n').map(e => e.split('\n'))

const defineRegexp = (ruleSet, rule, n=0) => {
    return n > 4 ? "" : rule[0] === '"'
        ? rule[1]
        : `(?:${rule.split(" | ").map(e => e.split(" ")
            .map(elem => defineRegexp(ruleSet, ruleSet.get(+elem), ruleSet.get(+elem) === rule ? n + 1 : 0))
            .join("")
        ).join("|")})`;
}

const myFunc = ([srcRules, srcMessages]) => {
    if (srcRules === undefined || srcMessages === undefined) return undefined;
    const rules = new Map();
    var RES = 0;

    srcRules.map(e => rules.set(Number(e.split(": ")[0]), e.split(": ")[1]))
    const r = new RegExp(`^${defineRegexp(rules, rules.get(0), 0)}$`);

    srcMessages.map(e => (r.test(e) && (RES++)));
    return (RES);
}

// console.log(myFunc(input))
module.exports = myFunc