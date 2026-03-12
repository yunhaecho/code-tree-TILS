const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => 
    line.trim().split(/\s+/).map(Number)
);
// Please Write your code here.

function solution() {

    let targetRow = 0;

    for (let i = 0; i < n; i++) {
        let canGo = true;
        for (let j = k - 1; j < k + m - 1; j++) {
            if (grid[i][j]) {
                canGo = false;
                break;
            }
        }

        if (canGo) {
            targetRow = i
        } else {
            break;
        }
    }

    for (let j = k - 1; j < k + m - 1; j++) {
        grid[targetRow][j] = 1
    }

    for (const row of grid) {
        console.log(row.join(" "))
    }

}

solution();

