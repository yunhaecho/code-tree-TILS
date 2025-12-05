const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

// Please Write your code here.
function solution(text,pattern) {
    if(!text.includes(pattern)) console.log(-1)

    for(let i = 0; i<= text.length - pattern.length; i++) {
        let compare = text.slice(i,i+pattern.length)
        if(compare === pattern) {
            console.log(i)
            break
        }
    }

}

solution(text, pattern)