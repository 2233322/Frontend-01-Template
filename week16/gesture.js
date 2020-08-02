function enableGesture(element) {
    let contexts = Object.create(null)
    let MOUSE_SYMOBL = Symbol('mouse')
    
    if (document.ontouchstart !== null) {
        element.addEventListener('mousedown', (event) => {
            contexts[MOUSE_SYMOBL] = Object.create(null)
            start(event, contexts[MOUSE_SYMOBL])
            let mousemove = event => {
                move(event, contexts[MOUSE_SYMOBL])
               // console.log(event.clientX, event.clientY)
            }
        
            let mouseend =  event => {
                end(event, contexts[MOUSE_SYMOBL])
                document.removeEventListener('mousemove', mousemove)
                document.removeEventListener('mouseup', mouseend)
            }
        
            document.addEventListener('mousemove', mousemove)
            document.addEventListener('mouseup', mouseend)
        })
    }
    
    
    
    element.addEventListener('touchstart', event => {
        for (let touch of event.changedTouches) {
            contexts[touch.identifier] = Object.create(null)
            start(touch, contexts[touch.identifier])
        }
    })
    
    element.addEventListener('touchmove', event => {
        for (let touch of event.changedTouches) {
            move(touch,contexts[touch.identifier])
        }
    })
    
    element.addEventListener('touchend', event => {
        for (let touch of event.changedTouches) {
            end(touch,contexts[touch.identifier])
            delete contexts[touch.identifier]
        }
    })
    
    element.addEventListener('touchcancel', event => {
        for (let touch of event.changedTouches) {
            cancel(touch,contexts[touch.identifier])
            delete contexts[touch.identifier]
        }
    })
    
    // tap   按下马上放开
    // pan   panstart panmove panend
    // flick
    // press  pressstart pressend    按下过一会在放开
    
    
    let start = (point,context) => {
        element.dispatchEvent(new CustomEvent('start', {
            startX:point.clientX,
            startY:point.clientY,
            clientX:point.clientX,
            clientY:point.clientY
        }))
        context.startX = point.clientX
        context.startY = point.clientY
        context.moves = []
        context.isTap = true
        context.isPan = false
        context.isPress = false
        context.timeoutHander = setTimeout(() => {
            if (context.isPan) {
                return
            }
    
            context.isTap = false
            context.isPan = false
            context.isPress = true
            //console.log('pressstart')
            element.dispatchEvent(new CustomEvent('pressstart', {}))
        }, 500)
        //console.log('start', point.clientX, point.clientY)
    }
    
    let move = (point,context) => {
        let dx = point.clientX - context.startX
        let dy = point.clientY - context.startY
        if (dx ** 2 + dy ** 2  > 100 && !context.isPan) {
            if (context.isPress) {
                element.dispatchEvent(new CustomEvent('presscancel', {}))
            }
            context.isTap = false
            context.isPan = true
            context.isPress = false
            //console.log('panstart')
            element.dispatchEvent(new CustomEvent('panstart', {
                startX:context.clientX,
                startY:context.clientY,
                clientX:point.clientX,
                clientY:point.clientY
            }))
        }
    
        
    
        if (context.isPan) {
            context.moves.push({
                dx,
                dy,
                t: Date.now()
            })
            // 保存最后0.3秒的坐标
            context.moves = context.moves.filter(record => Date.now() - record.t < 300)
            //console.log('pan')
            element.dispatchEvent(new CustomEvent('pan', {
                detail:{
                    startX:context.startX,
                    startY:context.startY,
                    clientX:point.clientX,
                    clientY:point.clientY
                }
            }))
        }
        //console.log('move',dx, dy)
    }
    
    let end = (point,context) => {
        if (context.isPan) {
            let dx = point.clientX - context.startX
            let dy = point.clientY - context.startY
            let record = context.moves[0]
            // moves 第一个和现在end的坐标 算出速度 速度大于2.5 flick
            let speed = Math.sqrt((record.dx - dx) ** 2 + (record.dy - dy) ** 2) / (Date.now() - record.t)
            let isFlick = speed >2.5
            if (isFlick) {
                //console.log('flick')
                element.dispatchEvent(new CustomEvent('flick', {
                    startX:context.clientX,
                    startY:context.clientY,
                    clientX:point.clientX,
                    clientY:point.clientY,
                    speed
                }))
            }

            element.dispatchEvent(new CustomEvent('panend', {
                detail: {
                startX:context.startX,
                startY:context.startY,
                clientX:point.clientX,
                clientY:point.clientY,
                speed,
                isFlick
                }
            }))
            //console.log('panend')
        }
        if (context.isTap) {
            element.dispatchEvent(new CustomEvent('tap', {}))
            console.log('tap')
        }
        if (context.isPress) {
            element.dispatchEvent(new CustomEvent('pressend', {}))
           // console.log('pressend')
        }
    
        clearTimeout(context.timeoutHander)
        //console.log('end', point.clientX, point.clientY)
    }
    
    let cancel = (point,context) => {
        element.dispatchEvent(new CustomEvent('cancel', {}))
        // console.log('cancel')
        clearTimeout(context.timeoutHander)
        //console.log('cancel', point.clientX, point.clientY)
    }
}
