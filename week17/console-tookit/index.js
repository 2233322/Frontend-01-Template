let tty = require('tty')
let ttys = require('ttys')
let readline = require('readline')
const { resolve } = require('path')

let stdin = ttys.stdin
let stdout = ttys.stdout

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
//   rl.question('你如何看待 Node.js 中文网？', (answer) => {
//     // TODO：将答案记录在数据库中。
//     console.log(`感谢您的宝贵意见：${answer}`);
  
//     rl.close();
//   });

function ask (question){
    return new Promise((resolve, reject) => {
        rl.question(question, answer => {
            resolve(answer)
            rl.close()
        })
    }) 
}

void async function () {
    console.log(`感谢您的宝贵意见：${await ask('你如何看待 Node.js 中文网？')}`);

}()