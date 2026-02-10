const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const people = [];
for (let i = 0; i < n; i++) {
    const [posStr, letter] = input[i].split(' ');
    const pos = Number(posStr);
    people.push({ pos, letter });
}

// Please Write your code here.
const letterInfo = Array(17).fill(0)
let maxPos = -1
let size = 0

for( const {pos, letter} of people) {
    letterInfo[pos] = letter
    maxPos = Math.max(pos, maxPos)
}
// console.log((letterInfo))""

function solution () {
    if(n === 1) return 0
    for(let i = 0; i< maxPos; i++) {
        if(letterInfo[i] === 0 ) continue

        let G = 0;
        let H = 0;

        for(let j = i; j<= maxPos;j++ ) {
            if(letterInfo[j] === 0 ) continue
            if(letterInfo[j] === "G") {
                G++
            } else if(letterInfo[j] === "H") {
                H++
            }

            if(G === H) {
                // console.log(i,j,G,H,Math.abs(i-j))
            size = Math.max(Math.abs(i-j), size)
        }
        }


    }
    return size
}
console.log(solution())