const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1);
const startNum = Number(input[n + 1]);

// Please Write your code here.


const inRange = (x, y) => {
    return 0 <= x && x < n && 0 <= y && y < n
}

const getPosition = (startNum) => {
    const dirNum = Math.floor((startNum - 1) / n) // 0 1 2 3
    const offset = (startNum - 1) % n // 0 1 2
    let moveDir;
    let x = 0
    let y = 0
    if (dirNum === 0) {
        x = dirNum
        y = offset
        moveDir = 2
    } else if (dirNum === 1) {
        x = offset
        y = n - 1
        moveDir = 3
    } else if (dirNum === 2) {
        x = n-1
        y = n-1 - offset
        moveDir = 0
    } else if (dirNum === 3) {
        x = n - 1 - offset
        y = 0
        moveDir = 1
    }
    return [x, y, moveDir]
}

function solution() {
    let [x, y, dirNum] = getPosition(startNum).map((elem) => Number(elem))

    let cnt = 0
    const dx = [-1, 0, 1, 0]
    const dy = [0, 1, 0, -1]

    while (inRange(x, y)) {
        if(arr[x][y] === "/") {
            dirNum = dirNum ^ 1
        } else {
            dirNum  = 3 - dirNum
        }
        x += dx[dirNum]
        y += dy[dirNum]
        cnt++
    }
    return cnt
}

console.log(solution())


