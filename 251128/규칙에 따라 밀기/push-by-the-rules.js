const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
let string = input[0]
const order = input[1].split("")

for(let dir of order) {
    if(dir === "L") { 
        string = string.slice(1) + string.slice(0,1)

    } else {
        string = string.slice(-1) + string.slice(0,-1)
    }
}

console.log(string)


