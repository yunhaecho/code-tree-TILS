const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);
let result = []
let len = []

// Please Write your code here.

function solution () {
    if(n === 1) return 1

    for(let i = 0; i < arr.length; i++) {
        if(i === 0 ) {
            result.push(arr[i])
            continue
        }

        if(arr[i] > 0 && arr[i-1] < 0 || arr[i] < 0 && arr[i-1] > 0) {
            len.push(result.length)
            result = []
        } 
        result.push(arr[i])
    }
    len.push(result.length)

    return Math.max(...len)

}

console.log(solution())