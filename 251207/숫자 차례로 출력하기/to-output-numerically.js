const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.
function solution(n) {
    if(n === 0) return; // n = 7
    solution(n-1) // sol(6) ... sol(1)
    process.stdout.write(n.toString() + " ")
}
function solution1(n) {
    if( n === 0 ) return;
    process.stdout.write(n.toString() + " ")
    solution1(n-1) //sol(7)
}

solution(n)
console.log()
solution1(n)

// console.log(result)
// console.log(result1)