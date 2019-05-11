const fs = require('fs')
fs.mkdir('world',err => {
  if(err) throw err
  console.log('success')
})