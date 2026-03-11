const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m, k] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
let start = 0
let isEnd = false
for(let i = 1; i < n; i++){
    for(let j = k-1; j < k+m-1; j++) {
        // console.log(i,j)
        if(grid[i][j] === 1) {
            isEnd = true
            // console.log('i=',i,j)
            break;
        } 
    }

    if(isEnd) {
        for(let j = k-1; j < k+m-1; j++) {
            grid[i-1][j] = 1 
        }
        break
    }

}

for(const row of grid ){
    console.log(row.join(" "))
}