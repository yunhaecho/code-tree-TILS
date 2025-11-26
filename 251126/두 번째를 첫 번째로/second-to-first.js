const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("")

let fst = input[0] //b
let sec = input[1] //a

for(let i = 0 ; i < input.length; i++){
    if(input[i] === sec) {
        input[i] = fst
    }
}

console.log(input.join(""))


