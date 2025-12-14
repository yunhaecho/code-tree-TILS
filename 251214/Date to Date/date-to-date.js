const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

function countDate() {
    const d = [0,31,28,31,30,31,30,31,31,30,31,30,31]
    const month1 = d.slice(1,m1).reduce((datesum,date) => datesum += date, 1)
    const month2 = d.slice(1,m2).reduce((datesum,date) => datesum += date, 1)
    
    // console.log(month1,d1,month2,d2)
    // console.log(month1+d1+1)
    // console.log(month2+d2)
    return Math.abs((month2 + d2) - (month1 + d1) + 1)
}
console.log(countDate())
