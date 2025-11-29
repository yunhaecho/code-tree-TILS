const fs = require("fs");
let input = fs.readFileSync(0).toString().trim()
let result=""

for(let char of input) {
    if( "A"<= char && char <="Z" || "a"<= char && char <="z") result += char.toUpperCase()
}

console.log(result)



