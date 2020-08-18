const http = require('http')
const querystring = require('querystring')
const fs = require('fs')
const archiver = require('archiver')

// archiver

let packname = './package'

// const postData = querystring.stringify({
//     'content': 'hello world'
//   });



//fs.stat('./' + fimeimage, (err, stats) => {
  const options = {
    hostname: 'localhost',
    port: '8081',
    path: '/?filename=package.zip',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
       // 'Content-Length': stats.size
      }
}


const req = http.request(options, (res) => {
    console.log(`状态码: ${res.statusCode}`);
    console.log(`响应头: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(`响应主体: ${chunk}`);
    });
    res.on('end', () => {
      console.log('响应中已无数据');
    });
  });
  
  req.on('error', (e) => {
    console.error(`请求遇到问题: ${e.message}`);
  });


  
// archive.pipe(fs.createWriteStream('./package.zip'))

// archive.on('end', () => {
//   console.log('end')
// })

// archive.finalize()


let archive = archiver('zip', {
  zlib: { level: 9 }
})
archive.directory(packname, false)
archive.finalize()


archive.pipe(req)
archive.on('end', () => {
  req.end()
})






  // 图片
  /*let readStream = fs.createReadStream('./' + fimeimage)


  readStream.pipe(req)

  readStream.on('end', () => {
    req.end();
  })*/
  
  // 将数据写入请求主体。
  // req.write(postData);
  
 
//})


