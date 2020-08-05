import React from './react'
import { Timeline, Animation } from './animation'
import {ease} from './cubicBezier'

export default class Panel {
    constructor(config) {
      this.children = []
      this.root = document.createElement('div')
    }
    // set id (v) {
    //   console.log(`Parent::id`, v)
    // }
  
    setAttribute (name, value) {
      this[name] = value
    }
  
    appendChild (child) {
      // child.mountTo(this.root)
      this.children.push(child)
    }
  
    render () {
        let root = <div class="panel" style="border: solid 1px lightgreen;width:300px">
          <h1 style="background-color:lightgreen;width:300px;margin:0">{this.title}</h1>
          <div style="width:300px;min-height:300px">
             {this.children}
          </div>
        </div>
        return root
    }
  
  
  
  
    mountTo (parent) {
      this.render().mountTo(parent)
    }
  
  }