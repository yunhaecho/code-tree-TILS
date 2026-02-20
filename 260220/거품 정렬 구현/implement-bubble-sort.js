const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

for(let i = 0; i<n-1; i++) {
    for(let j = i+1; j <n ; j++) {
        if(arr[i] > arr[j]) {
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr.join(" "))