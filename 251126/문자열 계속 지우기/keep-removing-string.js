const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

const [ a , part ] = input
let removed = ""
let len = a.length;
for(let i = 0; i< a.len; i++) {
    if(a[i] + a[i+1] === part) {
        removed = a.slice(i,i+2);
        len = removed.length
    }
    console.log(removed)

}

console.log(removed)



