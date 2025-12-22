const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.

function solution() {

    let arr = Array(20+1).fill(0)
    let s = 10
    let e = 0
    let cur = 10
    let r = 0
    let l = 0
    
    const orders = commands.map((arr) => arr.split(" "))

    for(let i = 0; i < orders.length;i++) {
        const order = orders[i]
        const step = Number(order[0])
        const dir = order[1]

        if(dir === "R") {
            s = cur //10
            e = cur + step //11
            cur = e -1 // 11
            console.log(s,e)


        } else if( dir === "L") {
            s = e - step + 1 // 9 10
            e = cur + 1// 11
            cur = s //10
            console.log(s,e)

        }

        for(let j = s; j < e; j++) {
            arr[j] = dir 
        }
        console.log(arr)
    }

    for(let i = 0; i< arr.length; i++) {
        if(arr[i] === "R") {
            r++
        }
        else if(arr[i] === "L") {
            l++
        }

    }

    console.log(l,r)

}

solution()