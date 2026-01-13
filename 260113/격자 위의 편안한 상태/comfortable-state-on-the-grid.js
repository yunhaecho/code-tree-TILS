const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const moves = [];
for (let i = 1; i <= m; i++) {
    moves.push(input[i].split(" ").map(Number));
}

// Please Write your code here.

const inRange = (x, y) => {
    return 0 <= x && x < n && 0 <= y && y < n
}

function solution() {
    const dx = [-1, 1, 0, 0]
    const dy = [0, 0, -1, 1]
    let colorCnt = 0
    const arr = Array(n).fill(null).map(() => Array(n).fill(null))

    for (let cnt = 0; cnt < m; cnt++) {
        let [r, c] = moves[cnt]

        arr[r - 1][c - 1] = "o"

        if (cnt > 2) {
            for (let dirNum = 0; dirNum < dx.length; dirNum++) {
                let x = r - 1 + dx[dirNum]
                let y = c - 1 + dy[dirNum]

                if (inRange(x, y) && arr[x][y] === "o") {
                    colorCnt++
                }
            }
        }

        if (colorCnt === 3) {
            console.log(1)
        } else {
            console.log(0)
        }
        colorCnt = 0
    }
}

solution()