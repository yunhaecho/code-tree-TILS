const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const result = []

for(let i = 0; i< n; i++) {
    let min = Math.min(...arr);
    let minIdx = arr.indexOf(min)
    result.push(min)
    arr.splice(minIdx,1)
}

console.log(result.join(" "))