# 1.Viewport
```
name = "viewport"
content = ...
1."width=device-width,initial-scale=1"
2."maximum-scale = "1",minimum-scale="1"
3 user-scalable = "no"(默认yes)
```
# 2.跨域
 浏览器为了保护用户的隐私与数据安全而采用的同源策略,但是实际开发中,我们常常要请求其他地方的资源,此时就需要跨域

### 方法一(jsonp)
```
var oS = document.createElement('script');
oS.src = "www.baidu.com?xxx=xxxx&callback=function
document.head.append(oS)
```
### 方法二(服务端cors设置)
```
if(req.headers[origin].startsWith('指定域名')){
    res.setHeader('Access-Control-Allow-Origin', '*');  //处理跨域
}
```
# 3.javascript事件流

#### 事件捕获阶段
document --> target\
(如何阻止事件捕获:e.stopimmediatepropgation)

#### 事件冒泡阶段
target --> document\
(如何阻止事件冒泡:e.stopPropgation)

# 4.var let const
> (关于变量建议看看《你不知道的javascript》,笔者从底层出发,较为详细说明了javascript编译与执行过程)

var是个大bug,只要当前代码是同一作用域，var会发生预编译(也就是所谓的变量提升、En:hoisting),所以无论在当前作用域的哪一个位置声明变量(eg:var a = 1),var a 都会比 = 号先执行,function声明的优先级>var声明

另外var处于函数作用域⤵️
```
function varTest() {
 var x = 1;
    if (true) {
    var x = 2;  // 同样的变量!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
```
let变量声明处于一个块级作用域,处于一个暂存死区
[About let --MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)

const声明创建一个值的只读引用,其引用是不可变的

# 5.箭头函数与函数声明

箭头函数语法: ()=>{}\
**箭头函数this指向当前执行环境**

普通的函数声明: function(){}\
**this指向调用者**

# 6.polling & long-poll

*polling(轮询)* 不停的去发送请求,请求后即可返回

*long-poll(长轮询)* 发送请求后一直等待,直到真正有数据的时候才返回,这种以类似polling的方式去发送请求减少了服务器发送的数据量

# 7.vue生命周期

```
1.beforeCreated

data = undefined,$el = undefined,this.message = undefined

2.created

data = [Object object],$el = undefined,this.message = 111

3.beforemounted

data = [Object object],$el = \<div id="app">{{message}}\</div>,this.message = 111

4.mounted

data = [Object object],$el = \<div id="app">111\</div>,this.message = 111

5.beforeupdated

data = [Object object],$el = \<div id="app">111\</div>,this.message = 222

6.updated

data = [Object object],$el = \<div id="app">222\</div>,this.message = 222

7.beforedestroyed

当前页面还未删除组件
data = [Object object],$el = \<div id="app">222\</div>,this.message = 222

8.destroyed

当前页面已经删除组件(eg:若app.message = xxx,视图不会发生变化)
data = [Object object],$el = \<div id="app">222\</div>,this.message = 222
```
# 8.innerHtml & createElement & docuemntFragemnt

- 当发生节点操作时，应该尽可能减少重绘与重排

## [点击这里->解释](https://coderwall.com/p/o9ws2g/why-you-should-always-append-dom-elements-using-documentfragments)

>虽然 DOM 为操作节点提供了细致入微的控制手段,但在需要给文档插入大量新 HTML 标记的情况 下,通过 DOM 操作仍然非常麻烦,因为不仅要创建一系列 DOM 节点,而且还要小心地按照正确的顺 序把它们连接起来。相对而言,使用插入标记的技术,直接插入 HTML 字符串不仅更简单,速度也更 快。以下与插入标记相关的 DOM 扩展已经纳入了 HTML5 规范。使用 innerHTML 属性也有一些限制。比如,在大多数浏览器中,通过 innerHTML 插入\<script>元素并不会执行其中的脚本。IE8 及更早版本是唯一能在这种情况下执行脚本的浏览器,但必须满足一 些条件。一是必须为\<script>元素指定 defer 属性,二是\<script>元素必须位于(微软所谓的)“有 作用域的元素”(scoped element)之后。\<script>元素被认为是“无作用域的元素”(NoScope element), 也就是在页面中看不到的元素,与\<style>元素或注释类似。如果通过 innerHTML 插入的字符串开头 就是一个“无作用域的元素”,那么 IE 会在解析这个字符串前先删除该元素。\
\
以上引自《Javascript高级程序设计》——11.3.6 插入标记

# 9.关于innerHtml的执行过程

<br>

# 10.数组的快速乱序 & 字符串回文
```
乱序
let arr = [1,2,3,4,5,6,7]
arr.sort(()=>{ return Math.random() > 0.5 })

字符串回文
let str = 'asbcbhabhb'
str.split('').reverse().join('')
```

# 11.消除transition闪屏(先记录,暂时未遇到过)

### [原链接](https://segmentfault.com/a/1190000013331105)

```
.css{
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
}
    过渡动画（在没有启动硬件加速的情况下）会出现抖动的现象， 以上的 解决方案只是改变 视角 来启动硬件加速的一种方式；
    启动硬件加速的 另外一种方式： 

.css {
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
}
    
    启动硬件加速
    最常用的方式：translate3d、translateZ、transform

    opacity属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）

    will-chang属性（这个比较偏僻），一般配合opacity与translate使用（而且经测试，除了上述可以引发硬件加速的属性外，
    其它属性并不会变成复合层），

    弊端： 硬件加速会导致 CPU性能占用量过大，电池电量消耗加大 ；因此 尽量避免泛滥使用硬件加速。

```