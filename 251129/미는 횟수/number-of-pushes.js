const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

let [str , goal] = input
let cnt = 0
let isSame = false
for(let i = 0; i < str.length; i++) {
    str = str.slice(-1) + str.slice(0, -1)
    cnt++
    if(str === goal) {
        isSame = true
        console.log(cnt)
        break
    }
}

if(isSame === false) console.log(-1)

