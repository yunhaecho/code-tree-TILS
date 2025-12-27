const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(Number);
// console.log(arr)
// Please Write your code here.

function solution() {
    if(n === 1) return 1

    let cnt = 0                             //[2,7,7,7,7,5,7]
    let cntArr = Array(arr.length).fill(0) //[1,0,0,0,0,0,0]
    for(let i = 0; i< arr.length-1; i++) { //6
        if(arr[i] === arr[i+1]) {
            cnt++
            cntArr[i+1] = cnt
            // console.log(cntArr)
        }

        if(arr[i] != arr[i+1]) {
            cnt = 0
            cnt++
            cntArr[i+1] = cnt
            // console.log(cntArr)
        }
    }


    return Math.max(...cntArr)
}
console.log(solution())