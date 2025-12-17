const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please write your code here.
function solution() {
    let max = 0
    let min = 0
    let isNegative = false

    for(let j = 0; j < segments.length; j++) {
        const interval = segments[j]
        for(let i = 0; i < 2; i++) {
            if(interval[i] < min) {
                min = interval[i]
                isNegative = true
            }
        }
    }

    for(let j = 0; j < segments.length; j++) {
        const interval = segments[j]
        for(let i = 0; i < 2; i++) {
            if(isNegative) {
                interval[i] = interval[i] + Math.abs(min)
            }
            
            if(interval[i] > max) max = interval[i]

        }
    }

    let arr = Array(max).fill(0)

    for(let i = 0 ; i < segments.length; i++) {
        const [s,e] = segments[i]
        for(let j = s; j < e; j++) {
            arr[j]++
        }
    }
    return Math.max(...arr)
}
console.log(solution())