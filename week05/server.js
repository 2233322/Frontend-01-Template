const http = require('http')

const app = http.createServer((req, res) => {
  console.log('req received')
  res.writeHead(200, {
    'X-Foo': 'bar',
    'Content-Type': 'text/plain'
  })
  res.end('ok')
})

app.listen(3000, () => console.log('http://localhost:3000'))