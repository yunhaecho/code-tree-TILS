const fs = require("fs");
let n = fs.readFileSync(0).toString().trim()
let sum = 0

for(let num of n) {
    sum += Number(num)
}

console.log(sum)