const fs = require("fs");
let n = fs.readFileSync(0).toString().trim().split("\n")
let nums = n.slice(1)
let sum = 0

for (let num of nums) {
    sum += Number(num)
}

let str = sum.toString().slice(1) + sum.toString().slice(0,1)

console.log(str)