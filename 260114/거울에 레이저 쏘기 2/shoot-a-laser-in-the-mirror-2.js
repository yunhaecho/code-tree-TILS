const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1);
const startNum = Number(input[n + 1]);

// Please Write your code here.
const dx = [-1,0,1,0]
const dy = [0,1,0,-1]

const inRange = (x,y) => {
    return 0<=x&& x<n&& 0<= y && y<n
}

const getPosition = () => {
    const position = Array(n).fill(0).map(() => Array(n).fill(10))
    let num = 1
    let x = 0
    let y = 0
    let dirNum = 1
    
    for(let i = 0; i<n; i++) {
        for(let j = 0; j< n; j++) {
            let nx = x + dx[dirNum]
            let ny = y + dy[dirNum]

            if(!inRange(nx,ny)) {
                dirNum = (dirNum + 1) % 4
                nx = x + dx[dirNum]
                ny = y + dy[dirNum]
            }
            x = nx
            y = ny
            position[x][y] = num++
            
        }
    }

    console.log(position)

    // if(!inRange(x,y))
}


function solution () {


    let x = 0
    let y = 1
    let dirNum = 0

    while(inRange(x,y)) {

    }





}

getPosition()


