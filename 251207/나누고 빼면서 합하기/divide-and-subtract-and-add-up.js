const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.

let sum = 0

function solution (m,A) {
    while(m  > 0 ) {
    
    if( m === 0 ) {
        break
    }

    sum += A[m-1]

    if( m % 2 ) {
        m -= 1
    } else {
        m = Math.floor(m / 2)
    } 

    }
    return sum
}

const result = solution(m, A)
console.log(result)






