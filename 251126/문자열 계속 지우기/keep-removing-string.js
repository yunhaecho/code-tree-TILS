const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")
let a = input[0]
const part = input[1]

let len = part.length
let i = 0

while(true){ //a = dsjhjhjkl part = hj
    // i = 3 len = 2
    if(a.includes(part)) {
        let compare = a.slice(i,i+len) //compare = 3,5 => ds

        if( compare === part) { // i3 hj === hj / i3 hj === hj / 
            a = a.slice(0,i) + a.slice(i+len) //a = 03 + 5 = dsjkl
            i = 0 
        } else {
            i++
        }

    } else {
        console.log(a)
        break
    }
}


