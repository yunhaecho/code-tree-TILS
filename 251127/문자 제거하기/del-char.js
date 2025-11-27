const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

let string  = input[0]
const nums = input.slice(1).map(Number)

for(let i = 0; i < nums.length; i++) {

    if(string.length === 1) {
        console.log(string)
        break
    }
    let delIdx = nums[i]
    if( delIdx > string.length-1) {
        string = string.slice(0,string.length-1)
    }

    string = string.slice(0 , delIdx) + string.slice(delIdx+1)
    console.log(string)
 }