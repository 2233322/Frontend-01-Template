const { stdout, stdin } = require("ttys")


stdin.setRawMode(true)

stdin.resume()

stdin.setEncoding('utf-8')



function getChar() {
  return new Promise(resolve => {
    stdin.once('data', key => {
      resolve(key)
    })
  })
}

function up (n = 1) {
  stdout.write('\033['+ n + 'A')
}

function down (n = 1) {
  stdout.write('\033['+ n + 'B')
}

function right (n = 1) {
  stdout.write('\033['+ n + 'C')
}

function left (n = 1) {
  stdout.write('\033['+ n + 'D')
}

void  async function () {
  stdout.write('swich framwork du you want to use?\n')
  let answer = await select(['vue', 'react', 'angular'])
  stdout.write('You selected ' + answer + '\n')
  process.exit()
}()

 async function select(choices) {
   let selected = 1
  for (let i = 0; i < choices.length; i++) {
    if (i === selected) {
      stdout.write('[\x1b[32mX\x1b[0m]' + choices[i] + '\n')
    } else {
      stdout.write(`[ ] ${choices[i]}\n`)
    }
  }
  up(choices.length - selected)
  right()

  while(true) {
    let char = await getChar()
    if (char === '\u0003') {
      process.exit()
    }

    if (char === '\r') {
      down(choices.length - selected)
      left()
      return choices[selected]
    }

    let charArr = char.split('').map(c => c.charCodeAt(0))

    if (charArr.join('') === '279165' && selected > 0) {
      stdout.write(' ')
      left()
      selected--
      up()
      stdout.write('\x1b[32mX\x1b[0m')
      left()
    }

    if (charArr.join('') === '279166' && selected < choices.length - 1) {
      stdout.write(' ')
      left()
      selected++
      down()
      stdout.write('\x1b[32mX\x1b[0m')
      left()
    }

    
  }
}