const fs = require('fs')

const dir = fs.readdirSync('./fill')

const iconNames = dir.map((f) => f.split('.')[0])

console.log(iconNames.join(','))
