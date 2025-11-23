const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split(" ")

const [a,b]= input

const aTwo = a.split("").slice(0,2)
const bTwo = b.split("")

bTwo[0] = aTwo[0]
bTwo[1] = aTwo[1]

console.log(bTwo.join(""))