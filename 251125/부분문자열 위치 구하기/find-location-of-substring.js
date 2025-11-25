const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

const [inputStr, goalStr] = input

if(inputStr.includes(goalStr)) {
    let index = inputStr.indexOf(goalStr[0])
    console.log(index)
} else {
    console.log(-1)
}







