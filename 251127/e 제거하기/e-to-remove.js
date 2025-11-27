const fs = require("fs")
let input = fs.readFileSync(0).toString().trim()

for(let char of input) {
    if(char === "e") {
        let idx = input.indexOf("e")
            input = input.slice(0,idx) + input.slice(idx+1)
            console.log(input)
            break
        
    }
 }