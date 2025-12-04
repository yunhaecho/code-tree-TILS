const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.\

function solution(A) {
    let isDiff = false
    for (let i = 0 ; i < A.length ; i++ ) {
        if(A[0] != A[i]) return true
    }
    return false
}
if(solution(A)) {
    console.log("Yes")
} else {
    console.log("No")
}
