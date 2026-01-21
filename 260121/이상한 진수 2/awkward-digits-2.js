const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

// Please Write your code here.
const digit = a.length

const convert = (num) => {
    let decimal = 0

    if(num.length === 1) return 1

    for(let i = 0; i < digit;i++) {
        if(num[i]) {
            decimal += 2**(digit - (i+1))
        }
    }
    return decimal
}

function solution() {
if(a.length === 1) return 0
const binary = a.split("").map(Number)
let max = -100

    for (let i = 0; i < digit; i++) {
            const numArr = a.split("").map(Number)
            if(binary[i] === 1) {
                numArr[i] = 0
            } else {
                numArr[i] = 1
            }
            let number = convert(numArr)
            max = Math.max(number,max)
    }

    return  max
}

console.log(solution())
// solution()