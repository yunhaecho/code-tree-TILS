const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);

// Please Write your code here.

function countDate() {
    const d = [0,31,28,31,30,31,30,31,31,30,31,30,31]
    const month1 = d.slice(1,m1+1).reduce((datesum,date) => datesum += date, 0)
    const month2 = d.slice(1,m2+1).reduce((datesum,date) => datesum += date, 0)
    return Math.abs((month2 + d2) - (month1 + d1))

}
console.log(countDate())
