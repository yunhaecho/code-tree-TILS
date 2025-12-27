const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

function solution() {
    let sum = 0
    let s, e = 0
    let arr = Array(201).fill(0).map((cell) => cell = Array(201).fill(0))
    for (let k = 0; k < rects.length; k++) {
        const [s, e] = rects[k].map((num) => num += 100)// 4,0

        for (let i = s; i < s + 8; i++) {
            for (let j = e; j < e + 8; j++) {
                if(arr[i][j] >= 1) {
                    continue
                } else {
                    arr[i][j]++
                    sum++
                }
            }
        }
    }
    return sum
}

console.log(solution())