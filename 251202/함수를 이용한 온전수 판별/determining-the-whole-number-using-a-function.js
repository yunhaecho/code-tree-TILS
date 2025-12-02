const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.

const check = (x) => {
    let calFive = x - (Math.floor(x / 10 ).toFixed(0) * 10)

    if( x % 2 === 0 || (x % 3 === 0 && x % 9 != 0) || calFive === 5){
        return false
    }
    return true
}

let cnt = 0 
for(let i = a; i <= b; i++) {
    let result = check(i)
    if(result) cnt++
}
console.log(cnt)