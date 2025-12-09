const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

function sol(n) {
    if(n % 2) {
        return odd(n)
    } else {
        return even(n)
    }

}

function odd(n) { 5
    if( n <= 1 ) return 1
    
    return odd(n-2) + n //odd(3) + 5 -> odd(1) + 3 + 5 => 1 +3 5
}

function even(n) { 
    if( n <= 0) return 0
    return n + even(n-2)
}

console.log(sol(n))