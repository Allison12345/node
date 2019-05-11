const fs = require('fs')
try {
  const data = fs.readFileSync('./read.js', {
    encoding: 'utf-8'
  })
  console.log(data)
} catch (err) {
  console.log(err)
}

console.log('read file finished')
