const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.

let caseCnt = 0

function solution(x,y,places) {

    if(x === R -1 && y === C - 1){
        return places === 3 ? 1 : 0
    }

    let caseCnt = 0

    for(let i = x + 1 ; i< R; i++) {
        for(let j = y + 1 ; j < C; j++) {
            const currentColor = grid[x][y]
            const nextColor = grid[i][j]

            if(currentColor != nextColor) {
                caseCnt += solution(i,j,places+1)
            }
        }
    }

    return caseCnt
}

console.log(solution(0,0,0))