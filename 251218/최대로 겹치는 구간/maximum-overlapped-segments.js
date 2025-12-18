const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');


const n = Number(input[0]);
const segments = input.slice(1).map((arr) =>  arr.split(" ").map(Number))

// Please write your code here.
function solution() {
    const arrLen = 200
    let arr = Array(arrLen).fill(0)
    let isNagative = false

    for(let i = 0; i < segments.length; i++) {
        const interval = segments[i]
        let [s,e] = interval

        if(s < 0 || e < 0) isNagative = true

        if(isNagative) {
            s += arrLen
            e += arrLen
        }

        for(let j = s; j < e; j++) {
            arr[j]++
        }
    }

    return Math.max(...arr)

}
console.log(solution())