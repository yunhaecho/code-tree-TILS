const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split(" ")

const add = input[0].charCodeAt(0)+input[1].charCodeAt(0)
const max = Math.max(input[0].charCodeAt(0) , input[1].charCodeAt(0))
const min = Math.min(input[0].charCodeAt(0) , input[1].charCodeAt(0))
const minus = max - min

console.log(add, minus)