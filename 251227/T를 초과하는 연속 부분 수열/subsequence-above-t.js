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

    for (let i = 0; i < n; i++) {
        if (arr[i] < t) {
            curLen = 0 // 
        } else {
            if (i >= 1 && arr[i] >= arr[i - 1]) {
                curLen++ //3
            } else {
                curLen = 1
            }
        }
        if (curLen > max) max = curLen //max = 3
    }
    if (curLen >= max) max = curLen
    return max
}
console.log(solution())