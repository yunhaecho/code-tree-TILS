const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

function solution() {
    let max = -1000

    for(let i = 0; i < n; i++) {
        for(let j = i+2; j < n; j++) {
            max = Math.max(arr[i]+arr[j],max)
        }
    }

    return max

}

console.log(solution())