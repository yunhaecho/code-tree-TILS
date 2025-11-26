const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n") 

const [s,qty] = input[0].split(" ")
const queries = input.splice(1).map(query => query.split(" "))
let splited_s = s.split("")

for(let i = 0 ; i < qty; i++) {
    let query = queries[i] // i = 0 => query = ['1', '1', '2']
    let sign  = Number(query[0])
    if(sign === 1) {
        query.map(Number) //[1,2,4]
        a = splited_s[query[1]-1] //splited_s[0] = a
        b = splited_s[query[2]-1] //s[1] = b
        splited_s[query[2]-1] = a //splited_s[0] = b => [b,b,a]
        splited_s[query[1]-1] = b// splited_s[1] = a => [b,a,a]
        console.log(splited_s.join(""))
    } else if(sign === 2) { 
        x = query[1] //a 
        y = query[2] //c
        for(let i = 0; i < splited_s.length; i++){ 
            if(splited_s[i] === x) { //a === a
                splited_s[i] = y 
            }
        }
        console.log(splited_s.join(""))
    }
}
