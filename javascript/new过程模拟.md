# 模拟new的过程

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