# CSS动画

## animation

基本用法
```css
@keyframes mykf {
  from {
    backgournd-color: red
  }
  to {
    backgorund-color: yellow
  }
}

div {
  animation: mykf 5s infinite
}
```
  * animation 分6个部分
      * animation-name
      * animation-duration
      * animation-timing-function animation-timing-function 使用名为三次贝塞尔（Cubic Bezier）函数的数学函数，来生成速度曲线
      * animation-delay   动画开始之前的延迟
      * animation-iteration-count
      * animation-direction 是否应该轮流反向播放动画

## transition
  * transition 分4个部分
    * transition-property
    * transition-duration
    * transition-timing-function
    * transition-delay

## 三次贝塞尔曲线 
> 线性插值  特点时间曲线平滑

 [怎么理解贝赛尔曲线](https://www.zhihu.com/question/29565629)

 [贝赛尔曲线可视化](https://cubic-bezier.com/#.17,.67,.83,.67)



 ## 渲染与颜色
  * 颜色
    * CMYK
    * RGB

  * 形状
    * border
    * box-shadow
    * border-radius
    * data uri  + svg  data:image/svg+xml, svg


 ## 整理浏览器所有css property
 ```js
 getComputedStyle(document.body)
 ``` 


 ## 常用实体
  ```'
  &quot;   "
  &gt;      >
  &lt;      <
  &amp;     &
  ```

  ## 合法元素
    * Elment <tagName></tagName>
    * Text
    * Comment
    * DocumentType <!DOCTYPE html>
    * processingInstruction <?a1 ?> 处理信息没什么用
    * CDATA <![CDATA[]]>

  ## Node 类型
    * Element
      * HTMLElement
      * SVGElement
    * Document
    * CharacterData
      * Text
      * Comment
      * ProcessingInstruction
    * DocumentFragment
    * DocumentType

  ## 关系导航操作
    * parentNode
    * childNodes
    * firstChild
    * lastChild
    * nextSibling
    * previousSibling

  ## 修改操作
    * appendChild
    * insertBefore
    * removeChild
    * replaceChild
  
  ## 高级操作
    * compareDocumentPosition 比较2个节点的关系
    * contains 一个节点是否包含另一个节点
    * isEqualNode
    * isSameNode  js 中可以用 ===判断
    * cloneNode 克隆一个对象
    * normalize

### 作业 css归类.jpg