const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

// Please Write your code here.

// const modify = (arr) => {
//     for(let i = 0; i < n; i++) {
//         if( arr[i] % 2 === 0 ) {
//             arr[i] = Math.floor(arr[i]/2)
//         }
//     }
// }

// modify(arr)
// for(let num of arr) {
//     process.stdout.write(num + " ")

// }

function divide (arr) {
    for(let num of arr) {
        if(num % 2 === 0 ) num = num / 2
    }
    console.log(arr.join(" "))
}

divide(arr)