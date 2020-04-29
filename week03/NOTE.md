# 第二周总结

## 表达式，类型转换

### [优先级汇总表](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

### 位运算符、布尔操作
```js
位运算  转成二进制操作后在转回
~ 按位非  取反
& 按位与  都为1才返回1否则为0
| 按位或  都为0才返回0否则为1
^ 按位异或 只有1个1时返回1否则为0

移动操作   转成二进制移动位数操作后在转回
<< 左移
>> 有符号右移
>>> 无符号右移

布尔操作 短路操作
&& 逻辑与 a && b  a为true 时才运行b
|| 逻辑或 a || b  a为false 时允许b
```

### 类型转换
```js
Number
Number('123')  // 123
Number(true)   // 1
Number('12f')  // NaN
Number(Object) // 如果有 [Symbol.toPrimitive] 返回  || 调用valueOf()为NaN 在调用toString()

parseInt(123)  // 123
parseInt(123.123)  // 123
parseInt('123ff')  // 123
parseFloat(123.123)   // 123.123
parseFloat('123.123ff')   // 123.123

(10).toString(2)  // 1010
(0b1110).toString(10) // 14
(0b1110).toString(16)  // e

```


## JS 标准里面有哪些对象是我们无法实现的，都有哪些特性

* Bound Function Exotic Objects
  * [[Call]]
  * [[Construct]]

* Array Exotic Objects
  * [[DefineOwnProperty]]
  * ArrayCreate(length[,proto])
  * ArraySpeciesCreate(originalArray,length)
  * ArraySetLength(A,Desc)

* String Exotic Objects
  * [[GetOwnProperty]]
  * [[DefineOwnProperty]]
  * [[OwnPropertyKeys]]
  * StringCreate(value,prototype)
  * StringGetOwnProperty(S,P)

* Arguments Exotic Objects
  * [[GetOwnProperty]]
  * [[DefineOwnProperty]]
  * [[Get]]
  * [[Set]]
  * [[Delete]]
  * CreateUnmappedArgumentsObject(argumentsList)
  * CreateMappedArgumentsObject(func,formals,argumentsList,env)

* Integer-Indexed Exotic Objects
  * [[GetOwnProperty]]
  * [[HasProperty]]
  * [[DefineOwnProperty]]
  * [[Get]]
  * [[Set]]
  * [[OwnPropertyKeys]]
  * IntegerIndexedObjectCreate(prototype,internalSlotsList)
  * IntegerIndexedElementGet(O,index)
  * IntegerIndexedElementSet(O,index,value)

* Module Namespace Exotic Objects
  * [[SetPrototypeOf]]
  * [[IsExtensible]]
  * [[PreventExtensions]]
  * [[GetOwnProperty]]
  * [[DefineOwnProperty]]
  * [[HasProperty]]
  * [[Get]]
  * [[Set]]
  * [[Delete]]
  * [[OwnPropertyKeys]]
  * ModuleNamespaceCreate(module,exports)

* Immutable Prototype Exotic Objects
  * [[SetPrototypeOf]]
  * SetImmutablePrototype