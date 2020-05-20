const http = require('http')

const app = http.createServer((req, res) => {
  console.log(req.headers)

  // 获取body内容
  req.on('data', function (body) {
    console.log(body.toString())
  });
  res.writeHead(200, {
    'X-Foo2': 'bar2',
    'Content-Type': 'text/plain'
  })
  res.write(`hello`)
  res.write(`world`)
  res.end()
})

app.listen(3000, () => console.log('http://localhost:3000'))