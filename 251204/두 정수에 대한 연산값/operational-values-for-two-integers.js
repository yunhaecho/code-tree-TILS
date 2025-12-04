const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function solution(a,b) {
    const max = Math.max(a,b)
    const min = Math.min(a,b)
    return [min*2 ," ", max + 25]
}

const result = solution(a,b)
console.log(result.join(""))