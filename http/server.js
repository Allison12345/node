const http = require('http')
const port = 3000
const hostname = 'localhost'
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(`hello ${req.url}`)
})
server.listen(port, hostname, () => {
  console.log(`running at http://${hostname}:${port}`)
})
