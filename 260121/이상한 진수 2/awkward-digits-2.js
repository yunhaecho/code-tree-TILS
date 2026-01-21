const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

// Please Write your code here.
const digit = a.length

const convert = (num) => {
    let decimal = 0

    for(let i = 0; i < digit;i++) {
        if(num[i]) {
            decimal += 2**(digit - (i+1))
        }
    }
    return decimal
}

function solution() {
const binary = a.split("").map(Number)
let max = convert(binary);

    for (let i = 0; i < digit; i++) {
        if (binary[i] === 0) {
            const numArr = a.split("").map(Number)
            numArr[i] = 1
            let number = convert(numArr)
            max = Math.max(number,max)
        }
    }
    return  max
}

console.log(solution())
// solution()