const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

function solution() {

    let arr = Array(20+1).fill(0)
    let r , let l let s , let e = 0
    let cur  = 10
    
    const orders = commands.map((arr) => arr.split(" "))


    for(let i = 0; i < orders.length;i++) {
        const order = orders[i]
        const step = Number(order)
        const dir = order[1]

        if(dir === "R") {
            s = cur
            e = cur + strp

        } else if( dir === "L") {
            
        }









    }
}

solution()