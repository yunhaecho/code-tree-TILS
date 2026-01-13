const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.

const inRange = (x, y) => {
    return 0 <= x && x < n && 0 <= y && y < m;
}

function solution() {
    const dx = [0, 0, 1, 0, -1]
    const dy = [0, 1, 0, -1, 0]
    let arr = Array(n).fill(0).map((elem) => elem = Array(m).fill(0))
    let num = 1
    let dirNum = 1
    let x = 0
    let y = 0
    arr[x][y] = num++

    while( num <= n*m ) {
            let nx = x + dx[dirNum]
            let ny = y + dy[dirNum]
            
            if (!inRange(nx, ny) || arr[nx][ny] !== 0) {
                dirNum = dirNum % 4 + 1
                nx = x + dx[dirNum]
                ny = y + dy[dirNum]
            }
            x = nx
            y = ny
            arr[x][y] = num++
    }

    arr.map((line) => console.log(line.join(" ")))
}

solution()