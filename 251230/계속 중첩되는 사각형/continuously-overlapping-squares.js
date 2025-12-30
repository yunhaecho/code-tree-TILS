const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.

function solution () {
    let col = ""
    let arr = Array(201).fill(0).map((cell) => cell = Array(201).fill(0))
    let sum = 0

    for(let i = 0; i < n; i++) {
        const [x1, y1, x2, y2] = rectangles[i].map((num) => num += 100)
        if(i % 2) {
            col = "B"
        } else {
            col = "R"
        }

        for(let x = x1; x < x2; x++) {
            for(let y = y1; y < y2; y++) {
                arr[x][y] = col;
            }
        }
    }

    for(let i = 0; i<arr.length; i++) {
        const row = arr[i]

        for(let j = 0; j < row.length; j++) {
            if(arr[i][j] === "B") sum++
        }
    }

    return sum
}

console.log(solution())