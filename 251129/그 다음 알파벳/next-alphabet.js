const fs = require("fs")
const alpha = fs.readFileSync(0).toString().trim()

if(alpha === 'z') {
    console.log('a')
} else {
    let nextAlpha = String.fromCharCode(alpha.charCodeAt(0) + 1)
    console.log(nextAlpha)
}

