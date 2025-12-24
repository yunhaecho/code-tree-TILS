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
        const step = Number(order[0]) // 5
        const dir = order[1] //L

        if(dir === "R") {
            s = cur //10
            e = cur + step //14
            cur = e - 1 // 13
            // console.log(s,e,cur)

        } else if( dir === "L") {
            e = cur + 1 // 14
            s = e - step // 
            cur = s // 10
            // console.log(s,e,cur)
        }

        for(let j = s; j < e; j++) {
            arr[j] = dir // 10 < 14 arr[10<14] = "R"
        }
        // console.log(arr)
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