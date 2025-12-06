const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.

for(let i = 0; i < n; i++) {
    let sum = 0
    let query = queries[i]
    const [a , b] = query
    // queries.slice(a-1, b).map(num => sum += num)
    console.log(a, b)

}