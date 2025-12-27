const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.

function solution () {
    let arr = Array(2001).fill(0).map((cell) => cell = Array(2001).fill(0))
    const rects =[ rect1, rect2 ]
    let overlap = 0
    let rect1Sum = 0
    const [x1, y1, x2, y2] = rect1.map((num) => num +=1000)
    const [x3, y3, x4, y4] = rect2.map((num) => num +=1000)

    // for(let i = 0; i < rects.length; i++) {
        for(let j = x1; j < x2; j++) {
            for(let k = y1; k< y2; k++) {
                rect1Sum++
            }
        }
    // }

     for(let j = x3; j < x4; j++) {
            for(let k = y3; k< y4; k++) {
                if(arr[j][k]) {
                    overlap++
                }
            }
        }
    console.log(rect1Sum - overlap)
}

solution()