const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.



function countTime() {
    let startH = a 
    let startM = b
    let sumTime = 0;
    while(true) {
        if(startH === c && startM === d) break

        sumTime += 1
        startM += 1

        if(startM === 60) {
            startH += 1
            startM = 0
        }

        
    }   
    return sumTime
}

console.log(countTime())