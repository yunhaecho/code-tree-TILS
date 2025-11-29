const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

let arr = []
for(let char of input) {
    if(char === "0") break
    arr.push(char)
}

console.log(arr.length)

for(let i = 0; i < arr.length; i++) {
    if(i % 2 === 0) console.log(arr[i])
}


