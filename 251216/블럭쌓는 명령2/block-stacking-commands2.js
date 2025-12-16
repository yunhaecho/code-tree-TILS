const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.4

function solution () {
    let arr = Array(n).fill(0)
    for(let i = 0; i < segments.length; i++) {
        const [s, e ] = segments[i]
        for(let j = s; j <=e; j++) {
            arr[j]++
        }
    }
    return Math.max(...arr)
}

console.log(solution())