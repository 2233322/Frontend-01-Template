const fs = require('fs')
const { exec } = require('child_process')



fs.watch('./src', { persistent: true, recursive: true},  (event, filename) => {
    console.log(event, filename)
    exec('npm run webpack', (error, stdout, stderr) => {
        console.log('stdout', stdout)
    })
})