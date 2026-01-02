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
    let cnt = -1
    const positionA = recordLocation(aData)
    const positionB = recordLocation(bData)

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
        } 
        
    }

    return cnt
}

console.log(solution())