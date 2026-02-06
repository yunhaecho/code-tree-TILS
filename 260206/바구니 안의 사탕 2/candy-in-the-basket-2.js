const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);

const baskets = [];
for (let i = 0; i < n; i++) {
    const [candy, position] = input[index++].split(" ").map(Number);
    baskets.push([candy, position]);
}

// Please Write your code here.
const candies = Array(20).fill(0)//401
let max = Number.MIN_SAFE_INTEGER

for(const [candy,position] of baskets) {
    candies[position] = candy
}

// for(let i = 0 ; i< candies.length; i++) {
    for(let c = k; c <= 15-k; c++) {
        let sum = 0
        for(let z = c-k; z<= c+k; z++) {
            sum += candies[z]
        }
        max = Math.max(sum,max)
    }
// }
console.log(max)