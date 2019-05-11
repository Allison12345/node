const fs = require('fs')
fs.writeFile('hello.txt', 'helloworld', err => {
  if(err) throw err
  console.log('文件保存成功')
})
console.log('writeFile finished')