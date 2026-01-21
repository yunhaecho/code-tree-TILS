const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];

// Please Write your code here.
const digit = a.length

const convert = (num) => {
    let decimal = 0

    for(const char of num) {
        if(char) {
            const idx = num.indexOf(char)
            decimal += 2**(digit - (idx+1))
        }
    }
    console.log(decimal)

    return decimal
}

console.log(convert([0,0,0,1]))

function solution() {
const binary = a.split("").map(Number)

let max = convert(binary)

    for (let i = 0; i < digit; i++) {
        if (binary[i] === 0) {
            const numArr = binary
            console.log(numArr)
            numArr[i] = 1
            let number = convert(numArr)
            max = Math.max(number,max)
        }
    }

    return  max
}

console.log(solution())