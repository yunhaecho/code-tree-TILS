const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
  segments.push(input[i].split(' ').map(Number));
}

// Please Write your code here.

function solution() {
    let arr = Array(100+1).fill(0)

    for(let interval of segments) {
        const [s,e] = interval
        for(let i = s ; i <= e; i++) {
            arr[i]++
        }
    }

    return Math.max(...arr)
}

console.log(solution())