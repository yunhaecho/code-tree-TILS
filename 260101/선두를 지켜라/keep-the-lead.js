const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

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
    const positionA = recordLocation(aData)
    const positionB = recordLocation(bData)
    const status = []
    
    for(let i = 0; i < positionA.length; i++) {
        if(positionA[i] > positionB[i] ) {
            status.push("a")
        } else if(positionA[i] < positionB[i]) {
            status.push("b")
        }
    }

    for(let i = 1; i < status.length; i++) {
        if(status[i] != status[i - 1]) cnt++
    }

    return cnt
}

console.log(solution())