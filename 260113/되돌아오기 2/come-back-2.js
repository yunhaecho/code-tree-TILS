const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];
// Please Write your code here.

function solution() {
    const dx = [-1, 0, 1, 0]
    const dy = [0, 1, 0, -1]

    let x = 0
    let y = 0
    let cnt = 0

    const dir = {}
    dir["N"] = 0
    dir["E"] = 1
    dir["S"] = 2
    dir["W"] = 3

    let dirNum = 0

    for (const order of commands) {
        if (order === "R") {
            dirNum += 1
        } else if (order === "L") {
            dirNum -= 1
        }

        if (order === "F") {
            x += dx[dirNum]
            y += dy[dirNum]
        }
            cnt++
        if (x === 0 & y === 0) return cnt

    }

    return -1
}

console.log(solution())