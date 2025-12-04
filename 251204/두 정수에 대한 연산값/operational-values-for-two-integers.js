const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b] = input[0].split(" ").map(Number);
// Please Write your code here.

function solution(a,b) {
    if(a > b) {
        return [ a + 25, b*2]
    } else if(a < b){
        return [ a * 2, b + 25]

    }
}

const result = solution(a,b)
console.log(result.join(" "))