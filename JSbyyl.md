# 读《你不知道的javascript》之Javascript编译原理简单总结

首先，聊聊某些传统语言的编译过程,简单概括的话大致如下:

词法分析:js引擎按照特定(ECMASCRIPT)的词语分析规则分析英文单词分解成有意义的代码块,比如var a = 1(包括=,空格，var关键之,变量名a...)

语法分析:将分析好的英文单词按照特定的规则构建一颗抽象语法树(AST-Abstract Syntax Tree),比如树的根节点为VariableAssignment,其子节点为varialbeName,值为a,NumericLiteral的子节点为value,值为1

代码生成:根据不同浏览器厂商的内核,将分析完的语法树解析并生成机器可以看懂的代码

Javascript也是如此,但是浏览器除了要执行javascript代码之外，还要做很多事情(例如渲染页面,资源请求...),而且javascript是即编译即执行的,所以浏览器(更具体的是javascript引擎)中写了各种优化的算法来保证其编译的过程其实非常短。