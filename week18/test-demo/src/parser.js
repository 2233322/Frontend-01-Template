let currentToken = null // 当前token
let currentAttribute = null

let stack
let currentTextNode = null

const EOF = Symbol('EOF') // End Of File


function emit(token) {
  let top = stack[stack.length - 1]
  if (token.type == 'startTag') {
    let element = {
      type: 'element',
      children: [],
      attributes: []
    }

    element.tagName = token.tagName

    for (let p in token) {
      if (p !== 'tagName' && p !== 'type') {
        element.attributes.push({
          name: p,
          value: token[p]
        })
      }
    }



    top.children.push(element)
    element.parent = top

    // 元素创建好 就调用css规则
    // computeCSS(element)

    // 自封闭标签不入栈
    if (!token.isSelfClosing) {
      stack.push(element)
    }

    currentTextNode = null
  } else if (token.type === 'endTag') {
    if (top.tagName !== token.tagName) {
      throw new Error("Tag start end doesn't match!")
    } else {
      // 遇到style标签时，我们把css规则保存起来
      if (top.tagName === 'style') {
        //  addCSSRules(top.children[0].content)
      }

      // 结束标签布局 
      // layout(top)


      stack.pop()
    }
    currentTextNode = null
  } else if (token.type === 'text') {
    if (currentTextNode === null) {
      currentTextNode = {
        type: 'text',
        content: ''
      }
      top.children.push(currentTextNode)
    }
    currentTextNode.content += token.content
  } else if (token.type === 'comment') {
    top.children.push(token.content)
  }
}


function data(c) {
  if (c === '<') {
    return tagOpen
  } else if (c === EOF) {
    emit({
      type: 'EOF'
    })
    return
  } else {
    emit({
      type: 'text',
      content: c
    })
    return data
  }
}

function tagOpen(c) {
  if (c === '/') {
    return endTagOpen
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'startTag',
      tagName: ''
    }
    return tagName(c)
  } else {
    emit({
      type: 'text',
      content: '<'
    })
    emit({
      type: 'text',
      content: c
    })
    return data
  }
}

function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'endTag',
      tagName: ''
    }
    return tagName(c)
  } else if (c === '>') {
    new Error("missing-end-tag-name parse error!")
    return data
  } else if (c === EOF) {

  } else {
    currentToken = {
      type: 'comment',
      content: '<!--'
    }
    return bogusComment(c)
  }
}

// https://html.spec.whatwg.org/multipage/parsing.html#bogus-comment-state
function bogusComment(c) {
  if (c === '>') {
    currentToken.content += '-->'
    emit(currentToken)
    return data
  } else if (c === EOF) {

  } else if (c === '\u0000') {

  } else {
    currentToken.content += c
    return bogusComment
  }
}

// in script
function scriptData(c) {
 // console.log('script data!!!!')
  if (c === '<') {
    return scriptDataLessThanSign
  } else {
    emit({
      type: 'text',
      content: c
    })

    return scriptData
  }
}

// in script received <
function scriptDataLessThanSign(c) {
  if (c === '/') {
    return scriptDataEndTagOpen
  } else if (c === '<') {
    emit({
      type: 'text',
      content: '<'
    })

    return scriptDataLessThanSign
  } else {

    emit({
      type: 'text',
      content: '<'
    })

    emit({
      type: 'text',
      content: c
    })

    return scriptData
  }
}

// in script received </
function scriptDataEndTagOpen(c) {
  if (c === 's') {
    return scriptDataEndTagNameS
  } else if (c === '<') {
    emit({
      type: 'text',
      content: '</'
    })


    return scriptDataLessThanSign
  } else {
    emit({
      type: 'text',
      content: '<'
    })

    emit({
      type: 'text',
      content: '/'
    })

    emit({
      type: 'text',
      content: c
    })

    return scriptData
  }
}

// in script received </s
function scriptDataEndTagNameS(c) {
  if (c === 'c') {
    return scriptDataEndTagNameC
  } else if (c === '<') {
    emit({
      type: 'text',
      content: '</'
    })

    emit({
      type: 'text',
      content: 's'
    })

    return scriptDataLessThanSign
  } else {
    emit({
      type: 'text',
      content: '</s'
    })

    emit({
      type: 'text',
      content: c
    })
    return scriptData
  }
}

// in script received </sc
function scriptDataEndTagNameC(c) {
  if (c === 'r') {
    return scriptDataEndTagNameR
  } else if (c === '<') {
    emit({
      type: 'text',
      content: '</'
    })

    emit({
      type: 'text',
      content: 'sc'
    })

    return scriptDataLessThanSign
  } else {
    emit({
      type: 'text',
      content: '</sc'
    })

    emit({
      type: 'text',
      content: c
    })
    return scriptData
  }
}

// in script received </scr
function scriptDataEndTagNameR(c) {
  if (c === 'i') {
    return scriptDataEndTagNameI
  } else if (c === '<') {
    emit({
      type: 'text',
      content: '</'
    })

    emit({
      type: 'text',
      content: 'scr'
    })

    return scriptDataLessThanSign
  } else {
    emit({
      type: 'text',
      content: '</scr'
    })

    emit({
      type: 'text',
      content: c
    })
    return scriptData
  }
}

// in script received </scri
function scriptDataEndTagNameI(c) {
  if (c === 'p') {
    return scriptDataEndTagNameP
  } else if (c === '<') {
    emit({
      type: 'text',
      content: '</'
    })

    emit({
      type: 'text',
      content: 'scri'
    })

    return scriptDataLessThanSign
  } else {
    emit({
      type: 'text',
      content: '</scri'
    })

    emit({
      type: 'text',
      content: c
    })
    return scriptData
  }
}

// in script received </scrip
function scriptDataEndTagNameP(c) {
  if (c === 't') {
    return scriptDataEndTag
  } else if (c === '<') {
    emit({
      type: 'text',
      content: '</'
    })

    emit({
      type: 'text',
      content: 'scrip'
    })


    return scriptDataLessThanSign
  } else {
    emit({
      type: 'text',
      content: '</scrip'
    })

    emit({
      type: 'text',
      content: c
    })
    return scriptData
  }
}


// in script received </script
function scriptDataEndTag(c) {
  if (c === ' ') {
    return scriptDataEndTag
  } else if (c === '>') {
    emit({
      type: 'endTag',
      tagName: 'script'
    })
    return data
  } else if (c === '<') {
    emit({
      type: 'text',
      content: '</'
    })

    emit({
      type: 'text',
      content: 'script'
    })

    return scriptDataLessThanSign
  } else {
    emit({
      type: 'text',
      content: '</script'
    })

    emit({
      type: 'text',
      content: c
    })
    return scriptData
  }
}

function tagName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (c === '/') {
    return selfClosingStartTag
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += c.toLowerCase()
    return tagName
  } else if (c === '>') {
    emit(currentToken)
    return data
  } else {
    currentToken.tagName += c.toLowerCase()
    return tagName
  }
}

function beforeAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (c === '>') {
    emit(currentToken)
    return data
  } else if (c === '=') {
    return beforeAttributeName // TODO  <div =
  } else {
    currentAttribute = {
      name: '',
      value: ''
    }
    return attributeName(c)
  }
}

function attributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return afterAttributeName(c)
  } else if (c === '=') {
    return beforeAttributeValue
  } else if (c === '\u0000') {

  } else if (c === '>') {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else {
    currentAttribute.name += c
    return attributeName
  }
}

function beforeAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeValue
  } else if (c === '\"') {
    return doubleQuotedAttributeValue
  } else if (c === "\'") {
    return singleQuotedAttributeValue
  } else if (c === '>') {

  } else {
    return UnquotedAttributeValue(c)
  }
}

function doubleQuotedAttributeValue(c) {
  if (c === '\"') {
    currentToken[currentAttribute.name] = currentAttribute.value
    return afterQuotedAttributeValue
  } else if (c === '\u0000') {

  } else if (c === EOF) {

  } else {
    currentAttribute.value += c
    return doubleQuotedAttributeValue
  }
}

function singleQuotedAttributeValue(c) {
  if (c === '\'') {
    currentToken[currentAttribute.name] = currentAttribute.value
    return afterQuotedAttributeValue
  } else if (c === '\u0000') {

  } else if (c === EOF) {

  } else {
    currentAttribute.value += c
    return singleQuotedAttributeValue
  }
}

function afterQuotedAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else if (c === '/') { // <img id='dd'/
    return selfClosingStartTag
  } else if (c === '>') {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (c === EOF) {

  }
}


function UnquotedAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    currentToken[currentAttribute.name] = currentAttribute.value
    return beforeAttributeName
  } else if (c === '/') {
    currentToken[currentToken.name] = currentAttribute.value
    return selfClosingStartTag
  } else if (c === '>') {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (c === '\u0000') {

  } else {
    currentAttribute.value += c
    return UnquotedAttributeValue
  }
}

function selfClosingStartTag(c) {
  if (c === '>') {
    currentToken.isSelfClosing = true
    emit(currentToken)
    return data
  } else if (c === 'EOF') {

  } else {

  }
}

function afterAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return afterAttributeName
  } else if (c === '/') {
    return selfClosingStartTag
  } else if (c === '=') {
    return beforeAttributeValue
  } else if (c === '>') {
    currentToken[currentAttribute.name] = currentAttribute.value
    emit(currentToken)
    return data
  } else if (c === EOF) {

  } else {
    currentToken[currentAttribute.name] = currentAttribute.value
    currentAttribute = {
      name: '',
      value: ''
    }
    return attributeName(c)
  }
}

export function parseHTML(html) {
  let state = data
  stack =  [{
    type: 'document',
    children: []
  }]
  for (let c of html) {
    state = state(c)

    // 处理script
    if(stack[stack.length -1].tagName === 'script' && state == data) {
      state = scriptData
    }
  }

  state = state(EOF)
  return stack[0]
}


parseHTML(`<div enable></div>`)

// let code = `<div>hello</div>
// let name = 2233322
// </s
// </sc
// </scr
// </scri
// </scrip`
//         let doc = parseHTML(`<script>${code}</script>`)
//         console.log(doc.children[0])

