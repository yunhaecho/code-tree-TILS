const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.
function solution(arr) {
    let result = ""
    for(let i = 0 ; i<arr.length; i++) {
        if(arr[i] >= 0) {
            result += arr[i] + " "
        } else {
            result += Math.abs(arr[i]) + " "
        }
    }
    console.log(result)
}

solution(arr)

