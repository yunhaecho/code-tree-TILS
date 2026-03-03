const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const u = input[1].split(' ').map(Number);
const d = input[2].split(' ').map(Number);

// Please write your code here.
const d_reverse= d.reverse()
for(let i = 0; i < t; i++) {
    const back = u[n-1]
    const front = d_reverse[0]
    for(let j = n-1; j >0; j--) {
        u[j] = u[j-1]
    }
    for(let k = 1; k<n; k++) {
        d_reverse[k-1] = d_reverse[k]
    }
    u[0] = front;
    d_reverse[n-1] = back;
}

console.log(u.join(" "))
console.log(d_reverse.reverse().join(" "))