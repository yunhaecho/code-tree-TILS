const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.

function solution() {
    let x = 0
    let y = 0
    let color = grid[0][0]
    let restCnt = 3
    let caseCnt = 0

    for(let i = 1; i< R; i++) {
        for(let j = 1; j < C; j++) {
            if(color != grid[i][j] && restCnt > 0) {
                restCnt--
                color = grid[i][j]
                x = i
                y = j
                continue
            }

            if(restCnt === 0 ) return caseCnt
        }
    }
    return caseCnt
}

console.log(solution())