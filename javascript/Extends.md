# Extends继承

(es5)
## 1.借助构造函数继承

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

## 2.通过原型链继承

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

## 3.组合继承

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

## 4.组合继承优化

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

## 5.组合继承优化2

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

(es6)

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