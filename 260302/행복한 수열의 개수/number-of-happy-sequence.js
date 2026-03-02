const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const grid = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.


const checkHappy = (arr) => {
    let cnt =0 
    let same = 0
    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i] === arr[i+1]) {
            same++
            if (same >= m-1) {
                    cnt++
                    break
                }
        } else {
            same = 0
        }
    }
    return cnt
}

function solution () {
    let result = 0
    
    for(let row = 0; row < n; row++) {
        const rowArr = grid[row]
        result += checkHappy(rowArr);
    }

    for(let col = 0; col < n; col++) {
        let colArr = []
        for (let idx = 0; idx < n; idx++) {
            colArr.push(grid[idx][col])
        }
        result += checkHappy(colArr)
    }

    return result
}


console.log(m === 1 ? n*2: solution())
