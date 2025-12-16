const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [m1, d1, m2, d2] = input[0].split(' ').map(Number);
const day = input[1]; //"Mon"

// Please Write your code here.
const dayInfo = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
const dateInfo = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function countDay(m, d) {
    let startM = m // 2
    let startD = d // 5
    let cnt = 0
    let i = 0 //시작은 월요일

    while (startM != m2 || startD != d2) {
        startD++
        if (startD > dateInfo[startM]) {
            if (startM === 12) {
                startM = 1
            } else {
                startM++
            }
            startD = 1
        }

        i++
        if (i === 7) i = 0

        if (i === dayInfo.indexOf(day)) cnt++
        
    }
    return cnt
}


console.log(countDay(m1, d1))







