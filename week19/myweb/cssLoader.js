let css = require('css')

module.exports = function (source) {
    var stylesheet = css.parse(source)
    console.log(this.resourcePath)
    let name = this.resourcePath.match(/([^\\]+).css$/)[1]

    for (let rule of stylesheet.stylesheet.rules) {
        
        rule.selectors = rule.selectors.map(selector =>
            selector.match(new RegExp(`^.${name}`)) ? selector :
            `.${name} ${selector}`
        )
    }

    
  return `
    let styleElement = document.createElement('style')
    styleElement.innerHTML = ${JSON.stringify(css.stringify(stylesheet))}
    document.getElementsByTagName('head')[0].appendChild(styleElement)`
}