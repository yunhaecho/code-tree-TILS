const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.

function solution () {

    let x = 0 
    let y = 0
    const dirNum = ["E","W","S","N"];
    const dirX = [1,-1,0,0]
    const dirY = [0,0,-1,1]

    for(let i = 0; i < moves.length; i++) {
        const [dir, num] = moves[i].split(" ")
        for(let j = 0; j < Number(num); j++) {
            x += dirX[dirNum.indexOf(dir)]
            y += dirY[dirNum.indexOf(dir)]
        }
            }
        
    return [x,y]
}

console.log(solution().join(" "))