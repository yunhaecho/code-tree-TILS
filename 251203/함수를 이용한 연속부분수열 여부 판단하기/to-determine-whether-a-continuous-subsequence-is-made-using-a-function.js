const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
//b가 a에 연속부분수열인지 
function solution (a,b) {
    if(!a.join("").includes(b.join(""))) return "No"
    return "Yes"
}

console.log(solution(a,b))
