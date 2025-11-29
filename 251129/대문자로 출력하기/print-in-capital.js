const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(".")
let result=""

for(let i = 0; i< input.length; i++) {
    if( isNaN(Number(input[i]))) result += input[i].toUpperCase()
}

console.log(result)



