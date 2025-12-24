const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);
//[[1 2 3 5],[6 0 10 4],[6 0 10 4]]

// Please Write your code here.
let arr = Array(10).fill(0).map((elem) => elem = Array(5).fill(0))

const rects = [rectA, rectB]

function solution() {
    let sum = 0
    const [mx1, my1, mx2, my2] = rectM;

    for (let i = 0; i < rects.length; i++) {
        const [x1, y1, x2, y2] = rects[i];

        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++) {
                arr[x][y] += 1;
                sum++
            }
        }

    }
    for (let x = mx1; x < mx2; x++) {
        for (let y = my1; y < my2; y++) {
            if(arr[x][y] === 1) sum--
        }
    }

    return sum;
}

console.log(solution())