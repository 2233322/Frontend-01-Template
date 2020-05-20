const http = require('http')

const app = http.createServer((req, res) => {
  console.log(req.headers)

  // 获取body内容
  req.on('data', function (body) {
    console.log(body.toString())
  });
  res.writeHead(200, {
    'X-Foo2': 'bar2',
    'Content-Type': 'text/html'
  })
  res.write(`<html maaa=a >
  <head>
      <style>
  body div #myid{
      width:100px;
      background-color: #ff5000;
  }
  body div img{
      width:30px;
      background-color: #ff1111;
  }
      </style>
  </head>
  <body>
      <div>
          <img id="myid"/>
          <img />
      </div>
  </body>
  </html>`)
  res.end()
})

app.listen(3000, () => console.log('http://localhost:3000'))