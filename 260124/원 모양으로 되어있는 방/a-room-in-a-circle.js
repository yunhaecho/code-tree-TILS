const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);

// Please Write your code here.
function solution () {
    let sum = 0
    let min = 1000
    for(let i = -2; i < n; i++) {
        sum = 0
        let startRoom = (i + 1) % n
        for(let j = 0; j < n; j++) { 
            const moveTo = (startRoom + 1) % n
            const personnel = arr[moveTo] 
            sum += (personnel * j) 
            startRoom++
        }
        min = Math.min(min,sum)
    }
    return min
}

console.log(solution())