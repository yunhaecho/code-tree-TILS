const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.
function solution() {
    let cnt = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let sum = 0

            for (let k = i; k < j; k++) {
                sum += arr[k]
            }

            if (sum % (j - i) === 0) {
                const avg = sum / (j - i)
                for (let x = i; x < j; x++) {
                    if (arr[x] === avg) {
                        cnt++
                        break
                    }
                }
            }

        }
    }

    return cnt

}

console.log(solution())