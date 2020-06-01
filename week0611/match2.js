function match(s) {
  let state = start
  for (let char of s) {
    state = state(char)
  }
  return state === end
}

function start(char) {
  if (char === 'a') {
    return foundA
  } else {
    return start
  }
}

function foundA(char) {
  if (char === 'b') {
    return foundB
  } else {
    return start(char)
  }
}

function foundB(char) {
  if (char === 'a') {
    return foundA2
  } else {
    return start
  }
}

function foundA2(char) {
  if (char === 'b') {
    return foundB2
  } else {
    return start(char)
  }
}

function foundB2(char) {
  if (char === 'a') {
    return foundA3
  } else {
    return start(char)
  }
}

function foundA3(char) {
  if (char === 'b') {
    return foundB3
  } else {
    return start(char)
  }
}

function foundB3(char) {
  if (char === 'x') {
    return end
  } else if (char === 'a') { // 如果是a 说明前面匹配 ababa
    return foundA3
  } else {
    return start
  }
}

function end() {
  return end
}

// find abababx
let s = 'hello aaaabababababxxxx'

console.log(match(s)) // true