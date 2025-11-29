const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let [qty , str] = input[0].split(" ")
let strs = input.slice(1)
let cnt = 0

for(let char of strs) {
    if(char === str) cnt++
}

console.log(cnt)