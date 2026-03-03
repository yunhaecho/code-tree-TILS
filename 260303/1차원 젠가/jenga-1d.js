const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input.slice(1, n + 1).map(Number);
const [s1, e1] = input[n + 1].split(' ').map(Number);
const [s2, e2] = input[n + 2].split(' ').map(Number);

// Please write your code here.
let tempBlocks = blocks

const cutArray = (s,e) => {
       for(let i = s-1; i<e; i++) {
    tempBlocks[i] = 0
   }
   const resize = []

    for(let j = 0; j < n; j++) {
        if(tempBlocks[j]) {
            resize.push(tempBlocks[j]);
        }
    }
    tempBlocks = [...resize]
}


cutArray(s1,e1);
cutArray(s2,e2);

console.log(tempBlocks.length)

for(let num of tempBlocks) {
    console.log(num)
}

