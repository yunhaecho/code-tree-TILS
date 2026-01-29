const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
  const [x, c] = input[i].split(' ');
  people.push([Number(x), c]);
}

// Please Write your code here.
function solution () {
  const arr = Array(20).fill(0)
  for(let i = 0; i < n; i++) {
    const [x,c] = people[i]
    arr[x] = c
  }

  let max = Number.MIN_SAFE_INTEGER

  for(let i = 0; i < arr.length - k; i++) {
    let sum = 0
    for(let j = i; j < i+k; j++) {
        if(arr[j] === 0 ) continue
        if(arr[j] === "G") {
          sum += 1
        } else if(arr[j] === "H") {
          sum+=2
        }
    }
    max = Math.max(sum,max)
  }

  return max
}

console.log(solution())