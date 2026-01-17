const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const grid = input.slice(1).map(line => line.trim().split(' '));

// Please Write your code here.

function solution() {
    let x;
    let y;
    
    for(let i = 0; i< n; i++) {
        for(let j = 0; j < ; j++) {
            x = i
            y = j
            const cur = grid[x][y] {

            }
            if(cur === grid[x+1][y+1]) continue
        }
    }

}

console.log(solution())