const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function isPrime(a) {    
    for(let i = 2; i <= parseInt(Math.sqrt(a)); i++) {
        if(a % i === 0) return false
    }
    return true
}

function sum (a,b) {
    let cnt = 0
    for(let i = a; i<= b ; i++) {
        if(isPrime(i)) {
            let sum = parseInt(Math.floor( i / 10 )) + (i - parseInt(Math.floor( i / 10 )) * 10)
            if(sum % 2 === 0 ) cnt++
        }
    }
    return cnt
}

let result = sum(A,B)
console.log(result)