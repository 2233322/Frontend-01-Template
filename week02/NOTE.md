# 第二周总结

## 编程语言通识与JavaScript语言设计
### 让我们读懂标准从更底层来理解语言

* 从语法角度来分类
  * 非形式语言
    * 人类自然语言(中文、英文)
  * 形式语言（乔姆斯基谱系）
    * 0型 无限制文法
    * 1型 上下文相关文法 {get a {return},  get: 1}
    * 2型 上下文无关文法 (大部分语言)
    * 3型 正则文法

* 产生式（BNF）
  * BNF的基本语法：
    * 在双引号中的字 "word" 代表着这些字符本身。而double_quote用来代表双引号
    * 在双引号外的字（有可能有下划线）代表着语法部分
    * <> 内包含的为必选项
    * [] 内包含的为可选项
    * {} 内包含的为可重复0至无数次的项
    * () 内包含的所有项为一组，用来控制表达式的优先级
    * | 相当于"OR"的意思
    * ::= 是“被定义为”的意思
    * ...  表示术语符号

```    
作业中要求匹配Number、String 我把ECMA-262中Number、String中的定义改成BNF定义了 在./src/*.js中
??? 还有2句不知道怎么写
1、SourceCharacter but not one of ' or \ or LineTerminator
2、0 [lookahead ∉ DecimalDigit]
```

* 图灵完备性
  * 命令式--图灵机
    * goto
    * if/while
  * 声明式--lambda
    * 递归

* 类型系统
  * 动态类型、静态类型
  * 强类型（无隐式转换）、弱类型（有隐式转换）
  * 复合类型
  * 子类型
    * 逆变、协变


## JavaScript | 词法，类型

### 从细节到模块

* [unicode](https://www.fileformat.info/info/unicode/) 统一字符标准码
  * 0 ~ 0x7f  ASCLL 常用拉丁字符
  ```
  String.fromCharCode(97) // a
  'a'.charCodeAt(0)     // 97  unicode 序号
  'a'.charCodeAt(0).toString(16)    // 61   
  ```

* InputElement
  * WhiteSpace
    * Table 32: White Space Code Points
  * LineTerminator
    * \<LF>U+000A 换行 \n
    * \<CR>U+000D 回车 \r
    * \<LS>U+2028 !不要用不在ASCLL
    * \<PS>U+2029 !不要用不在ASCLL
  * Comment
  * Token
    * IdentifierName
      * Keywords
      * Indetifier （不能是keywords）
        * 属性可以是keywords
    * Punctuator （符号）
    * Literal (直接量)
      * NUll
      * Undefined
      * Number
        * Number.MAX_SAFE_INTEGER.toString(16) 安全整数
        * Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON
      * String
        * ASCLL
        * Unicode
          * utf-8 utf-16 utf-32  都是Unicode的实现
        * UCS U+0000 - U+FFFF
        * GB
          * GB2312
          * GBK(GB13000)
          * GB18030
        * ISO-8859
        * BIG5 
      * Boolean
      * Object
      * Symbol
    * Template

## Table 32: White Space Code Points
| Code Point | Name                      | Abbreviation |
| ---------- | ------------------------- | ------------ |
| U+0009     | CHARACTER TABULATION      | \<TAB>       |
| U+000B     | LINE TABULATION           | \<VT>        |
| U+000C     | FORM FEED (FF)            | \<FF>        |
| U+0020     | SPACE                     | \<SP>        |
| U+00A0     | NO-BREAK SPACE            | \<NBSP>      |
| U+FEFF     | ZERO WIDTH NO-BREAK SPACE | \<ZWNBSP>    |