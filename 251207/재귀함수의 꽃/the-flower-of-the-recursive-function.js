const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

// Please Write your code here.

function solution(n) {
    if(n === 0) return;
    process.stdout.write(n + " ")
    solution(n - 1)
}

function solution1(n) {
    if( n === 0 ) return;
    solution1(n - 1) 
    process.stdout.write(n + " ")
}

solution(n)
solution1(n)