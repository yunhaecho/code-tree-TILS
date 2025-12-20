const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.

function solution() {
    let tile = Array(20 + 1).fill(0) //200000
    let W = Array(20 + 1).fill(0) //200000
    let B = Array(20 + 1).fill(0) //200000
    let s  = 10 //100000
    let b = 0
    let g = 0
    let w = 0
    let e;
    for (let i = 0; i < commands.length; i++) {
        const order = commands[i]
        let step = Number(order[0])
        const dir = order[1]
        
        if (dir === "R") {
            e = s + step
        } 

        if (dir === "L") {
            e = s
            s = e - step
         }

        for (let j = s; j < e; j++) {

            if (tile[i] === "X") continue

            if (dir === "R") {
                tile[i] = "B"
                B[i]++
            }

            if (dir === "L") {
                 tile[i] = "W" 
                 W[i]++
            }

            if (tile[i] != "X" && B[i] >= 2 && W[i] >= 2 ) {
                tile[i] = "X" 
                g++
            }
        }
    }

    console.log(tile)
    
    tile.forEach((color) => {
        if(color === "B") {
            b++
        } else if (color === "W") {
            w++
        }
    })

    console.log(w, b, g) 
}

solution()