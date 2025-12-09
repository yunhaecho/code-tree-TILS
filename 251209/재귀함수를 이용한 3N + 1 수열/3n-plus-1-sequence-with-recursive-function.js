const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

// Please Write your code here.

let cnt = 0

function solution (n) {
    if(n === 1) return cnt
    
    if(n % 2) {
        cnt++
        return solution(n*3+ 1)
    } else {
        cnt++
        return solution(Math.floor( n / 2))
    }

}
solution(n)
console.log(cnt)