import React from './react'
// import {Carousel} from './carousel.vue'
import Carousel from './carousel'
//import TabPanel from './tabPanel'
//import ListView from './listView'

// class MyComponent {
//   constructor(config) {
//     console.log(config)
//     this.children = []
//     this.root = document.createElement('div')
//   }
//   // set id (v) {
//   //   console.log(`Parent::id`, v)
//   // }

//   setAttribute (name, value) {
//     this.root.setAttribute(name, value)
//   }

//   appendChild (child) {
//     // child.mountTo(this.root)
//     this.children.push(child)
//   }

//   render () {

//     return <article>
//       <header>I'm a header</header>
//       {this.slot}
//       <footer>I'm a footer</footer>
//     </article>
//   }

//   mountTo (parent) {

//     this.slot = <div></div>

//     for (let child of this.children) {
//       //child.mountTo(this.root)

//       this.slot.appendChild(child)
//     }

//     this.render().mountTo(parent)

//     // parent.appendChild(this.root)

//   }

// }



//Carousel data
let data = [
  "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
  "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
  "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
  "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
]


let component = <Carousel data={data}/>

component.mountTo(document.getElementById('root'))
/*
let panel = <TabPanel tt='hello!!!!!!!!!!!'>
  <span title="title1">this is content 1</span>
  <span title="title2">this is content 2</span>
  <span title="title3">this is content 3</span>
  <span title="title4">this is content 4</span>
</TabPanel>






window.panel = panel
*/


// child 作为render模板
// let data = [
//   {title: '蓝猫', url: "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg"},
//   {title:'橘猫加白', url: "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg"},
//   {title:'狸花猫', url: "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg"},
//   {title:'橘猫', url: "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg"}
// ]


// let list = <ListView data={data}>
//   {record => <figure>
//     <img src={record.url}/>
//     <figcaption>{record.title}</figcaption>
//   </figure>}
// </ListView>

// list.mountTo(document.getElementById('root'))

// console.log(component)
// component.id = 4

// console.log(component)