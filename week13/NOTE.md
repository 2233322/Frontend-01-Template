# [proxy](https://es6.ruanyifeng.com/#docs/pr

# 组件化

## 对象与组件

* 对象
  * Properties
  * Methods
  * Inherit (继承)

* 组件
  * Properties
  * Methods
  * Inherit
  * Attribute
  * Config & State
  * Event
  * Lifecycle (生命周期)
  * Children

## Attribute VS Property
Attribute 强调描述性
Property 强调从属性（财产）

```js
class MyComponent{
  constructor(config) {
    this.state = {
      i: 1
    }
  }

  get prop1 () {}

  set prop1 () {}

  getAttribute(attr) {}

  setAttribute(attr, value) {}

  get children() {}
  set children() {}

  render(){}
}

// MyComponent.attr1 = 33
// myComponent = <MyComponent attr1 = '33'>

// myComponet.attr1 = 44

<template>
<MyComponent $ref='abc' class="2">
  <div>Hello world!</div>
</MyComponent>
</template>
<script>
export defualt {
  mounted() {
    this.$ref['abc'].class = 1
  }
}
</script>
```


## Lifecycle

## Children

```js
Carousel

* Carousel

* state
  * activeIndex

* property
  * loop tiem imgList outoplay color  

* attritute
  * startIndex loop tiem imgList autoplay color forward

* children
  *2 种风格 <li><img /></li>
  * append remove add

* event
  change click dbclick hover swipe resize 
  
* method
  *  go() next() prev()
  *  stop() paly()
  *  set

* config

  mode: "useRAF', "setTimout", "setInterval"
  setInterval(tick, 16)
  setTimout()
  requestAnimationFrame


```