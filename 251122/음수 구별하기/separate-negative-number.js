const fs = require("fs")
const input = Number(fs.readFileSync(0).toString().trim())

if(input < 0) {
    console.log(input)
    console.log("minus")
}

if(input > 0) {
    console.log(input)
}