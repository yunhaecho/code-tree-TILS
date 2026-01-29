const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please write your code here.

function solution() {
    let max = Number.MIN_SAFE_INTEGER
    let start = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 2; j++) {
            start.push([i,j])
        }
    }

    for (let i = 0; i < start.length; i++) {
        for (let j = i+1; j < start.length; j++) {
            const [x1,y1] = start[i]
            const [x2,y2] = start[j]

            if (x1 !== x2 || (x1 === x2 && y1 + 2 < y2)) {
            const box1 = grid[x1][y1] + grid[x1][y1+1] + grid[x1][y1+2]
            const box2 = grid[x2][y2] + grid[x2][y2+1] + grid[x2][y2+2]
            max = Math.max(max, box1 + box2)
            }

        }
    }
    return max

}

console.log(solution())