const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

// Please Write your code here.

const n  = a*b*c
function solution (num) {
    if( num < 10) return num;
    return (num % 10) + solution(Math.floor(num/10) )
} 

console.log(solution(n))