const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.

function solution() {
    const x1 = Math.min(rect1[0], rect2[0])
    const y1 = Math.max(rect1[1], rect2[1])
    const x2 = Math.min(rect1[2], rect2[2])
    const y2 = Math.max(rect1[3], rect2[3])

    return (x2 - x1) * (y2 - y1) 
}
// solution()
console.log(solution())