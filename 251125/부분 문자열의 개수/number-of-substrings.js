const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

const [a, word] = input
let cnt = 0

for (let i = 0; i <= a.length - word.length; i++) {
    let part = ""
    if(i === a.length - word.length) {
        part = a.slice(a.length - word.length)
    } else {
        part = a.slice(i , i+word.length)
    }
    if(word === part) cnt ++
}

console.log(cnt)

