const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

function solution() {
    const result = []
    let sum = 0
    for(let i = 0; i < n; i++) {
        const curHome = i + 1
        for(let j = 0; j < arr.length; j++) {
            const person = arr[j]
            const homeNum = j + 1
            const distance = Math.abs(curHome - homeNum ) * person
            sum += distance
        }
        result.push(sum)
        sum = 0
    }
        return Math.min(...result)

}

console.log(solution())