const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

function solution() {
    if (n === 1) {
        console.log(1)
        return;
    }

    let isEnd = false;

    for (let i = 0; i < n; i++) {
        for (let j = k - 1; j < k + m - 1; j++) {

            if (grid[i][j]) {
                isEnd = true;
                break;
            }
        }

        if (isEnd) {
            for (let j = k - 1; j < k + m - 1; j++) {
                grid[i - 1][j] = 1
            }
            break;
        }
    }

    if (isEnd === false) {
        for (let j = k - 1; j < k + m - 1; j++) {
            grid[n - 1][j] = 1
        }
    }

    for (const row of grid) {
        console.log(row.join(" "))
    }

}

solution()

