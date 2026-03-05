const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const [r, c] = input[1 + n].split(' ').map(Number);

// Please Write your code here.
const bombSize = grid[r - 1][c - 1]
grid[r - 1][c - 1] = 0

const dropNumber = (grid) => {
    const minCol = c - 1 - (bombSize - 1) < 0 ? 0 : c - 1 - (bombSize - 1)
    const maxCol = c - 1 + (bombSize - 1) >= n ? n - 1 : c - 1 + (bombSize - 1)

    for (let i = minCol; i <= maxCol; i++) {
        let arr = []
        for (let j = 0; j < n; j++) {
            arr.push(grid[j][i])
        }

        arr = arr.filter((num) => num != 0)
        const arrLen = arr.length
        for (let j = 0; j < n - arrLen; j++) {
            arr.unshift(0)
        }

        for (let j = n - 1; j >= 0; j--) {
            let num = arr.pop()
            grid[j][i] = num
        }
    }
    return grid
}

const dirX = [0, -1, 0, 1]//좌상우하
const dirY = [-1, 0, 1, 0]
//0으로 바꾸기 작업
let x = r - 1
let y = c - 1

for (let dir = 0; dir < 4; dir++) {
    for (let _ = 0; _ < bombSize - 1; _++) {

        let curX = x + dirX[dir]
        let curY = y + dirY[dir]

        if (0 <= curX && curX < n && 0 <= curY && curY < n) {
            grid[curX][curY] = 0
        }
        x = curX
        y = curY
    }
    x = r - 1
    y = c - 1

}

const result = dropNumber(grid);

for (let row of result) {

    console.log(row.join(" "))
}

