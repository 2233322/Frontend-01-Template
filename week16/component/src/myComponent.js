const React = {}
React.createElement = function (Cls, attributes, ...children) {
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

  for (let child of children) {
    if (typeof child === 'string') {
      child = new Text(child)
    }


    o.appendChild(child)
  }

  return o
}

class Wrapper {
  constructor(type) {
    this.children = []
    this.root = document.createElement(type)
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }

  appendChild(child) {
    child.mountTo(this.root)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class Text {
  constructor(text) {
    this.root = document.createTextNode(text)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class MyComponent {
  constructor(config) {
    console.log(config)
    this.children = []
    this.root = document.createElement('div')
  }
  // set id (v) {
  //   console.log(`Parent::id`, v)
  // }

  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }

  appendChild(child) {
    // child.mountTo(this.root)
    this.children.push(child)
  }

  render() {

      return <article>
        <header> I 'm a header</header> {
      this.slot
    } <footer> I 'm a footer</footer></article>
}

mountTo(parent) {

  this.slot = <div> </div>

  for (let child of this.children) {
    //child.mountTo(this.root)

    this.slot.appendChild(child)
  }

  this.render().mountTo(parent)

  // parent.appendChild(this.root)

}

}


let component = <MyComponent id = "123" class = "clss" style = "width:100px;height:100px;background:red">
  <div>text texrt</div> </MyComponent>
  
  component.mountTo(document.getElementById('root'))
// console.log(component)
// component.id = 4

// console.log(component)