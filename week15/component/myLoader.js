const parser = require('./parser')

module.exports = function (source) {
  console.log(parser.parseHTML(source))
  console.log('my loader is running !!!!!!!!!!!!!!!!!!', this.resourcePath)

  // 对资源应用一些转换……

  return '';
}