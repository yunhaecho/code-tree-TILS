const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

function solution() {
    let max = 0
    let curLen = 0

    if (n === 1) {
        if (n >= t) {
            return 1
        } else {
            return 0
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < t) {
            curLen = 0
            continue
        } else {
            if (i >= 1 && arr[i] > arr[i - 1]) {
                curLen++
                if (curLen > max) max = curLen
            } else {
                curLen = 1
            }
        }
    }
    if (curLen > max) max = curLen
    return curLen
}
console.log(solution())