const http = require('http')
const fs = require('fs')
const unzipper = require('unzipper')

const app = http.createServer((req, res) => {

    // let matched = req.url.match(/filename=([^&]+)/)
    // let filename = matched && matched[1]
    // if (!filename) {
    //     return
    // }

    // let writeStream = fs.createWriteStream('../server/public/' + filename)

    let writeStream = unzipper.Extract({ path: '../server/public' })


    // req.pipe(writeStream) // pipe 和下面的等效

    req.on('data', trunk => {
        writeStream.write(trunk)
    })

    req.on('end', trunk => {
        writeStream.end(trunk)
    })

    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('okay')
    })
    
})

app.listen(8081, () => {
    console.log('publish server run is http://localhost:8081')
})