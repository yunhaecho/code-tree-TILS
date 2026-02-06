const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

// Please write your code here.


// console.log(countArr)
function solution () {
    const countArr = Array(m+1).fill(0)
    arr2.map((num) => countArr[num]++)
    let cnt = 0
    for(let i = 0; i <= n-m; i++) {
        const slicedCntArr = Array(m+1).fill(0)

        const slicedArr = arr1.slice(i,i+m)
        for(const num of slicedArr) {
            slicedCntArr[num]++
        }
        
        if(countArr.toString() === slicedCntArr.toString()) cnt++
        // console.log(slicedArr)

    }
    return cnt
}
console.log(solution())