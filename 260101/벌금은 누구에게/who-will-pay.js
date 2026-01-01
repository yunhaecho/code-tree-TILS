const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// Please Write your code here.

function solution () {

    let students = Array(n+1).fill(k)

    for(const num of penalizedPersons) {
        students[num] -= 1
        if(students[num] === 0 ) return num
    }

    return -1
}

console.log(solution())