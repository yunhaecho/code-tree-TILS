const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.

function solution(n) {
    if(n === 0) return;
    for (let i = n; i > 0; i--) {
        process.stdout.write("*" + " ")
    }
    console.log()
    solution(n - 1)
}

function solution1(n) {
    if( n === 0 ) return;
    solution1(n - 1) // sol5 sol 4 sol 3 sol2 
    for (let i = 0; i < n; i++) {
        process.stdout.write("*" + " ")
    }
    console.log()
}

solution(n)
solution1(n)



