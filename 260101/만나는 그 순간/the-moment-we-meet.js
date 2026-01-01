const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

// Please Write your code here.

function recordPosition(move) {
    let location = 0 

    let positions = []
     for (const [dir,count] of move) {
        const delta = dir === "R" ? 1 : -1

        for (let j = 0; j < count; j++) {
            location += delta
            positions.push(location)
        }
    }
    return positions
}

function solution() {
    //1초엔 인덱스가 어디인지 
    let a = Array(1000001).fill("")
    let b = Array(1000001).fill("")

    const positionA = recordPosition(movesA)
    const positionB = recordPosition(movesB)
    
    const length = Math.min(positionA.length, positionB.length)

    for(let i = 0; i < length; i++) {
        if(positionA[i] === positionB[i]) return i + 1
    }

    return -1

}

console.log(solution())