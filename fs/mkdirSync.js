const fs = require('fs')
try{
  fs.mkdirSync('hwllo world')
  console.log('success')
}catch(err){
  console.log(err)
}