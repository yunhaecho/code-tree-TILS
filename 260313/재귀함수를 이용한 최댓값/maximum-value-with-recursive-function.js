const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
// [1 5 7 9 2 6]

let max = 0
let idx = n - 1 

function solution(idx) {
    if(idx === -1) return;
    solution(idx-1)
    max = Math.max(max,arr[idx]);
    return max
}

console.log(solution(idx))