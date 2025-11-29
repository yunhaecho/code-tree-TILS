const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ")

const [a,b] = input

console.log(Number(a+b) + Number(b+a))
