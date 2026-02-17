const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.
const arr = []

const commandMap = {
    push_back : (num) => arr.push(num),
    get : (k) => console.log(arr[k-1]),
    size :() => console.log(arr.length),
    pop_back : () => arr.pop()
}

for(let i = 0; i < n; i++) {
    const [command, num] = commands[i].split(" ")
    commandMap[command](Number(num));
}
