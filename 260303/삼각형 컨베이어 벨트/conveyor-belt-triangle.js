const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const l = input[1].trim().split(' ').map(Number);
const r = input[2].trim().split(' ').map(Number);
const d = input[3].trim().split(' ').map(Number);

// Please Write your code here.

for(let i = 0; i < t; i++) {
    const carry = l[n-1];
    for(let l_Idx = n-1; l_Idx > 0; l_Idx--) {
        l[l_Idx] = l[l_Idx-1];
    }
    l[0] = d[n-1]; 

    const carry2 = r[n-1];
    for(let r_Idx = n-1; r_Idx > 0; r_Idx--) {
        r[r_Idx] = r[r_Idx-1];
    }
    r[0] = carry

    for(let d_Idx = n-1; d_Idx > 0; d_Idx--) {
        d[d_Idx] = d[d_Idx-1];
    }
    d[0] = carry2
}

console.log(l.join(" "))
console.log(r.join(" "))
console.log(d.join(" "))