const fs = require("fs");
let input = fs.readFileSync(0).toString().trim()
let sum = 0

for(let char of input) {
    if("0"<= char && char <="9"){
        sum += Number(char)
    }
}

console.log(sum)