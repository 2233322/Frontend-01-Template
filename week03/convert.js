// string convert number
// parseInt
// parseFloat
// Number
function convertStringToNumber(input, radix) {
  input = typeof input === 'string' ? input : input.toString()
  let match = input.match(/^([+-])(.*)/)

  // 如果是负数 minus为true
  let minus = false
  if (match) {
    minus = match[1] === '-' ? true : false
    input = match[2]
  }

  // radix 如果省略该参数或其值为 0，则数字将以 10 为基础来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数
  // 如果该参数小于 2 或者大于 36 返回 NaN
  if (typeof radix === 'undefined' && /^0[xX]/.test(input)) {
    radix = 16
  } else if (radix === 0 || !radix) {
    radix = 10
  } else if (!(radix > 1 && radix < 36)) {
    return NaN
  }

  // '0x110' => 110
  if (radix === 16) {
    input = input.slice(2)
  }

  let chars = input.split('')
  let number = 0
  let i = 0
  while (i < chars.length && chars[i] !== '.') {
    let current = getNumber(chars[i], radix)
    if (isNaN(current)) {
      return i ? number : NaN // 如果第一个不为数字返回NaN
    }
    number *= radix
    number += current
    i++
  }

  // 小数部分
  if (chars[i] === '.') i++
  let fraction = 1
  while (i < chars.length) {
    let current = getNumber(chars[i], radix)
    if (isNaN(current)) {
      return minus ? -number : number
    }
    fraction = fraction / radix
    number += current * fraction
    i++
  }

  return minus ? -number : number
}

// 返回数字 超出范围返回NaN
function getNumber(val, radix) {
  let num = val.codePointAt(0) - '0'.codePointAt()
  if (num >= 0 && num < radix && num <= 9) {
    return num
  } else if (radix > 10) {
    // 'a'.codePontAt() - 87 = 10
    let numberify = val.toLowerCase().codePointAt(0) - 87
    return numberify <= radix ? numberify : NaN
  }
}


// test
// console.log(convertStringToNumber('12.002'))   => 12.002
// console.log(convertStringToNumber('0x110'))  => 272
// console.log(convertStringToNumber('0x110', 20)) => 0
// console.log(convertStringToNumber(-123.0134)) => -123.0134


function convertNumberToString(num, radix) {
  radix = radix || 10
  //是否是小数
  let isFraction = /\./.test(num)
  let multiple
  if (isFraction) {
    // 小数的话乘以e8
    multiple = num * 1e8
  } else {
    multiple = num
  }

  let str = ''
  while (multiple > 0) {
    // 109 % 10   9
    str = multiple % radix + str
    multiple = Math.floor(multiple / radix)
  }

  if (isFraction) {
    //  '21.034'.split('') => [ '2', '1', '0', '3', '4', '0', '0', '0', '0', '0' ]
    //                     => splice插入小数点  [ '2', '1', '.', '0', '3', '4', '0', '0', '0', '0', '0' ]
    //                     => join('')    21.03400000
    //                     => 循环去掉末尾的0
    let sings = str.split('')
    sings.splice(sings.length - 8, 0, '.')
    str = sings.join('')
    while (str[str.length - 1] === '0') {
      str = str.substr(0, str.length - 1)
    }
  }

  return str
}


console.log(convertNumberToString(21.034))