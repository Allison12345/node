const fs = require('fs')
try {
  const files = fs.readdirSync('.')
  console.log(files)
} catch (err) {
  console.log(err)
}
