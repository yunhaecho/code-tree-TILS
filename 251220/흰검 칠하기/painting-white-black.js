const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.

function solution() {
    let tile = Array(20 + 1).fill(0) //20
    let W = Array(20 + 1).fill(0) //20
    let B = Array(20 + 1).fill(0) //20
    let cur  = 10 //100000 
     
    let b = 0
    let g = 0
    let w = 0
    
    for (let i = 0; i < commands.length; i++) {
        const order = commands[i]
        let step = Number(order[0])
        const dir = order[1]

        let s = 0
        let e = 0
    
        if (dir === "R") {
            s = cur
            e = cur + step
            cur = e - 1
        } else if (dir === "L") {
            s = cur - step +  1
            e = cur + 1
            cur = s
            }
        for (let j = s; j < e; j++) {
            if (dir === "R") {
                tile[j] = "B"
                B[j]+=1
            }

            if (dir === "L") {
                 tile[j] = "W" 
                 W[j]+=1
            }

            if (B[j] >= 2 && W[j] >= 2) {
                tile[j] = "X" 
            }
        }
    } 

    for (let k = 0; k < tile.length; k++) {
        if (tile[k] === "W") w+=1;
        else if (tile[k] === "B") b+=1;
        else if (tile[k] === "X") g+=1;
    }

    console.log(w, b, g) 
}
solution()