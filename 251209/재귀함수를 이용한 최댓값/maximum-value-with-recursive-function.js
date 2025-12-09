const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.
// [1 5 7 9 2 6]

let max = arr[0]
function solution(elem) {
    if(arr.length === 0) return max
    if(elem > max) max = elem

    return solution(arr.pop())
}

console.log(solution())