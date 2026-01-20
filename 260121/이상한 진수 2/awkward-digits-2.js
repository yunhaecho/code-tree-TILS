const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

// Please Write your code here.
const digit = a.length
const binary = a.split("").map(Number)

function solution(num) {
    for(const char of num) {
        if(char === "1") {
            const idx = num.indexOf(char)
            decimal += 2**(digit - (idx+1))
        }
    }

    max = Math.max(decimal, max) // 12, 12
    
    for (let i = idx; i < binary.length; i++) {
        if (binary[i] === 0) {
            binary[i] = 1
            decimal = solution(binary.join(""))
        }
    }

    return max
}

console.log(solution(a))