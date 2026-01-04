const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

// Please Write your code here.

function record (moves) {
    let loc = 0
    const location = []

    for(let i = 0; i < moves.length; i++)   {
        const [num, dir]  = moves[i].split(" ")
        for(let j = 0; j < Number(num); j++) {
            if(dir === "R") loc += 1
            if(dir === "L") loc -= 1
            location.push(loc)
        }
    }

    return location
}

function solution () {
    const a = record(movesA)
    const b = record(movesB)

    let aBefore = 0
    let bBefore = 0
    let aCur = 0
    let bCur = 0
    let cnt = 0

    if(a.length != b.length) {
        let min;
        let max; 
        if(a.length > b.length) {
        max = a
        min = b
        
    } else if(a.length < b.length) {
        max = b
        min = a
    }
    const last = min[min.length-1]
    const times = max.length - min.length

    for(let i = 0; i < times; i++) {
            min.push(last)
        }
    }

    for(let i = 1; i < a.length; i++) {
        aBefore = a[i-1]
        bBefore = b[i-1]
        aCur = a[i]
        bCur = b[i]

        if(i > 1) {
            if(aBefore === bBefore) continue

            if(aCur === bCur) cnt++
        }
    }
    return cnt

}

console.log(solution())