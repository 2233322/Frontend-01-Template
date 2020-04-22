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
  var list = []
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i)
    console.log(code)
    if (0x00 <= code && code <= 0x7f) {
      byteSize += 1
      list.push(code)
    } else if (0x80 <= code && code <= 0x7ff) {
      byteSize += 2
      list.push(0b11000000 | (0b00011111 & (code >> 6)))
      list.push(0b10000000 | (0b00111111 & code))
    } else if (0x800 <= code && code <= 0xffff) {
      byteSize += 3
      list.push(0b11100000 | (0b00001111 & (code >> 12)))
      list.push(0b10000000 | (0b00111111 & (code >> 6)))
      list.push(0b10000000 | (0b00111111 & code))
    } else if (0x10000 <= code && code <= 0x10ffff) {
      byteSize += 4
      list.push(0b11110000 | (0b00000111 & (code >> 18)))
      list.push(0b10000000 | (0b00111111 & (code >> 12)))
      list.push(0b10000000 | (0b00111111 & (code >> 6)))
      list.push(0b10000000 | (0b00111111 & code))
    }
  }
  for (i = 0; i < list.length; i++) {
    list[i] &= 0xff
  }

  const result = list.map((item) => item.toString(16))
  return result
}


console.log(utf8Encoding('广州'))