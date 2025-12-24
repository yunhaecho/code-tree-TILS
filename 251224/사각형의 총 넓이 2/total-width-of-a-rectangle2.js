const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let sum = 0
let overlap = 0
// let x1, y1, x2, y2 = 0

function solution() {
    let arr = Array(200).fill(0).map((elem) => elem = Array(200).fill(0))

    for (let i = 0; i < rects.length; i++) {
        const [x1, y1, x2, y2] = rects[i].map((num) => num += 100)

        for (let j = x1; j < x2; j++) {
            for (let i = y1; i < y2; i++) {
                arr[j][i] += 1
                sum++
                if (arr[j][i] === 2) overlap++
            }
        }
    }
    return sum - overlap
}

console.log(solution())

