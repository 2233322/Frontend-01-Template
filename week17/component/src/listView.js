import React from './react'
import { Timeline, Animation } from './animation'
import {ease} from './cubicBezier'

export default class ListView {
    constructor(config) {
      this.children = []
      this.root = document.createElement('div')
      this.state = Object.create(null)
    }
    // set id (v) {
    //   console.log(`Parent::id`, v)
    // }
  
    setAttribute (name, value) {
      this[name] = value
    }

    getAttribute(name) {
      return this[name]
    }
  
    appendChild (child) {
      // child.mountTo(this.root)
      this.children.push(child)
    }

    select(i) {
      for(let view of this.childViews) {
        view.style.display = 'none'
      }
      this.childViews[i].style.display = ''

      for(let view of this.titleView) {
        view.classList.remove('selected')
      }
      this.titleView[i].classList.add('selected')
      //this.titleView.innerText = this.children[i].title
    }
  
    render () {
        return <div class="list-view" style="width:300px">
            {
             this.data.map(this.children[0])
            }
        </div>
    }
  
  
  
  
    mountTo (parent) {
      this.render().mountTo(parent)
    }
  
  }