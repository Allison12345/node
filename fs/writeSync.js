const fs = require('fs')
try {
  fs.writeFileSync('hello.txt', '你好')
  console.log('file saved')
} catch (err) {
  console.log(err)
}
