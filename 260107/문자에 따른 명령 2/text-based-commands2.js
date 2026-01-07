const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

// Please Write your code here.
function solution() {
    const dx = [1,0,-1,0]
    const dy = [0,-1,0,1]

    let x = 0
    let y = 0
    let dirNum = 3

    for(const order of commands) {
        
        if(order === 'L') {
            dirNum = (dirNum + 3) % 4
        } else if(order === "R") {
            dirNum = (dirNum + 1) % 4
        }
        
        if(order === "F") {
            x += dx[dirNum]
            y += dy[dirNum]
        }
    }

    return [x,y]

}

console.log(solution().join(" "))