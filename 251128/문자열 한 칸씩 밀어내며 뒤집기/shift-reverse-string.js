const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
const info = input[0].split(" ")
let str = info[0].split("")
console.log(str)
const order = input.slice(1).map(Number)

for(let num of order) {
    if(num === 1) {
        str = str.slice(1) + str.slice(0,1)
        console.log(str)

    } else if(num === 2) {
        str = str.slice(-1) + str.slice(0,-1)
        console.log(str)

    } else if(num === 3 ){  
        console.log(str)
        // str = str.reverse()
        // console.log(str.join(""))
    }
}