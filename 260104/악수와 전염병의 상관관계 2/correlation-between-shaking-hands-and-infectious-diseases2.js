const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k, p, t] = input[0].split(' ').map(Number);
const shakes = [];
for (let i = 1; i <= t; i++) {
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push({ time, person1, person2 });
}

// Please write your code here.

function solution() {
    const result = Array(n).fill(0)
    const shakesCnt = Array(n).fill(k)

    result[p - 1] = 1
    shakes.sort(function (a, b) {
        return a.time - b.time
    })

    for (let i = 0; i < shakes.length; i++) {
        const time = shakes[i].time
        const p1 = shakes[i].person1
        const p2 = shakes[i].person2

        if (result[p1- 1] === 1 && shakesCnt[p1 - 1] > 0) {
            if(result[p2 - 1] === 0 ){ //비감염자
                result[p2 - 1] = 1
                shakesCnt[p1 - 1] -= 1
                }
            else if(result[p2 - 1] === 1 && shakesCnt[p2 - 1] > 0) {
                shakesCnt[p1 - 1] -=1
                shakesCnt[p2 - 1] -=1
            
            } else if(result[p2 - 1] === 1 && shakesCnt[p2 - 1] === 0) {
                shakesCnt[p1 -1] = 0
            }
            
        } else if (result[p2 - 1] === 1 && shakesCnt[p2 - 1] > 0) {
            if(result[p1 - 1] === 0 ){ //비감염자
                result[p1 - 1] = 1
                shakesCnt[p2 - 1] -= 1
                }
            else if(result[p1 - 1] === 1 && shakesCnt[p1 - 1] > 0) {
                shakesCnt[p1 - 1] -=1
                shakesCnt[p2 - 1] -=1
            
            } else if(result[p1 - 1] === 1 && shakesCnt[p1 - 1] === 0) {
                shakesCnt[p2 -1] = 0
            }
            
        } 
    }
    return result.join("")

}

console.log(solution())

