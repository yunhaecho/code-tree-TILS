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

function solution() {
    //1초엔 인덱스가 어디인지 
    let a = Array(1000001).fill("")
    let b = Array(1000001).fill("")
    // start = 0 idx
    let curT = 1
    let loc = 0

    for (let i = 0; i < n; i++) {
        const [dir, count] = movesA[i]
        // curT += count
        // console.log(curT, count)
        for (let j =  curT; j < curT + count; j++) {
            if (dir === "R") {
                loc++
                a[j] = loc
            } else {
                loc--
                a[j] = loc
            }
        }
        curT += count
    }

    curT = 1
    loc = 0
    for (let i = 0; i < m; i++) {
        const [dir, count] = movesB[i]
        for (let j =  curT; j < curT + count; j++) {
            if (dir === "R") {
                loc++
                b[j] = loc
            } else {
                loc--
                b[j] = loc
            }
        }
        curT += count
    }

    for(let i = 1; i < a.length; i++) {
        if(a[i] === "" || b[i] === "") return -1

        if(a[i] === b[i])return i
    }

}

console.log(solution())