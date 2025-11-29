const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")
let num = ""
let sum = 0

for(let elem of input) {
    let char = elem 
    num = ""
    for(let alpha of char) {
        if(isNaN(Number(alpha))) continue
        num += alpha
    }
    sum += Number(num)
}

console.log(sum)