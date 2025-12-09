const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please Write your code here.

let arr = [2,4]
let num = 0
function solution (n) {
    if(n == 1) return arr[0]
    if(n == 2) return arr[1]
    //arr[4] sol(2) * sol(3) % 100
    arr[n] = (solution(n-2) * solution(n-1)) % 100
    return arr[n]
}// sol(2) * sol(3)

console.log(solution(N))