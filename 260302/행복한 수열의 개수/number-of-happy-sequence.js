const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

const searchGrid = (N, M, dir) => {
    if (M === 1) return N * 2

    let same= 0
    let cnt = 0

    for (let line = 0; line < N; line++) {
        if (same >= M-1) cnt++
        // same = 0
        for (let idx = 0; idx < N - 1; idx++) {
            if (dir === "row") {
                if (grid[line][idx] === grid[line][idx + 1]) {
                    same++
                } else {
                    same=0
                }
            } else {
                if (grid[idx][line] === grid[idx + 1][line]) {
                    same++
                } else {
                    same=0
                }
            }
        }
    }
    return cnt
}

const row = searchGrid(n,m,"row");
const col = searchGrid(n, m, "col");

console.log(row+col)
