const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
// Please Write your code here.
const eg = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const inRange = (x,y) => {
    return 0 <= x && x < n && 0 <= y && y < m
}

function solution() {

    const arr = Array(n).fill(0).map(() => Array(m).fill(0))
    let dirNum = 0

    const dx = [0,1,0,-1]
    const dy = [1,0,-1,0]
    let x = 0
    let y = 0
    let num = 0
    let cnt = 0

    while(cnt < n*m) {

        if(arr[x][y] === 0 ){
            arr[x][y] = eg[num]
        }
        num++
        cnt++
        if(num === eg.length) num = 0

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