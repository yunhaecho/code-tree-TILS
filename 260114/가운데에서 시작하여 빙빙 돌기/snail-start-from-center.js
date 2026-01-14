const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.
const inRange = (x,y) => {
    return 0 <= x && x < n && 0 <= y && y < n
}

function solution() {

    const arr = Array(n).fill(0).map(() => Array(n).fill(0))
    let dirNum = 0

    const dx = [0,-1,0,1]
    const dy = [-1,0,1,0]
    let x = n-1
    let y = n-1
    let num = n*n

    while(num > 0) {

        if(arr[x][y] === 0){
            arr[x][y] = num--
        }

        let nx = x + dx[dirNum]
        let ny = y + dy[dirNum]

        if(!inRange(nx,ny)||arr[nx][ny] !== 0 ) {
            dirNum = (dirNum + 1) % 4
            nx = x + dx[dirNum]
            ny = y + dy[dirNum]
        }

        x = nx
        y = ny

    }

    arr.map((line) => console.log(line.join(" ")))
}

solution()

