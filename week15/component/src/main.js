import React from './react'
import Carousel from './carousel.vue'


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


/*class Carousel {
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

    let children = this.data.map(url => {
      let element = <img src={url} />
      element.addEventListener('dragstart', event => event.preventDefault())
      return element
    })

    let root = <div class="carousel">
      {children}
    </div>

    let position = 0
    let nextPic = () => {
      let nextPosition = (position + 1) % this.data.length

      let current = children[position]
      let next = children[nextPosition]

      current.style.transition = 'ease 0s'
      next.style.transition = 'ease 0s'


      // 起始位置
      current.style.transform = `translateX(${- 100 * position}%)` // 移到钱一个位置
      next.style.transform = `translateX(${100 - 100 * nextPosition}%)` // 移到正确的位置


      // requestAnimationFrame(function () { //第一帧上面运行
      //   requestAnimationFrame(function () { // 下一帧才运行
      //     // 使用css rule
      //     current.style.transition = ''
      //     next.style.transition = ''

      //     // 终止位置
      //     current.style.transform = `translateX(${-100 - 100 * position}%)` // 移到钱一个位置
      //     next.style.transform = `translateX(${-100 * nextPosition}%)` // 移到正确的位置


      //     // position += 1
      //     position = nextPosition
      //     console.log(position)
      //   })
      // })

      setTimeout(function () {
        current.style.transition = 'ease .5s'
        next.style.transition = 'ease .5s'

        // 终止位置
        current.style.transform = `translateX(${-100 - 100 * position}%)` // 移到钱一个位置
        next.style.transform = `translateX(${-100 * nextPosition}%)` // 移到正确的位置


        // position += 1
        position = nextPosition
        console.log(position)
      }, 16)

      setTimeout(nextPic, 3000)
    }
    //setTimeout(nextPic, 3000)

    root.addEventListener('mousedown', event => {
      let startX = event.clientX

      let prevPosition = (position - 1 + this.data.length) % this.data.length
      let nextPosition = (position + 1) % this.data.length


      let current = children[position]
      let prev = children[prevPosition]
      let next = children[nextPosition]


      current.style.transition = 'ease 0s'
      prev.style.transition = 'ease 0s'
      next.style.transition = 'ease 0s'


      current.style.transform = `translateX(${- 500 * position}px)`
      prev.style.transform = `translateX(${-500 - 500 * prevPosition}px)`
      next.style.transform = `translateX(${500 - 500 * nextPosition}px)`


      let move = event => {
        current.style.transform = `translateX(${event.clientX - startX - 500 * position}px)`
        prev.style.transform = `translateX(${event.clientX - startX - 500 - 500 * prevPosition}px)`
        next.style.transform = `translateX(${event.clientX - startX + 500 - 500 * nextPosition}px)`
      }

      let up = event => {
        let offset = 0

        if (event.clientX - startX > 30) {
          offset = 1
        } else if (event.clientX - startX < - 30) {
          offset = -1
        }

        // transition use css rulse
        current.style.transition = ''
        prev.style.transition = ''
        next.style.transition = ''


        current.style.transform = `translateX(${offset * 500 - 500 * position}px)`
        prev.style.transform = `translateX(${offset * 500 - 500 - 500 * prevPosition}px)`
        next.style.transform = `translateX(${offset * 500 + 500 - 500 * nextPosition}px)`

        position = (position - offset + this.data.length) % this.data.length

        document.removeEventListener('mousemove', move)
        document.removeEventListener('mouseup', up)
      }
      document.addEventListener('mousemove', move)
      document.addEventListener('mouseup', up)
    })

    return root
  }




  mountTo (parent) {
    this.render().mountTo(parent)
  }

}*/

let data = [
  "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
  "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
  "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
  "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
]


let component = <div>abc</div>



component.mountTo(document.getElementById('root'))


// console.log(component)
// component.id = 4

// console.log(component)