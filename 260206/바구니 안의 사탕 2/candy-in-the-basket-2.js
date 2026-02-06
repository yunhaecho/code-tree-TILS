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
const candies = Array(401).fill(0)
let max = -1
let maxPosition = -1

for(const [candy,position] of baskets) {
    maxPosition = Math.max(position,maxPosition)
    candies[position] = candy
}

    for(let c = 0; c <= maxPosition; c++) {
        let sum = 0
        let start = Math.max(0,c-k)
        const end = Math.min(400,c+k)

        for(let z = start; z <= end; z++) {
            sum += candies[z]
        }
        max = Math.max(sum,max)
    }

console.log(max)