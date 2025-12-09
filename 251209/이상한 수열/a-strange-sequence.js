const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);
// Please Write your code here.
let cnt = 2
let arr =[1,2]

function solution (n) {//5
    if(n === 1) return arr[0]
    if(n === 2) return arr[1]

    arr[n] = solution(Math.floor(n/3)) + solution(n-1)
    return arr[n]
}

console.log(solution(n))