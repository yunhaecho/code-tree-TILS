const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

function solution () {
    let sum = 0
    for(const num of arr) {
        sum += num
    }

    let min = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j<n; j++) {
            let excludeSum = (sum - (arr[i] + arr[j]))

            min = Math.min(min, Math.abs(s-excludeSum))
        }
    }

    return min
}

console.log(solution())