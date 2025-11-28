const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
let [str, orderQty] = input[0].split(" ")
const order = input.slice(1).map(Number)

for(let num of order) {
    if(num === 1) {
        str = str.slice(1) + str.slice(0,1)
        console.log(str)

    } else if(num === 2) {
        str = str.slice(-1) + str.slice(0,-1)
        console.log(str)

    } else if(num === 3 ){
        str = str.split("").reverse()
        console.log(str.join(""))
    }
}