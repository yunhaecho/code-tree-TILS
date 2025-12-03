const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];
// Please Write your code here.

function solution (str) {
    let reversed = str.split("").reverse().join("")
    if( reversed === str ) {
        return "Yes"
    } else {
        return "No"
    }
}

let res = solution(str)
console.log(res)