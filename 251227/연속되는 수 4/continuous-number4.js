const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0])
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
function solution() {
    let max = 1
    let curLen = 0
    
    if (n === 1) return 1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            curLen++
            if(curLen > max) max = curLen
        } else {
            curLen = 1
        }
    }
    if(curLen > max) max = curLen
    
    return max

}

console.log(solution())