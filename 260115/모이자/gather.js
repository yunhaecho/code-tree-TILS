const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
function solution() {
    const intMax = Number.MAX_SAFE_INTEGER;
    let minVal = intMax;

    for(let i = 0; i < n; i++) {
    let sum = 0
        for(let j = 0; j < arr.length; j++) {
            sum += Math.abs(i - j ) * arr[j]
        }
        minVal = Math.min(minVal, sum)
    }

    return minVal
}

console.log(solution())