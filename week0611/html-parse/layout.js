// 获取元素style
function getStyle(element) {
  if (!element.style) {
    element.style = {}
  }

  for (let prop in element.computedStyle) {
    element.style[prop] = element.computedStyle[prop].value

    // 单位只认px
    if (element.style[prop].toString().match(/xp$/)) {
      element.style[prop] = parseInt(element.style[prop])
    }

    if (element.style[prop].toString().match(/^[0-9\.]+$/)) {
      element.style[prop] = parseInt(element.style[prop])
    }
  }
  return element.style
}


function layout(element) {
  if (JSON.stringify(element.computedStyle) === '{}') {
    return
  }
  let elementStyle = getStyle(element)
  // 只处理 display:flex
  if (elementStyle.display !== 'flex') {
    return
  }

  let items = element.children.filter(el => el.type === 'element')

  // 根据order排序
  items.sort((a, b) => (a.order || 0) - (b.order || 0))

  let style = elementStyle
  void
    ['width', 'height'].forEach(size => {
      if (style[size] === 'auto' || style[size] === '') {
        style[size] = null
      }
    })

  // 默认值设置
  if (!style.flexDirection || style.flexDirection === 'auto') {
    style.flexDirection = 'row'
  }
  if (!style.flexWrap || style.flexWrap === 'auto') {
    style.flexWrap = 'nowrap'
  }
  if (!style.justifyContent || style.justifyContent === 'auto') {
    style.justifyContent = 'flex-start'
  }
  if (!style.alignItems || style.alignItems === 'auto') {
    style.alignItems = 'stretch'
  }
  if (!style.alignContent || style.alignContent === 'auto') {
    style.alignContent = 'stretch'
  }

  let mainSize, mainStart, mainEnd, mainSign, mainBase,
    crossSize, crossStart, crossEnd, crossSign, crossBase
  if (style.flexDirection === 'row') {
    mainSize = 'width'
    mainStart = 'left'
    mainEnd = 'right'
    mainSign = +1 // +
    mainBase = 0

    crossSize = 'height'
    crossStart = 'top'
    crossEnd = 'bottom'
  }

  if (style.flexDirection === 'row-reverse') {
    mainSize = 'width'
    mainStart = 'right'
    mainEnd = 'left'
    mainSign = -1 // -
    mainBase = style.width

    crossSize = 'height'
    crossStart = 'top'
    crossEnd = 'bottom'
  }

  if (style.flexDirection === 'column') {
    mainSize = 'height'
    mainStart = 'top'
    mainEnd = 'bottom'
    mainSign = +1
    mainBase = 0

    crossSize = 'width'
    crossStart = 'left'
    crossEnd = 'right'
  }

  if (style.flexDirection === 'column-reverse') {
    mainSize = 'height'
    mainStart = 'top'
    mainEnd = 'bottom'
    mainSign = -1
    mainBase = style.height

    crossSize = 'width'
    crossStart = 'left'
    crossEnd = 'right'
  }

  // 如果是wrap-reverse 交叉轴开始结束交换
  if (style.flexWrap === 'wrap-reverse') {
    let tmp = crossStart
    crossStart = crossEnd
    crossEnd = tmp
    crossSign = -1
  } else {
    crossBase = 0
    crossSign = 1
  }

  let isAutoMainSize = false
  // 如果不存在mainSize mainSize就是子元素mainSize之和
  if (!style[mainSize]) { //atuo sizing
    elementStyle[mainSize] = 0
    for (let i = 0; i < items.length; i++) {
      let item = items[i]
      let itemStyle = getStyle(item)
      if (itemStyle[mainSize] !== null || itemStyle[mainSize] !== void 0) {
        elementStyle[mainSize] += itemStyle[mainSize]
      }
      isAutoMainSize = true
    }
  }

  let flexLine = []
  let flexLines = [flexLine]

  // 剩余空间  一个元素都没放的时候是mainSize
  let mainSpace = elementStyle[mainSize]

  // 交叉轴占空间
  let crossSpace = 0

  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    let itemStyle = getStyle(item)
    if (itemStyle[mainSize] === null) {
      itemStyle[mainSize] = 0
    }

    // flex 1 自动缩放
    if (itemStyle.flex) {
      flexLine.push(item)
    } else if (style.flexWrap === 'nowrap' && isAutoMainSize) {
      mainSpace -= itemStyle[mainSize]
      if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== void 0) {
        crossSpace = Math.max(crossSpace, itemStyle[crossSize])
      }
      flexLine.push(item)
    } else {

      if (itemStyle[mainSize] > style[mainSize]) {
        itemStyle[mainSize] = style[mainSize]
      }
      // 500 500
      if (mainSpace < itemStyle[mainSize]) {

        // 保存上一行的信息
        flexLine.mainSpace = mainSpace
        flexLine.crossSpace = crossSpace

        flexLines.push(flexLine)

        flexLine = [item]

        mainSpace = style[mainSize]
        crossSpace = 0
      } else {
        flexLine.push(item)
      }

      if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== void 0) {
        crossSpace = Math.max(crossSpace, itemStyle[crossSize])
      }

      mainSpace -= itemStyle[mainSize]
    }
  }
  flexLine.mainSpace = mainSpace

  // 计算主轴
  if (style.flexWrap === 'nowrap' || isAutoMainSize) {
    flexLine.crossSpace = (style[crossSize] !== void 0) ? style[crossSize] : crossSpace
  } else {
    flexLine.crossSpace = crossSpace
  }

  // 剩余空间小于0
  if (mainSpace < 0) {
    // overflow (happens only if container is single line) scale every item
    // 缩放的值
    let scale = style[mainSize] / (style[mainSize] - mainSpace)
    let currentMain = mainBase
    for (let i = 0; i < items.length; i++) {
      let item = items[i]
      let itemStyle = getStyle(item)
      if (itemStyle.flex) {
        itemStyle[mainSize] = 0
      }

      itemStyle[mainSize] = itemStyle[mainSize] * scale
      itemStyle[mainStart] = currentMain
      itemStyle[mainEnd] = currentMain + itemStyle[mainSize] * mainSign
      currentMain = itemStyle[mainEnd]
    }
  } else {
    // process each flex line
    flexLines.forEach(items => {
      mainSpace = items.mainSpace
      let flexTotal = 0
      for (let i = 0; i < items.length; i++) {
        let item = items[i]
        let itemStyle = getStyle(item)
        if ((itemStyle.flex !== null) && (itemStyle.flex !== void 0)) {
          flexTotal += itemStyle.flex
        }
      }

      if (flexTotal > 0) {
        // there is flexible flex items
        let currentMain = mainBase
        for (let i = 0; i < items.length; i++) {
          let item = items[i]
          let itemStyle = getStyle(item)

          if (itemStyle.flex) {
            itemStyle[mainSize] = (mainSpace / flexTotal) * itemStyle.flex
          }
          itemStyle[mainStart] = currentMain
          itemStyle[mainEnd] = currentMain + itemStyle[mainSize] * mainSign
          currentMain = itemStyle[mainEnd]
        }
      } else {
        // There is No flexible flex items, which means justifyContent shoud work
        let currentMain, step
        if (style.justifyContent === 'flex-start') {
          currentMain = mainBase
          step = 0
        }

        if (style.justifyContent === 'flex-end') {
          currentMain = mainSpace * mainSign + mainBase
          step = 0
        }

        if (style.justifyContent === 'centent') {
          currentMain = mainSpace / 2 * mainSign + mainBase
          step = 0
        }

        if (style.justifyContent === 'space-between') {
          currentMain = mainBase
          step = mainSpace / (items.length - 1) * mainSign
        }

        if (style.justifyContent === 'space-around') {
          step = mainSpace / items.length * mainSign
          currentMain = step / 2 + mainBase
        }

        for (let i = 0; i < items.length; i++) {
          let item = items[i]
          let itemStyle = getStyle(item)
          itemStyle[mainStart] = currentMain
          itemStyle[mainEnd] = currentMain + itemStyle[mainSize] * mainSign
          currentMain = itemStyle[mainEnd] + step
        }
      }
    })
  }


  // compute the cross axis sizes
  // align-items, align-self
  let crossSpace // 真实高度
  if (!style[crossSize]) {
    crossSpace = 0
    elementStyle[crossSize] = 0
    for (let i = 0; i < flexLines.length; i++) {
      elementStyle[crossSize] += flexLines[i].crossSpace
    }
  } else {
    crossSpace = style[crossSize]
    for (let i = 0; i < flexLines.length; i++) {
      crossSpace -= flexLines[i].crossSpace
    }
  }

  if (style.flexWrap === 'wrap-reverse') {
    crossBase = style[crossSize]
  } else {
    crossBase = 0
  }

  let step
  if (style.alignContent === 'flex-start') {
    crossBase += 0
    step = 0
  }

  if (style.alignContent === 'flex-end') {
    crossBase += crossSign * crossSpace
    step = 0
  }

  if (style.alignContent === 'center') {
    crossBase += crossSign * crossSpace / 2
    step = 0
  }

  if (style.alignContent === 'space-between') {
    crossBase += 0
    step = crossSpace / (flexLines.length - 1)
  }

  if (style.alignContent === 'space-around') {
    step = crossSpace / flexLines.length
    crossBase += crossSign * step / 2
  }

  if (style.alignContent === 'stretch') {
    crossBase += 0
    step = 0
  }
}


module.exports = layout