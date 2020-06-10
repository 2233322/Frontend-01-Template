const css = require('css')

function match(element, selector) {
  if (!selector || !element.attributes) {
    return false
  }

  //div.divone#myid.div1
  // 复合选择器判断
  // selector.split('#')[0] 有其他选择器  后面存在.
  // selector.splie('.')[0] 有其他选择器 length > 3  或者  后面存在#
  // /^\w+[.#]/.test(selector) 选择符前面存在标签选择器
  // selector.match(/\w*[.#]\w+(.*)/)  后面是否存在选择器

  if (/^\w+[.#]/.test(selector) || (selector.match(/\w*[.#]\w+(.*)/) && selector.match(/\w*[.#]\w+(.*)/)[1])) {
    selector.match(/^(\w*)((?:\.\w+)*)(#\w+)?((?:\.\w+)*)/)

    let tagSelector = RegExp.$1
    let idSelector = RegExp.$3
    let classSelector = RegExp.$2.concat(RegExp.$4).split('.')
    classSelector.shift()

    if (tagSelector && element.tagName !== tagSelector) {
      return false
    }

    if (idSelector) {
      let attr = element.attributes.filter(attr => attr.name === 'id')[0]
      if (attr && attr.value !== idSelector.replace('#', '')) {
        return false
      }
    }

    if (classSelector.length > 0) {
      let attr = element.attributes.filter(attr => attr.name === 'class')[0]
      let classValues = attr.value.split(' ')
      return classSelector.every(item => classValues.indexOf(item) > -1)
    }

    return true
  }

  let firstChar = selector.charAt(0)
  if (firstChar === '#') {
    let attr = element.attributes.filter(attr => attr.name === 'id')[0]
    if (attr && attr.value === selector.replace('#', '')) {
      return true
    }
  } else if (firstChar === '.') {
    let attr = element.attributes.filter(attr => attr.name === 'class')[0]
    // 多个class情况
    //.a.b    class='a b c'
    if (attr && attr.value.split(' ').length > 0) {
      if (attr.value.split(' ').length === 1) {
        return attr.value === selector.replace('.', '')
      }
      let classValues = attr.value.split(' ')
      selector = selector.split('.')
      selector.shift()
      // 如果selector 每项都能在classValues中找到就返回true
      return selector.every((item => classValues.indexOf(item) > -1))
    }
  } else if (element.tagName === selector) {
    return true
  } else {
    // 符合选择器
  }
  return false
}

// 优先级
// body div #mayid
// [tagName, class, id, inline]
// [2, 0, 1, 0]
function specificity(selector) {
  let p = [0, 0, 0, 0]
  let selectorParts = selector.split(' ')
  for (let part of selectorParts) {
    if (part.charAt(0) === '#') {
      p[2] += 1
    } else if (part.charAt(0) === '.') {
      p[1] += 1
    } else {
      p[0] += 1
    }
  }
  return p
}

// 小于0的话 后面规则覆盖前面的
function compare(sp1, sp2) {
  if (sp1[3] - sp2[3]) {
    return sp1[3] - sp2[3]
  } else if (sp1[2] - sp2[2]) {
    return sp1[2] - sp2[2]
  } else if (sp1[1] - sp2[1]) {
    return sp1[1] - sp2[1]
  }


  return sp1[0] - sp2[0]
}

// 把css规则放到数组里面
let rules = []

function addCSSRules(text) {
  let ast = css.parse(text)
  // console.log(JSON.stringify(ast, null, "    "))
  rules.push(...ast.stylesheet.rules)
}

function computeCSS(element) {
  let elements = []
  let el = element

  if (!element.computedStyle) {
    element.computedStyle = {}
  }

  while (!!el.parent) {
    elements.push(el.parent)
    el = el.parent
  }

  for (let rule of rules) {
    // 是否匹配当条规则
    let matched = false
    var selectorParts = rule.selectors[0].split(' ').reverse()

    // 如果当前元素不匹配 就跳到下一条规则
    if (!match(element, selectorParts[0])) {
      continue
    }

    if (selectorParts.length === 1) {
      // 如果selectorParts只有一个 matched为true
      matched = true
    } else {
      let j = 1 // j selectorParts指针

      // i elements 指针
      for (let i = 0, len = elements.length; i < len; i++) {
        if (match(elements[i], selectorParts[j])) {

          // 规则匹配到了跳出循环
          if (j === selectorParts.length - 1) {
            matched = true
            break
          }
          j++
        }
      }
    }

    if (matched) {
      // 优先级
      let sp = specificity(rule.selectors[0])
      let computedStyle = element.computedStyle
      for (let declaration of rule.declarations) {
        if (!computedStyle[declaration.property]) {
          computedStyle[declaration.property] = {}
        }

        if (!computedStyle[declaration.property].specificity) {
          computedStyle[declaration.property].value = declaration.value
          computedStyle[declaration.property].specificity = sp
        } else if (compare(computedStyle[declaration.property].specificity, sp) < 0) {
          computedStyle[declaration.property].value = declaration.value
          computedStyle[declaration.property].specificity = sp
        }


      }
      // 如果匹配到
      // console.log('element', element, 'matched rule ', rule)
    }
  }
}

module.exports = {
  addCSSRules,
  computeCSS
}