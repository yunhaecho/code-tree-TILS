const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ")
let sum = 0
let cnt = 0
for(let num of input) {
    sum += Number(num)
}

for(let num of sum.toString()) {
    if(num === "1") cnt++
}

console.log(cnt)

