const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

for(let char of input) {
    if(char === "END") break
    console.log(char.split("").reverse().join(""))
}

