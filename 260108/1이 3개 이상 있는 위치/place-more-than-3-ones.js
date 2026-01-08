const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.

function solution () {

    const dx = [-1,1,0,0]
    const dy = [0,0,-1,1]

    let cntOne = 0
    let cntThree = 0

    for(let i = 0; i< n; i++) {
        if(i < n) {
            for(let j = 0; j < n; j++) {
                if(j < n) {
                    
                    if(grid[i][j] === 1) cntOne++
                }
                if(cntOne >= 3) cntThree++
            }
        }
    }

    return cntThree
}