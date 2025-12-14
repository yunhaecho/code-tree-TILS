const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.

function countTime() {
    const startT = a * 60 + b
    const endT = c * 60 + d
    return Math.abs(startT-endT)
}

console.log(countTime())