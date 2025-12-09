const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

// Please write your code here.

function factorial (num) {
    if(num === 1) return 1

    return factorial(num-1) * num
}

console.log(factorial(N))