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

  const cssComputing = `<html maaa=a >
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
          <img id="myid" src="http://localhost:8080/a17039448cb9ed7495752b7f3d89ef3a.jpg"/>
          <img />
      </div>
  </body>
  </html>`


  const flexLayout = `<html>
  <head>
    <style>
    .wrapper {
      display: flex;
      background-color: rgb(255,255,255);
      width: 500px;
      height: 500px;
    }
    .div1{
      flex: 1;
      background-color: rgb(255,192,203);
      height: 250px
    }
    .div2{
      flex: 1;
      background-color: rgb(0,128,0)
    }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="div1"></div>
      <div class="div2"></div>
    </div>
  </body>
  </html>`
  res.write(flexLayout)
  res.end()
})

app.listen(3000, () => console.log('http://localhost:3000'))