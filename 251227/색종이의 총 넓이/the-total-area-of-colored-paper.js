const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.

function solution() {
    let arr = Array(12).fill(0).map((cell) => cell = Array(12).fill(0))
    for (let k = 0; k < rects.length; k++) {
        const [s, e] = rects[k] // 4,0
        for (let i = s; i < s + 8; i++) {
            for (let j = e; j < e + 8; j++) {
                arr[i][j]++ 
                // arr[0][0] ... arr[0][7]
                // arr[1][0] ... arr[1][7]
            }
        }

    }
    console.log(arr)
}

solution()