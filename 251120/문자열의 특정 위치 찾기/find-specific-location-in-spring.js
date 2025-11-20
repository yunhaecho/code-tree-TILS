const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split(" ")
const [string, voca] = input

if(string.includes(voca)) {
    console.log(string.indexOf(voca))
} else {
    console.log("No")
}


