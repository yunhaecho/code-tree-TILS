const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

const searchGrid = (N, M, dir) => {
    if (M === 1) return N * 2

    let same= 0
    let cnt = 0

    for (let row = 0; row < N; row++) {
        if (same >= M-1) cnt++
        for (let idx = 0; idx < N - 1; idx++) {
            if (grid[row][idx] === grid[row][idx + 1]) {
                same++
            } else {
                same=0
            }
        }
    }

    same=0

    for (let col = 0; col < N; col++) {
        if (same >= M-1) cnt++
        for (let idx = 0; idx < N - 1; idx++) {
            if (grid[idx][col] === grid[idx + 1][col]) {
                same++
            } else {
                same=0
            }
        }
    }
    return cnt
}

const result = searchGrid(n,m);

console.log(result)
