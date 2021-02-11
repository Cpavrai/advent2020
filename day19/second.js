const fs = require("fs");
const path = require("path")
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split('\n\n').map(e => e.split('\n'))

const defineRegexp = (ruleSet, rule, index=0) => {
    if (rule[index]) return rule[index];// if yet knowing result, we return it fast
    else if (index === 0) {
        let ruleStr = [];

        for (let ni = 1; ni <= 9; ni++)
            ruleStr.push(`(?:${defineRegexp(ruleSet, rule, 42)}{${ni + 1},}${defineRegexp(ruleSet, rule, 31)}{${ni}})`);
        return (rule[index] = `(?:${ruleStr.join("|")})`);
    }
    else
        return (rule[index] = "(?:" + ruleSet[index].map(g => "(?:" + g.map(i => defineRegexp(ruleSet, rule, i)).join("") + ")").join("|") + ")");
}

const myFunc = ([srcRules, srcMessages]) => {
    if (srcRules === undefined || srcMessages === undefined) return undefined;
    const rules = [], rulesResult = [];
    var RES = 0;

    // initialise the rules from first input's part
    srcRules.map(e => {
        let [id, value] = e.split(": ");

        if (value[0] === '"') {
            rules[id] = value[1];
            rulesResult[id] = value[1];
        } else {
            rules[id] = value
                .split(" | ")
                .map(g => g.split(" ").map(n => +n));
        }
    })
    const r = new RegExp(`^${defineRegexp(rules, rulesResult, 0)}$`);
    
    // compute the compliant messages number
    srcMessages.map(e => (r.test(e) && (RES++)));
    return (RES);
}

// console.log(myFunc(input))
module.exports = myFunc