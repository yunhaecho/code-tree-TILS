const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

let max = -10000

for(let i = 0; i< n-2; i++) {
    for(let j = 0; j <n-2; j++) {
        let sum = 0
        for(let k = j; k < j+3; k++){
            let boxCnt = grid[k][i] + grid[k][i+1] +grid[k][i+2]
            sum += boxCnt
        }
        max = Math.max(sum,max)
    }
}

console.log(max)