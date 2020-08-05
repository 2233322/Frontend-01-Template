export class Timeline {
    constructor() {
        this.animations = new Set()
        this.finishedAnimations = new Set()
        this.addTimes = new Map()
        this.state = 'inited'
        this.requestID = null
    }
    tick() {
        let t =  Date.now() - this.startTime
      // console.log(t)
        //let animations = this.animations.filter(animation => !animation.finished)

        for(let animation of this.animations) {
            
            let {object, property, start, end, duration,  delay, timingFunciton, template} = animation

            let addTime = this.addTimes.get(animation)

            if (t < delay + addTime) {
                continue
            }
            //console.log(this.addTimes)
            let progression = timingFunciton((t - delay - addTime) / duration) // 0-1之间
            if (t > duration + delay + addTime) {
                progression = 1
                // animation.finished = true
                this.animations.delete(animation)
                this.finishedAnimations.add(animation)
            }
            

            let value = animation.valueFromProgression(progression)
            // object[property] = template(timingFunciton(start, end)(t - delay))
            object[property] = template(value)
        }
        if (this.animations.size) {
            this.requestID = requestAnimationFrame(() => this.tick())
        } else {
            this.requestID = null
        }
        
    }

    start() {
        if (this.state !== 'inited') return
        this.state = 'playing'
        this.startTime = Date.now()
        this.tick()
    }

    pause() {
        console.log('pause')
        if (this.state !== 'playing') return
        this.state = 'paused'
        this.pauseTime = Date.now()
        if (this.requestID !== null) {
            cancelAnimationFrame(this.requestID)
            this.requestID = null
        }
        
    }

    resume() {
        if (this.state !== 'paused') return
        this.state = 'playing'
        this.startTime += Date.now() - this.pauseTime
        this.tick()
    }

    reset() {
        if(this.state === 'playing') {
            this.pause()
        }

        this.animations = new Set()
        this.finishedAnimations = new Set()
        this.addTimes = new Map()
        this.requestID = null
        this.state = 'playing'
        this.startTime = Date.now()
        this.pauseTime = null
        this.tick()
    }

    restart() {
        console.log('restart')
        if(this.state === 'playing') {
            this.pause()
        }
        for (let animation of this.finishedAnimations) {
            this.animations.add(animation)
        }

        this.finishedAnimations = new Set()
        this.requestID = null
        this.state = 'playing'
        this.startTime = Date.now()
        this.pauseTime = null
        this.tick()
    }

    // addTime 处理后开始时间
    add(animation, addTime) {
        //this.animations.push(animation)
        this.animations.add(animation)
        // animation.finished = false
        if (this.state === 'playing' && this.requestID === null) {
            this.tick()
        }
        if (this.state === 'playing') {
            //animation.addTime = addTime !== void 0 ? addTime : Date.now() - this.startTime
            this.addTimes.set(animation, addTime !== void 0 ? addTime : Date.now() - this.startTime)
        } else {
            //animation.addTime = addTime !== void 0 ? addTime : 0
            this.addTimes.set(animation, addTime !== void 0 ? addTime : 0)
        }

    }
}

export class Animation {
    constructor(object, property, start, end, duration, delay, timingFunciton, template) {
        this.object = object
        this.property = property
        this.template = template
        this.start = start
        this.end = end
        this.duration = duration
        this.delay = delay
        this.timingFunciton = timingFunciton
        // ease linear easeIn easeOut
    }

    valueFromProgression(progression) {
        return this.start + progression * (this.end - this.start)
    }
}

export class ColorAnimation {
    constructor(object, property, start, end, duration, delay, timingFunciton, template) {
        this.object = object
        this.property = property
        this.template = template || (v => `rgba(${v.r}, ${v.g}, ${v.b}, ${v.a})`)
        this.start = start
        this.end = end
        this.duration = duration
        this.delay = delay
        this.timingFunciton = timingFunciton
        // ease linear easeIn easeOut
    }
    valueFromProgression(progression) {
        return {
            r: this.start.r + progression * (this.end.r - this.start.r),
            g: this.start.g + progression * (this.end.g - this.start.g),
            b: this.start.b + progression * (this.end.b - this.start.b),
            a: this.start.a + progression * (this.end.a - this.start.a)
        }
    }

}


/*
  let animation = new Animation(object, property, start, end, duration, delay, timingFunciton)
  let animation2 = new Animation(object2, property2, start, end, duration, delay, timingFunciton)
  let timelint = newe Timeline
  timeline.add(animation)
  timeline.add(animation2)

  timeline.start()
  timeline.pause()
  timeline.resume()
  timeline.stop()
  
  
  animation.start()
  animation2.start()
  animation.pause()
  animation.resume()
  animation.stop()

  
  setTimeout
  setInteval
  requestAnimationFrame
 */