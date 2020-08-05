const React = {}
import { enableGesture } from './gesture'
React.createElement = function (Cls, attributes, ...children) {
 // console.log(arguments)
  let o
  if (typeof Cls === 'string') {
    o = new Wrapper(Cls)
  } else {
    o = new Cls({
      timer: {}
    })
  }

  for (let name in attributes) {
    o.setAttribute(name, attributes[name])
  }

  let visit = (children) => {
    for (let child of children) {
      if (Array.isArray(child)) {
        visit(child)
        continue
      }

      if (typeof child === 'string') {
        child = new Text(child)
      }


      o.appendChild(child)
    }
  }

  visit(children)

  return o
}


class Wrapper {
  constructor(type) {
    this.children = []
    this.root = document.createElement(type)
  }

  setAttribute(name, value) {
   // console.log(name, value)

   // this[name] = value
    this.root.setAttribute(name, value)


    if (name.match(/^on([\s\S]+)$/)) {
      let eventName = RegExp.$1.replace(/^[\s\S]/, c => c.toLocaleLowerCase())
      this.addEventListener(eventName, value)
    }

    if (name === 'enableGesture') {
      enableGesture(this.root)
    }
  }

  appendChild(child) {
    child.mountTo(this.root)
  }

  addEventListener() {
    this.root.addEventListener(...arguments)
  }

  getAttribute(name) {
    return this.root.getAttribute(name)
  }

  get style() {
    return this.root.style
  }

  get classList() {
    return this.root.classList
  }

  set innerText (text) {
    return this.root.innerText = text
  }

  mountTo(parent) {
    parent.appendChild(this.root)

    for(let child of this.children) {
      child.mountTo(this.root)
    }
  }
}

class Text {
  constructor(text) {
    this.root = document.createTextNode(text)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
  }

  getAttribute(name) {
    return
  }
}


export default React