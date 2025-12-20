const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1, n + 1)

// Please Write your code here.

function solution () {
    let arr = Array(2000 + 1).fill(0)
    let interval = []
    let s = 1000
    let cnt = 0

    for(let i = 0; i < commands.length; i++) {
        const order = commands[i].split(" ")

        let e = Number(order[0])
        const d = order[1]

        if(d === "R") {
            e += s
            interval.push([s,e])
        }
        if(d === "L") {
            e = s - e
            interval.push([e,s])
        }
        s = e
    }

    for(let i = 0; i < interval.length; i++ ) {
        const [s,e] = interval[i]
        for(let j = s; j < e; j++) {
            arr[j]++
        }
    }

    arr.forEach((idx) => {
        if(idx >= 2) cnt++
    })

    return cnt
}

console.log(solution())