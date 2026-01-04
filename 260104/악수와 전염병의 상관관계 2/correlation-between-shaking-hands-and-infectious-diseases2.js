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
    const infectionCount = Array(n+1).fill(k)
    const isInfected = Array(n+1).fill(0)
    isInfected[p] = 1
    shakes.sort( (a, b) => a.time - b.time)

    for (let i = 0; i < shakes.length; i++) {
        const {person1: p1, person2: p2} = shakes[i]

        const p1CanInfected = isInfected[p1] && infectionCount[p1] > 0
        const p2Caninfected = isInfected[p2] && infectionCount[p2] > 0

        if(p1CanInfected) infectionCount[p1]--
        if(p2Caninfected) infectionCount[p2]--

        if(p1CanInfected && !isInfected[p2]) isInfected[p2] = 1
        if(p2Caninfected && !isInfected[p1]) isInfected[p1] = 1

    }
    return isInfected.slice(1).join("")

}

console.log(solution())

