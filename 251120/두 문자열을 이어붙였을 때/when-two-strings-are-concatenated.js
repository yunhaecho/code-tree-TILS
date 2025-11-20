const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const [a,b] = input

if(a+b === b+a) {
    console.log("true")
} else {
    console.log("false")
}