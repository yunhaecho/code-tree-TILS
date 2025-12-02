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

    if( 1 <= m && m <= 12 && 1<= d && d <=31) return "Yes"
}

let result = checkVaild(m,d)

console.log(result)