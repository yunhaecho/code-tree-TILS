const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ")
let sum = 0
let num = ""

for(let elem of input) {
    let char = elem 
    num = ""
    for(let alpha of char) {
        if(isNaN(Number(alpha))) break
        num += alpha
    }
    sum += Number(num)
}

console.log(sum)