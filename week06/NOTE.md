# 第6周总结

## 有限状态机
* 每一个状态都是一个机器
  * 每个机器里面，可以做计算、存储、输出
  * 所有的机器接受的输入是一致的（类型一致）
  * 状态机的每个机器本身没有状态，如果我们用函数表示的话它应该是纯函数（无副作用）
* 每个机器知道下一个状态
  * 每个机器都有确定的下一个状态（moore） 
  * 每个机器根据输入决定下一个状态（mealy）
  
```js
// 每个函数是一个状态 参数是输入
function state(input) {
  // 在函数中可以自由的编写代码处理每个状态的逻辑
  return next  // 返回值作为下一个状态
}

while(input) {
  state = state(input) // 把状态机的返回值作为下一个状态
}
```


## 浏览器

### 流程：
  
   URL -- http --> HTML -- parse --> DOM -- css computing --> DOM with CSS -- layout --> DOM with position -- render --> bitmap

