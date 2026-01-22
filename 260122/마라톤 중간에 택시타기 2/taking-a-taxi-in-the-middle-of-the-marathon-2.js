const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = Array.from({length: n}, (_, i) => input[i + 1].split(' ').map(Number));

// Please Write your code here.

const calculate = (x1,y1,x2,y2) => {
    return Math.abs((x1-x2)) + Math.abs((y1 - y2)) 
}

function solution() {
    let min = Number.MAX_SAFE_INTEGER;

    
    for(let i = 1; i < n-1; i++) {
        let jumpIdx = i
        let sum = 0
        let [cx,cy] = arr[0]

        for(let j = 1; j < n; j++) {
            if(jumpIdx === j) continue
            let [nx, ny] = arr[j]
            sum += calculate(cx,cy,nx,ny)
            cx = nx
            cy = ny
        }
        min = Math.min(sum,min)
    }

    return min

}

console.log(solution())