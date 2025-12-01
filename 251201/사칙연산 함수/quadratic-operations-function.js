const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
let str = ["+", "-","/","*"]
// Please Write your code here.

const add = ( x , y ) => {
    return x + y
}

const minus = ( x , y )=>{
    return x - y
}

const div = ( x , y )=>{
    return Math.floor(x /y).toFixed(0)
}

const mul = ( x , y )=>{
    return x * y
}

let isSame = true
let result = 0

if(!str.includes(o)) {
    isSame = false
} else {
    if( o === "+") { result = add(a,c)}
    else if(o === "-") { result = minus(a,c)}
    else if(o === "/") { result = div(a,c)}
    else if(o === "*") { result = mul(a,c)}
} 

if(isSame === false) {
    console.log("False")
} else {
    console.log(`${a} ${o} ${c} = ${result}`)
}
