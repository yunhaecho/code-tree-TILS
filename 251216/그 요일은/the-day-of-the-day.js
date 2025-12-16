const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const day = input[1]; //"Mon"

// Please Write your code here.
const dayInfo = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const dateInfo = [0,31,29,31,30,31,30,31,31,30,31,30,31]

function countDay(m,d) {
    let startM = m // 2
    let startD = d // 5

    let cnt = 1
    let i = dayInfo.indexOf(day) + 1 
 
    while(true) {
        if(startM === m2 && startD === d2) break // 3 9
        if(i === 7 ) i = 0 // i = 1
        
        if(startD === dateInfo[startM]) { // 7 === 29
            if(startM === 12 ) {
                 startM = 1
            } else {
                startM++ //
            }
            startD = 1
        }
        // i = 0
        if( i === dayInfo.indexOf(day)) cnt++ // 0 === 5 / cnt = 0
        startD++ //8
        i++ //i = 1
        }

        return cnt
    }


console.log(countDay(m1,d1))







