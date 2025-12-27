const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);
// console.log(arr)
// Please Write your code here.

function solution() {
    if(n === 1) return 1

    let cnt = 0                             //[7,7,7,7,7,5,7]
    let cntArr = Array(arr.length).fill(0) //[1,2,3,4,5,1,1]
    
    for(let i = 0; i< arr.length; i++) { 
        if(i === 0 ) {
            cnt++
            cntArr[0] = cnt
            // console.log(cntArr)
            continue
        }

        if(arr[i] != arr[i-1]) {
            cnt = 1
            cntArr[i] = cnt
            // console.log(cntArr)
        }

        if(arr[i] === arr[i-1]) {
            cnt++
            cntArr[i] = cnt
            // console.log(cntArr)
        }
    }

    return Math.max(...cntArr)
}
console.log(solution())