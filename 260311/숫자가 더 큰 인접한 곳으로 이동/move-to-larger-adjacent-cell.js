const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, currX, currY] = input[0].split(' ').map(Number);
let grid = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.

//우선순위 1 :  숫자보다 더 큰 곳으로 이동
//우선순위 2 : 상하좌우 -> 이 아래 왼쪽 오른쪽
// 상 : -1,0 하: 1,0 좌: 0,1 우: 0,-1

//1. 현재 값을 구한다. 
//2. 상하좌우방향으로 움직인다. 4번
//2-1 현재 값이랑 비교한다.
//2-2. 현재 값보다 크면 해당 위치로 이동한다. 
//curVal값을 candidate[0]으로 수정한다. 
//for문을 다시 반복한다.
//해당 for문을 빠져나오면 이제 isBigger= false가 된다. 

let x = currX-1
let y = currY-1

function solution() {
    const order = []
    const dirX = [-1, 1, 0, 0]//상하좌우
    const dirY = [0, 0, -1, 1]
    let curVal = grid[x][y]
    order.push(curVal)

    while (true) {
        let isBigger = false

        for (let i = 0; i < 4; i++) {
            const nextX = x + dirX[i]
            const nextY = y + dirY[i]
            // console.log(i,nextX, nextY)

            if (0 <= nextX && nextX < n && 0 <= nextY && nextY< n) {
                let nextVal = grid[nextX][nextY]

                if (nextVal > curVal) {

                    curVal = nextVal
                    x = nextX
                    y = nextY
                    // console.log(curVal)
                    order.push(curVal)
                    isBigger = true
                    break;
                }

            }
        }
        if(isBigger === false) {
            break;
        }
    }
    return order.join(" ")
}

console.log(solution())