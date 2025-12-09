const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function solution (num) {
    if(num === 1 || num === 2) return 1
    
    return solution(num-2) + solution(num-1)
}

console.log(solution(n))