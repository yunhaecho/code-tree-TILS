const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const commands = input[1];
const board = input.slice(2, 2 + n).map(row => row.split(' ').map(Number));
// Please Write your code here.

const inRange = (x,y) => {
    return 0 <= x && x <n && 0<=y && y<n
}

function solution () {
    const dx = [-1,0,1,0] 
    const dy = [0,1,0,-1]

    let x = Math.floor(n / 2)
    let y = Math.floor(n / 2)
    let sum = board[x][y]
    let dirNum = 0

    for(const order of commands) 
        if(order === "R") {
            dirNum = (dirNum + 1) % 4
        } else if(order === "L") {
            dirNum = (dirNum + 3) % 4
        } else {
            let nx = x + dx[dirNum]
            let ny = y + dy[dirNum]
            
            if(!inRange(nx,ny)) continue
            // console.log(nx,ny,dirNum)
            sum+= board[nx][ny]
            x = nx
            y = ny
            // console.log(board[x][y],sum)
        }
     
    return sum
}

console.log(solution())