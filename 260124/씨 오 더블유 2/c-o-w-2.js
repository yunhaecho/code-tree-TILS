const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const string = input[1];

// Please Write your code here.

function solution(){
    let cnt = 0
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            for(let k = j+1; k <n; k++) {
            if(string[i] === "C" && string[j] === "O" && string[k] ==="W") cnt++
            }
        }
    }
    return cnt
}

console.log(solution())