# Javascript

[ajax](#ajax)

[跨域](#跨域)

[new过程模拟](#new过程模拟)

[Dom事件流](#DOM事件流)

[原型链](#原型链)

[Javascript中的继承](#Javascript中的继承)

[回调地狱](#回调地狱)

---

## ajax

```javascript
function ajax(options) {

  options.url = options.url || ''
  options.type = options.type || 'GET'
  options.data = options.data || {}
  options.dataType = options.dataType || 'text'

  var xhr = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP')

  let data = options.data

  if (options.type === 'GET') {
    let arr = []
    for (let i in data) {
      arr.push(`${i}=${data[i]}`)
    }
    let strdata = arr.join('&')
    xhr.open('GET', options.url + '?' + strdata, true)
    xhr.send()
  }

  if (options.type === 'POST') {
    xhr.open('POST', options.url, true)
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.send(data)
  }

  // xhr.onreadystatechange 当一个 XMLHttpRequest 请求被 abort() 方法取消时，其对应的 readystatechange 事件不会被触发。
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange
  xhr.onload = function () {
    if (xhr.status == 200 || xhr == 304) {
      options.success()
    } else {
      options.error()
    }
  }
}
```

---

## 跨域

### 1.JSONP

```javascript
let sc = document.createElement('script')
sc.src = 'http://www.xxx.com?a=1&b=2&cb=do'
document.body.append(sc)
```

### 2.后端设置Cross-Access-Allow-Origin

```javascript
this.set('Cross-Access-Allow-Origin','*')
```

### 3.document.domain跨域(前提主域相同)

例如:www.a.com引入了www.a.b.com的页面

在www.a.b.com中设置

```javascript
document.domain = 'a.com'
```

### 4.postMessage跨域

```javascript
// 父窗体像子窗体发送消息
let win = document.getElementsByTagName('iframe')[0].contentWindow
win.postMessagge('hello',*)

// 子窗体进行监听
window.addEventListener('message', onMessage, false);

var onMessage = function(){
  console.log(e, e.data);
  if(e.origin != "http://moweide.gitcafe.io"){
    return false;
  }
  // 消息处理...
}
```

### 5.websocket跨域

由于websocket使用的socket协议,不采取同源策略因此默认支持跨域

### 6.Hash

情境: 页面A中有个iframeB

```javascript
let data = xxx //你要传输的数据

let B = document.querySelector('iframe')
B.src += '#' + `${data}`

B.onhashchange = function () {
  let data = window.location.hash
}
```

### 7.CORS(Cross-Origin-Resource-Sharing)

>CORS的基本原理是通过设置HTTP请求和返回中header，告知浏览器该请求是合法的。这涉及到服务器端和浏览器端双方的设置：请求的发起(Http Request Header)和服务器对请求正确的响应（Http response header）。\
\
>我们使用ajax请求进行跨域时,浏览器是会自动添加一些头信息的(浏览器检测到是ajax跨域请求会在请求头添加Origin: www.xx.com),有时会多出一次附加请求,用户是不会感知到的,而CORS是W3C提出的跨域请求方式。

这种方式需要客户端和服务端同时支持

---

## new过程模拟

```javascript
// 新对象被创建
function new2(func){
  // 1.继承构造函数的原型对象
  var o = Object.create(func.prototype)
  // 2.构造函数被执行,同时上下文会被指定为这个新实例
  var obj = func.call(this)
  console.log(obj)
  // 3.如果构造函数返回一个“对象”,那么这个对象会取代整个new出来的结果,
  // 如果没有返回对象则new出来的结果为步骤1的对象
  if(typeof obj === 'object'){
    return obj
  }else{
    return o
  }
}

function cons (name){
  this.name = name
  this.say = function(){console.log('say')}
}

var obj1 = new2(cons)
```

---

## DOM事件流

首先,DOM事件模型其实就是捕获和冒泡,
DOM事件流分三个阶段,分别是捕获阶段,目标阶段,冒泡阶段

**捕获阶段** :
![捕获](./img/catch.jpg)
**冒泡阶段**

### Event对象

#### event.preventDefault() 阻止默认事件

#### event.stopPropagation() 阻止捕获和冒泡

#### event.stopImmediatePropagation() 阻止捕获和冒泡,并阻止事件冒泡并且阻止相同事件的其他侦听器被调用。

#### event.currentTarget 当前绑定事件的元素

#### event.target 当前被点击的元素

### 自定义事件

```javascript
// 创建
var eve = new Event('custome') // 不可传参

var eve2 = new CustomEvent('custom',{}) // 带参数

// 注册
ev.addEventListener('custome',function () {
  console.log('custome')
})

//触发
ev.dispatchEvent(eve)
```

---

## 原型链

>原型链(Prototype Chain)的基本思想是,利用原型让一个引用类型继承另一个引用类型的属性和方法。--《Javascript高级程序设计》

### 创建对象有几种方式

```javascript
// 1
var o1 = {name:'o1'}
o1 = new Object({name:'o1'})

// 2
function o2 (name) {this.name = name}
new o2('o2')

// 3
var o3 = Object.create({name:'o3'})
```

### Prototype && __proto__

```javascript
function fn (name) {this.name = name}
var obj = new fn('obj')

fn.prototype.constructor === fn

obj.__proto__ === fn.prototype
```

实际运用中,使用原型链的目的是可以通过实例对象中的__proto__不断的网上寻找属性或者方法的一条路,直到Object.prototype,当找到该属性or方法便会停止往上找,因此javascript的继承是基于原型链的。

### Funciton

```javascript
function fn (name) {this.name = name}
fn.__proto__ === Function.prototype
```

可查阅ECMA规范,[摘录来自ECMAScript 5.1规范的4.3.24小节:](http://yanhaijing.com/es5/#null)

>对象类型的成员，标准内置构造器 Function的一个实例，并且可做为子程序被调用。\
\
>注： 函数除了拥有命名的属性，还包含可执行代码、状态，用来确定被调用时的行为。函数的代码不限于 ECMAScript。

---

## Javascript中的继承

ES5

### 1.借助构造函数继承

```javascript
function Parent(){
  this.name = 'parent'
}

function Child(){
  Parent.call(this)
  this.subname = 'child'
}
```

缺点:通过改变上下文,只是部分继承了属性,原型链上的方法和属性没有被继承

### 2.通过原型链继承

```javascript
function Parent(){
  this.name = 'parent'
}

function Child(){
  this.subname = 'child'
}
Child.prototype = new Parent()

let c1 = new Child()
let c2 = new Child()

c1.name = 'change'
c2.name // change
```

缺点:由于父对象属性被共享,某一实例改变了原型链上的属性，其他实例也受影响,而且实例构造函数为Parent

### 3.组合继承

```javascript
function Parent(){
  this.name = 'parent'
}

function Child(){
  Parent.call(this) // 1
  this.subname = 'child'
}
Child.prototype = new Parent() // 2
```

缺点:父构造函数被调用了两次,同时属性共享仍然未解决,实例构造函数为Parent

### 4.组合继承优化

```javascript
function Parent(){
  this.name = 'parent'
}

function Child(){
  Parent.call(this)
  this.subname = 'child'
}
Child.prototype = Parent.prototype
```

优点:父构造函数被调用一次
缺点:同时属性共享仍然未解决,实例构造函数为Parent

### 5.组合继承优化2

```javascript
function Parent(){
  this.name = 'parent'
}

function Child(){
  Parent.call(this)
  this.subname = 'child'
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
```

ES6

```javascript
class Parent {
  constructor (name) {
    this.name = name
  }
}

class child extends Parent {
  constructor (subname) {
    this.subname = subname
  }
}
```

---

## Callback hell(回调地狱)

什么是回调地狱?

```javascript
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```

### 如何解决回调地狱？

1.不要多层嵌套函数。将函数命名，并且放置在程序的顶层。

2.好好利用JS的函数声明提升这一特性，将函数放置在文件末尾。

3.处理好函数回调过程中的每一个可能的报错信息，可以通过检查器比如 standard来帮助你做这件事情。

4.编写可复用的函数并将其模块化，从而降低用于阅读、理解代码的消耗；将代码拆分成多个小组件，有利于处理错误信息、编写测试程序，也有利于你编写稳定的、文档化的API以及代码重构。

避免回调地狱最重要的一方面，应该是将函数抽离出来。这么做可以让整个程序流更便于阅读和理解，也让新接触该程序的人不必在乎所有的细枝末节而把握住程序真正的目的。

[参考](https://www.jianshu.com/p/d31d2ecb4162)

---

(不断完善中...)