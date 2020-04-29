/**
ASCLL码
一共128个字符（包括32个不能打印出来的控制符）只占用了一个字节的后面7位，最前面的一位统一规定为0
Unicode（统一码、万国码、单一码）是计算机科学领域里的一项业界标准，包括字符集、编码方案等。
Unicode 是为了解决传统的字符编码方案的局限而产生的，它为每种语言中的每个字符设定了统一并且唯一的二进制编码，
以满足跨语言、跨平台进行文本转换、处理的要求。
UTF-8 是 Unicode 的实现方式之一
 */

const unicodeBlock = [0x7f, 0x7ff, 0xffff, 0x1fffff, 0x3ffffff, 0x7fffffff]

var utf8Encoding = function (str) {
  const back = []
  for (let i = 0, len = str.length; i < len; i++) {
    let code = str.charCodeAt(i)
    console.log(code)
    if (code <= unicodeBlock[0]) {
      // 0xxxxxxx
      //a  1100001
      // 01100001
      back.push(code)
    } else if (code <= unicodeBlock[1]) {
      // ƒ
      //110xxxxx 10xxxxxx
      //10 000011
      // 11000010 10000011
      // c2 83
      //0b11000000 | 0b00011111 & 0b10000011 >> 6
      //0b10000000 | 0b00111111 & 0b10000011

      back.push(0b11000000 | 0b00011111 & (code >> 6))
      back.push(0b10000000 | 0b00111111 & (code))
    } else if (code <= unicodeBlock[2]) {
      // 中
      // 1110xxxx 10xxxxxx 10xxxxxx
      // 0100 111000 101101
      // 11100100 10111000 10101101
      // e4 b8 ad

      back.push(0b11100000 | 0b00001111 & (code >> 12))
      back.push(0b10000000 | 0b00111111 & (code >> 6))
      back.push(0b10000000 | 0b00111111 & (code))
    }
  }

  console.log(back)
  const result = back.map(item => item.toString(16))
  return result
}

console.log('结果：', utf8Encoding('中国'))