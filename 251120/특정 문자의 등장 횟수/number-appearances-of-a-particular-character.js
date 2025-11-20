const fs = require("fs")
const input = fs.readFileSync(0).toString().trim()

let eeCount = 0
let ebCount = 0

if(input.includes("ee") || input.includes("eb")) {
    for(let i = 0; i < input.length-1; i++) {
        if(input[i]+input[i+1] === "ee") {
            eeCount++
        } else if(input[i]+input[i+1] === "eb"){
            ebCount++
        }
    }
 }   

 console.log(`${eeCount} ${ebCount}`)
