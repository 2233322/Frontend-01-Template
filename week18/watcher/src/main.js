var { add } = require('./child/index')
let arr = [1,2,3].map(c => add(c ** 2, c ** 2))
console.log(arr)