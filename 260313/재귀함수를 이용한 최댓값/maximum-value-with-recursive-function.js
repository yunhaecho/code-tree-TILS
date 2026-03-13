const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
// // [1 5 7 9 2 6]

// let max = 0
// let idx = n - 1 

function maxValue(a) {
    if (a === 0) return arr[0];

    return Math.max(maxValue(a - 1), arr[a]);
}

console.log(maxValue(n - 1));