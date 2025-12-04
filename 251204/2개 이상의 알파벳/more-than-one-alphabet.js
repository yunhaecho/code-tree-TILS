const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = input[0];
// Please Write your code here.\
//하나라도 다르면 return "YES"
function solution(A) {
    let cnt = 0 
    let isDiff = false
    for (let i = 0 ; i < A.length ; i++ ) {
        for(let j = 0; j < A.length; j++) {
            if(A[i] != A[j]) cnt++
            if(cnt === 2) {
                isDiff = true
                break
            }
        }
        if(isDiff) break
    }
    if(isDiff === false) {
        return "No"
    } else {
        return  "Yes"
    }

}

const result = solution(A)
console.log(result)