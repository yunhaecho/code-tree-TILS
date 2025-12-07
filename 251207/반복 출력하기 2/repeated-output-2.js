const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

function solution (n) {
    if( n == 0) return;
    solution(n-1) //n = 4 n = 3 n = 2 n = 1  n = 0
    console.log("HelloWorld");
}

solution(n);