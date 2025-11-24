const fs = require("fs")
const string = fs.readFileSync(0).toString().trim().split("")

const first = string[0] //c
const second = string[1] //o


for(let i = 0;  i< string.length; i++) {
    if(string[i] === first) { // c랑 같으면
        string[i] = second
    } else if(string[i] === second) { // o랑 같으면
        string[i] = first    }
}
console.log(string.join(""))




