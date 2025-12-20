const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.

function solution() {
    let tile = Array(200000 + 1).fill(0) //200000
    let W = Array(200000 + 1).fill(0) //200000
    let B = Array(200000 + 1).fill(0) //200000
    let s  = 100000 //100000
    let b = 0
    let g = 0
    let w = 0
    let e = s
    for (let i = 0; i < commands.length; i++) {
        const order = commands[i]
        let step = Number(order[0])
        const dir = order[1]
        
        if (dir === "R") {
            e = s + step
        } else if (dir === "L") {
            s = e - step
         }

        for (let j = s; j < e; j++) {
            if (tile[j] === "X") continue

            if (dir === "R") {
                tile[j] = "B"
                B[j]++
            }

            if (dir === "L") {
                 tile[j] = "W" 
                 W[j]++
            }

            if (tile[j] != "X" && B[j] >= 2 && W[j] >= 2 ) {
                tile[j] = "X" 
                g++
            }
        }
    }

    // console.log(tile)

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