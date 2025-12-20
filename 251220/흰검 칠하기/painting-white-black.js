const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
// const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.

function solution() {
    let arr = Array(20+1).fill(0) //200000
    let s = 10 //100000

    let b = 0
    let g = 0
    let w = 0

    for(let i = 0; i < commands.length; i++) {
        const order = commands[i]
        const e = Number(order[0])
        const dir = order[1]
        
        for(let j = s; j <= e; j++) {
            if(arr[i] === 0 && w >= 2 || arr[i] === 0 && b >= 2 ) {
                i = "X"
                g++
            }

            if(arr[i] === "X") continue

            if(dir === "R") {
                b++
                arr[i]++
            }

            if(dir === "L") {
                w++
                arr[i]--
            }
        }
    }
    return arr
}

console.log(solution())