const fs = require("fs")
const nums = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let result = ''
for(let num of nums) {
    result += String.fromCharCode(num) + " "
}

console.log(result)