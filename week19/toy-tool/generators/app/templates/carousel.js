import React from './react'
import { Timeline, Animation } from './animation'
import {ease} from './cubicBezier'
import css from './carousel.css'

export default class Carousel {
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
        let timeline = new Timeline
        // window.xtimeline = timeline
        timeline.start()

        let position = 0
        let nextPicStopHandler = null

        let children = this.data.map((url, currentPosition) => {
            let prevPosition = (currentPosition - 1 + this.data.length) % this.data.length
            let nextPosition = (currentPosition + 1) % this.data.length

            let offset = 0 // 偏移

            let onStart = () => {
                timeline.pause()
                clearTimeout(nextPicStopHandler)
                let currentElement = children[currentPosition]

                let currentTransformValue = Number(currentElement.style.transform.match(/^translateX\(([\s\S]+)px\)/)[1])
                offset = currentTransformValue + 500 * currentPosition
                
            }
    
            let onPan = event => {

                console.log('pan!!!!')

                let prevElement = children[prevPosition]
                let currentElement = children[currentPosition]
                let nextELement = children[nextPosition]

                let dx = event.detail.clientX - event.detail.startX

                let prevTransformValue = -500 - 500 * prevPosition + offset + dx
                let currentTransformValue = -500 * currentPosition + offset + dx
                let nextTransformValue = 500 - 500 * nextPosition + offset + dx

                //console.log(event)

               

                //console.log(prevTransformValue, currentTransformValue, nextTransformValue)

                prevElement.style.transform = `translateX(${prevTransformValue}px)`
                currentElement.style.transform = `translateX(${currentTransformValue}px)`
                nextELement.style.transform = `translateX(${nextTransformValue}px)`
            }

            let onPanend = event => {
                console.log('flick:', event.detail.isFlick)
                let direction = 0
                let dx = event.detail.clientX - event.detail.startX
        
                if (dx + offset > 200 || dx > 0 && event.detail.isFlick) {
                    direction = 1
                } else if (dx + offset < - 200 || dx < 0 && event.detail.isFlick) {
                    direction = -1
                }

                console.log(direction)
                console.log(dx + offset)

                timeline.reset()
                timeline.start()

                let prevElement = children[prevPosition]
                let currentElement = children[currentPosition]
                let nextELement = children[nextPosition]

                let prevAnimation = new Animation(prevElement.style, 'transform', -500 - 500 * prevPosition + offset + dx, -500 - 500 * prevPosition + direction * 500, 500, 0,  ease, v => `translateX(${v}px)`)
                let currentAnimation = new Animation(currentElement.style, 'transform', -500 * currentPosition + offset + dx, - 500 * currentPosition + direction * 500, 500, 0,  ease, v => `translateX(${v}px)`)
                let nextAnimation = new Animation(nextELement.style, 'transform', 500 - 500 * nextPosition + offset + dx, 500 - 500 * nextPosition + direction * 500, 500, 0,  ease, v => `translateX(${v}px)`)

                timeline.add(prevAnimation)
                timeline.add(currentAnimation)
                timeline.add(nextAnimation)

                position = (position - direction + this.data.length) % this.data.length

                nextPicStopHandler = setTimeout(nextPic, 3000)

                /* current.style.transform = `translateX(${offset * 500 - 500 * position}px)`
                prev.style.transform = `translateX(${offset * 500 - 500 - 500 * prevPosition}px)`
                next.style.transform = `translateX(${offset * 500 + 500 - 500 * nextPosition}px)` */
  
            }

            let onTap = () => {
                timeline.resume()
            }

            let onPressend = () => {
                timeline.resume()
            }


            let element = <img src={url} onStart={onStart} onTap={onTap} onPressend={onPressend} onPan={onPan} onPanend={onPanend} enableGesture={true}/>
            element.addEventListener('dragstart', event => event.preventDefault())
            element.style.transform='translateX(0px)'
            return element
        })
  
      let root = <div class="carousel">
        {children}
      </div>
  
     
      let nextPic = () => {
        let nextPosition = (position + 1) % this.data.length
  
        let current = children[position]
        let next = children[nextPosition]
  
        let currentAnimation = new Animation(current.style, 'transform', - 100 * position, -100 - 100 * position, 500, 0,  ease, v => `translateX(${5 * v}px)`)
        let nextAnimation = new Animation(next.style, 'transform', 100 - 100 * nextPosition, -100 * nextPosition, 500, 0,  ease, v => `translateX(${5 * v}px)`)
  
        // current.style.transition = 'ease 0s'
        // next.style.transition = 'ease 0s'
  
  
        // 起始位置
        // current.style.transform = `translateX(${- 100 * position}%)` // 移到钱一个位置
        // next.style.transform = `translateX(${100 - 100 * nextPosition}%)` // 移到正确的位置
  
  
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
  
        timeline.add(currentAnimation)
        timeline.add(nextAnimation)
  
        
  
        position = nextPosition
  
        // setTimeout(function () {
        //   // current.style.transition = 'ease .5s'
        //   // next.style.transition = 'ease .5s'
  
        //   // // 终止位置
        //   // current.style.transform = `translateX(${-100 - 100 * position}%)` // 移到钱一个位置
        //   // next.style.transform = `translateX(${-100 * nextPosition}%)` // 移到正确的位置
  
  
        //   // position += 1
        //   position = nextPosition
        //   console.log(position)
        // }, 16)

  
        // window.xstopHandler = setTimeout(nextPic, 3000)
        nextPicStopHandler = setTimeout(nextPic, 3000)
      }
      nextPicStopHandler = setTimeout(nextPic, 3000)
  
      // root.addEventListener('mousedown', event => {
      //   let startX = event.clientX
  
      //   let prevPosition = (position - 1 + this.data.length) % this.data.length
      //   let nextPosition = (position + 1) % this.data.length
  
  
      //   let current = children[position]
      //   let prev = children[prevPosition]
      //   let next = children[nextPosition]
  
  
      //   current.style.transition = 'ease 0s'
      //   prev.style.transition = 'ease 0s'
      //   next.style.transition = 'ease 0s'
  
  
      //   current.style.transform = `translateX(${- 500 * position}px)`
      //   prev.style.transform = `translateX(${-500 - 500 * prevPosition}px)`
      //   next.style.transform = `translateX(${500 - 500 * nextPosition}px)`
  
  
      //   let move = event => {
      //     current.style.transform = `translateX(${event.clientX - startX - 500 * position}px)`
      //     prev.style.transform = `translateX(${event.clientX - startX - 500 - 500 * prevPosition}px)`
      //     next.style.transform = `translateX(${event.clientX - startX + 500 - 500 * nextPosition}px)`
      //   }
  
      //   let up = event => {
      //     let offset = 0
  
      //     if (event.clientX - startX > 30) {
      //       offset = 1
      //     } else if (event.clientX - startX < - 30) {
      //       offset = -1
      //     }
  
      //     // transition use css rulse
      //     current.style.transition = ''
      //     prev.style.transition = ''
      //     next.style.transition = ''
  
  
      //     current.style.transform = `translateX(${offset * 500 - 500 * position}px)`
      //     prev.style.transform = `translateX(${offset * 500 - 500 - 500 * prevPosition}px)`
      //     next.style.transform = `translateX(${offset * 500 + 500 - 500 * nextPosition}px)`
  
      //     position = (position - offset + this.data.length) % this.data.length
  
      //     document.removeEventListener('mousemove', move)
      //     document.removeEventListener('mouseup', up)
      //   }
      //   document.addEventListener('mousemove', move)
      //   document.addEventListener('mouseup', up)
      // })
  
      return root
    }
  
  
  
  
    mountTo (parent) {
      this.render().mountTo(parent)
    }
  
  }