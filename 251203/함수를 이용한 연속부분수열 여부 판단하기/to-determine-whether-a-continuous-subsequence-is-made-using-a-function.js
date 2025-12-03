const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ")
let b = input[2].split(" ")

// Please Write your code here.
//b가 a에 연속부분수열인지 
function solution (a,b) {

    const len = b.length
    for(let i = 0; i<= a.length - len; i++) {
        let compare = a[i] + a[i+1] + a[i+2]
        if(compare === b.join("")) return "Yes"
    }
    return "No"
    
}

console.log(solution(a,b))
