# 解析一个四则运算的表达式

* TokenNumber
  * 1 2 3 4 5 6 7 8 9 0
* Operator
  * \+ | - | * | /
* Whitespace
  * \<sp>
* LineTerminator
  *  \<LF> \<CR>

```
<Experssion> ::=
  <AdditiveExpression><EOF>

  <AdditiveExpression> ::=
    <MultiplicativeExpress>
    |<AdditiveExpression><+><MultiplicativeExpress>
    |<AdditiveExpression><-><MultiplicativeExpress>

  <MultiplicativeExpress> ::=
    <Number>
    |<MultiplicativeExpress><*><Number>
    |<MultiplicativeExpress></><Number>
```

# 字符串分析算法
* 字典树
  * 大字符串的完整模式匹配
* KMP
  * 长字符串中找子串O(m+n)
*  WildCard通配符算法
   *  长字符串中找子串升级版
* 正则
  * 字符串通用模式匹配
* 状态机
  * 通用字符串分析
* LL LR
  * 字符串多层级结构分析


# 括号匹配 （LR0）
stack 



- 作业:
  + [解析四则运算](./arithmetic.html)
  + [括号匹配](./parenthesisMatching.html)
  + [Trie字典树](./trie.html)
  + [KMP](./KMP.html)
  + [WildCard](./wildCard.html)