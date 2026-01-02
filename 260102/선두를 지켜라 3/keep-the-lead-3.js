const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let index = 0;
const [n, m] = input[index++].split(' ').map(Number);
let A_moves = [];
for (let i = 0; i < n; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  A_moves.push([v, t]);
}
let B_moves = [];
for (let i = 0; i < m; i++) {
  const [v, t] = input[index++].split(' ').map(Number);
  B_moves.push([v, t]);
}

// Please Write your code here.

function recordLocation (data) {
    const distance = []
    let location = 0

    for(let i = 0; i < data.length; i++) {
        const [v,t] = data[i]
        for(let j = 0; j < t; j++) {
            location += v
            distance.push(location)
        }
    }

    return distance
}

function solution() {
    let cnt = 0
    const positionA = recordLocation(A_moves)
    const positionB = recordLocation(B_moves)

    let status = "start"

    for(let i = 0; i < positionA.length; i++) {
        if(positionA[i] > positionB[i]) {
            if(status === "a") continue
            status = "a"
            cnt++
        } else if(positionA[i] < positionB[i]) {
            if(status === "b") continue

            status = "b"
            cnt++
        } else if(positionA[i] === positionB[i]) {
        if(status === "a,b") continue
          status = "a,b"
          cnt++
        }
        
    }

    return cnt
}

console.log(solution())