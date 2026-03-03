const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, t] = input[0].split(' ').map(Number);
const u = input[1].split(' ').map(Number);
const d = input[2].split(' ').map(Number);

// Please write your code here.
for(let _ = 0; _ < t; _++) {
    const carry = u[n-1]
    for(let u_Idx = n-1; u_Idx >0; u_Idx--) {
        u[u_Idx] = u[u_Idx-1];
    }
    u[0] = d[n-1];

    for(let d_Idx = n-1; d_Idx >0; d_Idx--) {
        d[d_Idx] = d[d_Idx-1];
    }
    d[0] = carry;
}

console.log(u.join(" "))
console.log(d.join(" "))