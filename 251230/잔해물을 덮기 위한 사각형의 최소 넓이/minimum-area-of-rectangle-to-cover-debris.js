const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.

function solution() {
    let arr = Array(21).fill(0).map((cell) => cell = Array(21).fill(0))
    const rects = [rect1, rect2]
    let xMin = 0
    let xMax = 0
    let yMin = 0
    let yMax = 0
    let sum = 0

    for (let i = 0; i < rects.length; i++) {
        const [x1, y1, x2, y2] = rects[i].map((num) => num += 10)
        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++) {
                arr[x][y] = i + 1
            }
        }
    }

                    console.log(arr)



    // for (let x = 0; x < arr.length; x++) {
    //     const row = arr[x]
    //     for (let y = 0; y < row.length; y++) {
    //         if (arr[x][y] === 1) {
    //             xMin = x
    //             yMin = y
    //             break
    //         }
    //     }
    // }

    // for (let x = 0; x < arr.length; x++) {
    //     const row = arr[x]
    //     for (let y = 0; y < row.length; y++) {
    //         if (arr[x][y] === 1) {
    //             if (x > xMax) xMax = x
    //             if (y > yMax) yMax = y
    //         }
    //     }
    // }

    // for (let x = xMin; x < xMax; x++) {
    //     for (let y = yMin; y < yMax; y++) {
    //         sum++
    //     }
    // }

    // return sum

}

console.log(solution())