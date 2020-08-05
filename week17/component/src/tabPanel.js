import React from './react'
import { Timeline, Animation } from './animation'
import {ease} from './cubicBezier'

export default class TabPanel {
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
      this.childViews = this.children.map(child => <div style="width:300px;min-height:300px">{child}</div>)
      this.titleView = this.children.map((child, i) => <span onClick={() => this.select(i)} 
          style="background-color:lightgreen;padding:2px 5px;border-right: solid 1px black;font-size:22px">{child.getAttribute('title') || ' '}</span>)
      setTimeout(() => this.select(0), 16);
        let root = <div class="tab-panel" style="border: solid 1px lightgreen;width:300px">
          <h1 style="width:300px;margin:0">{this.titleView}</h1>
          <div style="border: solid 1px lightgreen;">
               {this.childViews}
          </div>
        </div>
        return root
    }
  
  
  
  
    mountTo (parent) {
      this.render().mountTo(parent)
    }
  
  }