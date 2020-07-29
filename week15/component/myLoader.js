const parser = require('./parser')

module.exports = function (source) {
  let tree = parser.parseHTML(source)[0]

  let tempalet = null
  let script = null

  for (let node of tree.children) {
    if (node.tagName === 'template') {
      tempalet = node.children.filter(e => e.type != 'text')[0]
    }

    if (node.tagName === 'script') {
        script = node.children[0].content
    }
  }

  console.log(tempalet)

  let visit = (node, depth) => {
    if (node.type === 'text') {
      return JSON.stringify(node.content)
    }
    let attrs  = {}
    for (let attrubute of node.attributes) {
      attrs[attrubute.name] = attrubute.value
    }

    let children = node.children.map(node => visit(node))
    return `React.createElement('${node.tagName}', ${JSON.stringify(attrs)}, ${children})`
  }

  return `
  import React from './react'
  export class Carousel {
    setAttribute (name, value) {
      this[name] = value
    }
  render() {
      return ${visit(tempalet)}
    }
    mountTo(parent) {
      this.render().mountTo(parent)
    }
  }
  `
}