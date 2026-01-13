const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// Please Write your code here.
const inRange = (x,y,n) => {
    return 1 <= x && x <= n && 1 <= y && y <= n
}

function solution() {
    const dx = [-1,0,0,1]
    const dy = [0, -1,1,0]
    let nx = r
    let ny = c
    
    const dirChar = {}
    dirChar['U'] = 0
    dirChar['D'] = 3
    dirChar['L'] = 1
    dirChar['R'] = 2
    
    let dirNum = dirChar[d]

    //4초동안 반복하면서
    for (let i = 0; i < t; i++) {
        if (!inRange(nx +dx[dirNum],ny+dy[dirNum],n)) {
            dirNum = 3 - dirNum
            continue
        }
            nx += dx[dirNum]
            ny += dy[dirNum]
}
    return [nx,ny]

}
console.log(solution().join(" "))