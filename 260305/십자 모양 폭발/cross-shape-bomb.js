const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map(line => line.trim().split(/\s+/).map(Number));
const [r, c] = input[1 + n].split(' ').map(Number);

// Please Write your code here.
const bombSize = grid[r - 1][c - 1]
grid[r - 1][c - 1] = 0

const dropNumber = (grid) => {
    for (let i = 0; i < n; i++) {
        let arr = []
        for (let j = 0; j < n; j++) {
            arr.push(grid[j][i])
        }

        arr = arr.filter((num) => num != 0)

        while( arr.length < n){
            arr.unshift(0)
        }

        for (let j = n - 1; j >= 0; j--) {
            grid[j][i] = arr.pop()
        }
    }
    return grid
}

const dirX = [0, -1, 0, 1]//좌상우하
const dirY = [-1, 0, 1, 0]
//0으로 바꾸기 작업

for (let dir = 0; dir < 4; dir++) {
    for (let dist = 1; dist < bombSize; dist++) {

        let curX = (r - 1) + dirX[dir] * dist
        let curY = (c - 1) + dirY[dir] * dist

        if (0 <= curX && curX < n && 0 <= curY && curY < n) {
            grid[curX][curY] = 0
        }
    }
}

const result = dropNumber(grid);

for (let row of result) {
    console.log(row.join(" "))
}

