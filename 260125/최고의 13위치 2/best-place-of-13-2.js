const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please write your code here.

function solution() {
    let max = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < n - 1 ; i++) {
        for (let j = 0; j < n - 3; j++) {
            for (let x = i + 1; x < n; x++) {
                for (let y = 0; y < n - 3; y++) {
                    const box1 = grid[i][j] + grid[i][j+1] + grid[i][j+2]
                    const box2 = grid[x][y] + grid[x][y+1] + grid[x][y+2]
                    console.log(box1, box2)
                    const sum = box1 + box2
                    max = Math.max(max, sum)
                }
            }
        }
    }
    return max

}

console.log(solution())