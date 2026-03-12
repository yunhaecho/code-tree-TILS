const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, t] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const marbles = input.slice(1 + n, 1 + n + m).map(line => line.split(' ').map(Number));

// Please Write your code here.
let curr = Array(n).fill(0).map(() => Array(n).fill(0))

for (let i = 0; i < m; i++) {
    const [x, y] = marbles[i]
    curr[x - 1][y - 1] = 1
}

const dirX = [-1, 1, 0, 0]
const dirY = [0, 0, -1, 1]

let x = 0
let y = 0
let maxX = 0
let maxY = 0
let times = t
let cnt = 0

while (times > 0) {
    let next = Array(n).fill(0).map(() => Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (curr[i][j]) {
                let max = 0

                for (let k = 0; k < 4; k++) {
                    x = i + dirX[k]
                    y = j + dirY[k]
                    if (0 <= x && x < n && 0 <= y && y < n) {
                        const curVal = grid[x][y]
                        if (curVal > max) {
                            max = curVal
                            maxX = x
                            maxY = y
                        }
                    }
                }
                next[maxX][maxY]++
            }
        }
    }

    let nextCurr = Array(n).fill(0).map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (next[i][j] === 1) {
                nextCurr[i][j] = 1;
            }
        }
    }
    curr = nextCurr;
    times--
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (curr[i][j]) cnt++
    }
}

console.log(cnt)