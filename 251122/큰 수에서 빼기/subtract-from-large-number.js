const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const [a,b] = input

if(a >= b) console.log(a-b)
if(b >= a) console.log(b-a)