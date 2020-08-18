
let tty = require('tty')
let ttys = require('ttys')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


async function ask(question) {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer)
            rl.close()
          });
    })
}


void async function() {
    console.log(`your select project ${await ask('your project name ?')}`)
}()


rl.on('line', (input) => {
    console.log(`接收到：${input}`);
  });

  rl.on('pause', () => {
    console.log('Readline 暂停');
  });

  rl.on('resume', () => {
    console.log('Readline 恢复');
  });

  rl.on('SIGCONT', () => {
    // `prompt` 将自动恢复流。
    rl.prompt();
  });

  rl.on('SIGINT', () => {
    rl.question('确定要退出吗？', (answer) => {
      if (answer.match(/^y(es)?$/i)) rl.pause();
    });
  });


  rl.on('SIGTSTP', () => {
    // 这将覆盖 SIGTSTP 并阻止程序进入后台。
    console.log('捕获 SIGTSTP');
  });