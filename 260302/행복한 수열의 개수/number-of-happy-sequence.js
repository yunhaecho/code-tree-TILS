const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

const row = () => {
        let cnt = 0
    let same = 0
    for (let row = 0; row < n; row++) {
        same = 0
        for (let idx = 0; idx < n - 1; idx++) {
            if (grid[row][idx] === grid[row][idx + 1]) {
                same++
                if (same >= m-1) {
                    cnt++
                    break
                }
            } else {
                same=0
            }
        }
    }
    return cnt
}

const col = () => {
    let cnt = 0
    let same = 0
    
    for (let col = 0; col < n; col++) {
        same = 0
        for (let idx = 0; idx < n - 1; idx++) {
            if (grid[idx][col] === grid[idx + 1][col]) {
                same++
                if (same >= m-1) {
                    cnt++
                    break
                }
            } else {
                same=0
            }
        }
    }
    return cnt

}

function checkHappy (dir) {
    if(dir === "row") {
        return row()
    } else {
        return col()
    }
}

const searchRow = checkHappy("row");
const searchCol = checkHappy("col");

console.log(m === 1 ? n*2: searchRow + searchCol)
