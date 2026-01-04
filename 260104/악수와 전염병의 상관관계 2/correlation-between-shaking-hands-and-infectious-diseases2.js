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
    const cnt = Array(n+1).fill(k)
    const isInfected = Array(n+1).fill(0)
    isInfected[p] = 1
    shakes.sort( (a, b) => a.time - b.time)

    for (let i = 0; i < shakes.length; i++) {
        const p1 = shakes[i].person1
        const p2 = shakes[i].person2

        if(isInfected[p1] && cnt[p1] > 0) {
            if(!isInfected[p2]){ //비감염자
                isInfected[p2] = 1
                cnt[p1] -= 1
                }
            else if(isInfected[p2] && cnt[p2] > 0) {
                cnt[p1] -=1
                cnt[p2] -=1
            
            } else if(isInfected[p2 ] && cnt[p2] === 0) {
                cnt[p1] -=1
            }
            
        } else if (isInfected[p2] && cnt[p2] > 0) {
            if(!isInfected[p1]){ //비감염자
                isInfected[p1] = 1
                cnt[p2] -= 1
                }
            else if(isInfected[p1] && cnt[p1] > 0) {
                cnt[p1] -=1
                cnt[p2] -=1
            
            } else if(isInfected[p1] && cnt[p1] === 0) {
                cnt[p2] -= 1
            }
            
        } 
    }
    return isInfected.slice(1).join("")

}

console.log(solution())

