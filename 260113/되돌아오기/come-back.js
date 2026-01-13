const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const moves = input.slice(1);
// Please Write your code here.

function solution() {
    const dx = [0,0,1,-1]
    const dy = [1,-1,0,0]

    const dir = {}
        dir["E"] = 0
        dir["W"] = 1
        dir["S"] = 2
        dir["N"] = 3
    
    let x = 0
    let y = 0
    let cnt = 0
    for(let i = 0; i < n; i++) {
        const [d, distance] = moves[i].split(" ")
        let dirNum = dir[d]

        for(let j =0; j < Number(distance); j++) {
            x += dx[dirNum]
            y += dy[dirNum]
            cnt++
            if(x === 0 && y === 0) return cnt
        }  
    }
    return -1
}

console.log(solution())