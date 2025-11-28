const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()
const len = input.length
console.log(input)
for(let i = 0; i < len; i++) {
    input = input.slice(-1) + input.slice(0,len-1)
    console.log(input)
}