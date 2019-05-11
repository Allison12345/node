const fs = require('fs')
fs.readFile('./read.js',(err,data) => {
  if(err) throw err
  console.log(data.toString())
})
console.log('read file finished')