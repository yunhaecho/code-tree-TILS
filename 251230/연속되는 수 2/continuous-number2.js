const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);
// Please Write your code here.

function solution() {
    if(n === 1) return 1
    let cnt = 0                             
    let k = 0

    for(let i = 0; i < arr.length; i++) { 
        if(i >= 1 && arr[i] === arr[i-1]){
            cnt += 1
        } else {
            cnt = 1
        }

        k = Math.max(cnt,k)
    }

    return k
}
console.log(solution())