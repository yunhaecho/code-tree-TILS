const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here

function solution() {
    let cost = 0
    let min = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < n; i++) {
        if (i >= t) {
            min = Math.min(min, cost)
        }

        if(arr[i] < h) {
            for (let j = 0; j < Math.abs(h - arr[i]); j++) {
                arr[i]++
                cost++
            }
        }
    }
    return min
}

console.log(solution())