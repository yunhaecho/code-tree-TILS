const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');


const n = Number(input[0]);
const segments = input.slice(1).map((arr) =>  arr.split(" ").map(Number))
// Please write your code here.
function solution() {
    const arrLen = 200
    const offSet = 100
    let arr = Array(arrLen+1).fill(0)

    for(let i = 0; i < segments.length; i++) {
        const interval = segments[i]
        let [s, e] = interval

        s += offSet
        e += offSet              

        for(let j = s; j < e; j++) {
            arr[j]++
        }
    }
    return Math.max(...arr)
}
console.log(solution())