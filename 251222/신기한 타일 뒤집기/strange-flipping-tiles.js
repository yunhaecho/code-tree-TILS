const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

function solution() {

    let arr = Array(200000+1).fill(0)
    let s = 0
    let e = 0
    let cur  = 100000
    let r = 0
    let l = 0
    
    const orders = commands.map((arr) => arr.split(" "))


    for(let i = 0; i < orders.length;i++) {
        const order = orders[i]
        const step = Number(order[0])
        const dir = order[1]

        if(dir === "R") {
            s = cur
            e = cur + step
            cur = e

        } else if( dir === "L") {
            s = e - step
            e = cur
            cur = s
        }

        for(let j = s; j <e; j++) {
            arr[j] = dir 
        }
    }

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] === "R") r++
        if(arr[i] === "L") l++

    }

    console.log(l,r)

}

solution()