const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.

function solution () {
    let arr = Array(40 + 1).fill(0)
    let s = 20

    for(let i = 0; i < commands.length; i++) {
        const order = commands[i] 
        let e = Number(order[0])
        const d = order[1]

        console.log(d)

        if(d === "R") {
            e += s // e = 2 + 20 = 22
            console.log(s,e)
            arr[s]++
            arr[e]++
        } else {
            e = s - e
            arr[s]++
            arr[e]++
        }
        s = e //
    }
    // return arr
}

console.log(solution())