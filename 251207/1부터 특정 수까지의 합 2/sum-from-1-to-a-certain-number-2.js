const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

let sum = 0
function solution (n) { //3
    if(n === 0) return;
    sum += n
    solution(n-1)
    return sum
}

console.log(solution(n))