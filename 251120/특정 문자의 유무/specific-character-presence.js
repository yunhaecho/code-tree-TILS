const fs = require("fs")
const input = fs.readFileSync(0).toString().trim()

let isEe = 'No'
let isAb = 'No'

if(input.includes("ee") ) isEe = "Yes"
if(input.includes("ab")) isAb = "Yes"
console.log(`${isEe} ${isAb}`)