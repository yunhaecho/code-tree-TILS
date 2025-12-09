const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
let cnt = 0

function solution (num) {

    if(num === 1) return cnt

    if(num % 2) {
        num = Math.floor(num / 3)
    } else {
        num = Math.floor(num / 2)
    }
    cnt++
    return solution(num)  
}
console.log(solution(n))