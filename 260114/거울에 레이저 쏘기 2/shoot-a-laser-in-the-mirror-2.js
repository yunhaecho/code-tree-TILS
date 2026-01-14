const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1);
const startNum = Number(input[n + 1]);

// Please Write your code here.


const inRange = (x, y) => {
    return 0 <= x && x < n && 0 <= y && y < n
}

const getPosition = (startNum) => {
    const dirNum = Math.floor((startNum - 1) / n) // 0 1 2 3
    const offset = (startNum - 1) % n // 0 1 2
    let x = 0
    let y = 0
    if (dirNum === 0) {
        x = dirNum
        y = offset
    } else if (dirNum === 1) {
        x = offset
        y = 2
    } else if (dirNum === 2) {
        x = dirNum
        y = dirNum - offset
    } else if (dirNum === 3) {
        x = 2 - offset
        y = 0
    }

    return [x, y, dirNum]

}


function solution() {

    let [x, y, dirNum] = getPosition(startNum).map((elem) => Number(elem))

    let cnt = 0
    const dx = [-1, 0, 1, 0]
    const dy = [0, 1, 0, -1]

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {


            if (dirNum === 0 || dirNum === 1) {
                if (arr[x][y] === "/") {
                    dirNum = (dirNum + 1) % 4
                } else {
                    dirNum = (dirNum + 3) % 4
                }
            } else if (dirNum === 2 || dirNum === 3) {
                if (arr[x][y] === "/") {
                    dirNum = (dirNum + 3) % 4
                } else {
                    dirNum = (dirNum + 1) % 4
                }
            }

            let nx = x + dx[dirNum]
            let ny = y + dy[dirNum]

            x = nx
            y = ny
            cnt++
            if(!inRange(nx,ny)) return cnt

        }
    }


}

console.log(solution())


