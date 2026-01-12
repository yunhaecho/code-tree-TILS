const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

const inRange = (x, y) => {
    return x >= 0 && x < n && y >= 0 && y < n
}

function solution() {
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]

    let cntOne = 0
    let cntThree = 0

    let x = 0
    let y = 0

    for (let i = 0; i < n; i++) { //한 행만큼 = n
        for (let k = 0; k < n; k++) { //한 열에 대해서 
            for (let j = 0; j < dx.length; j++) { //4가지 방향에 대해서 
                let nx = i + dx[j]
                let ny = k + dy[j]

                if (inRange(nx, ny)) {
                    if (grid[nx][ny] === 1) {
                        cntOne += 1
                    }
                }
            }

            if (cntOne >= 3) cntThree++
            cntOne = 0
        }
    }
    return cntThree

}

console.log(solution())