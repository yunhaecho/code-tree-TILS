const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

function checkVaild (m,d){
    if( m > 12 || d > 31) return "No"

    if( m === 2) {
        if(1 <= d && d <28) return "Yes"
        return "No"
    }

    if(m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12){
        if(1 <= d && d<= 31)  return "Yes"
    } else {            
        if(1 <= d && d<= 30)  return "Yes"
    }
    return "No"
}

let result = checkVaild(m,d)

console.log(result)