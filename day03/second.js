const fs = require("fs");
const path = require("path");
// const input = fs.readFileSync(path.resolve(__dirname, "./firstinput"), "utf-8").split("\r\n");

const myFunc = (myInput, rightPerLine, downPerLine) => {
  var result = 0;
  return new Promise((resolve, reject) => {
    if (myInput.length < 2) reject(null);
    const data = myInput
      .slice(downPerLine)
      .filter((_, index) => index % downPerLine === 0);
    data.forEach((line, lineIndex) => {
      if (line[((lineIndex + 1) * rightPerLine) % line.length] == "#") result++;
      if (lineIndex == data.length - 1) resolve(result);
    });
  });
};

const loopFunc = (myInput) => {
  return new Promise((resolve, reject) => {
    Promise.all([
      myFunc(myInput, 1, 1),
      myFunc(myInput, 3, 1),
      myFunc(myInput, 5, 1),
      myFunc(myInput, 7, 1),
      myFunc(myInput, 1, 2),
    ])
      .then((res) => {
        resolve(res.reduce((a, b) => a * b));
      })
      .catch(() => reject(null));
  });
};

// loopFunc(input).then((res) => console.log("res", res));
module.exports = loopFunc;
