const fs = require("fs");
let input = fs.readFileSync(0).toString().trim()
let result=""
let regex = /[.,|\!@#$%^&*{}()_+<>?=~<>/]/g;

for(let char of input) {
    if( "A"<= char && char <="Z" || "a"<= char && char <="z" || "1"<= char && char <="9"){
        result += char.toLowerCase()
    }
}

console.log(result.replace(regex,""))
