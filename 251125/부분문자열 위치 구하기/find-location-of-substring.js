const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

const [inputStr, goalStr] = input

if(inputStr.includes(goalStr)) {
    console.log(inputStr.indexOf(goalStr))
    // let replaced = inputStr.replace(goalStr, "O")
    // console.log(replaced)
    // console.log(replaced.indexOf("O"))
} else {
    console.log(-1)
}


