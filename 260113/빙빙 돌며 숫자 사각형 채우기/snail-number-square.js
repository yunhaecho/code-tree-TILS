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
    let num = 2
    let dirNum = 1
    let nx = 0
    let ny = 0
    arr[nx][ny] = 1

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {

            if (!inRange(nx + dx[dirNum], ny + dy[dirNum]) || arr[nx + dx[dirNum]][ny + dy[dirNum]] > 0) {
                dirNum = dirNum % 4 + 1
            }

            nx += dx[dirNum]
            ny += dy[dirNum]
            if( arr[nx][ny] > 0) continue
            arr[nx][ny] = num
            num+=1
        }
    }

    arr.map((line) => console.log(line.join(" ")))

}
solution()