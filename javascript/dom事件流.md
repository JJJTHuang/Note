# DOM

## DOM事件模型

DOM事件模型其实就是捕获和冒泡

## DOM事件流

DOM事件流分三个阶段,分别是捕获阶段,目标阶段,冒泡阶段

**捕获阶段** :
![捕获](./img/catch.jpg)
**冒泡阶段**

## Event对象

### event.preventDefault() 阻止默认事件

### event.stopPropagation() 阻止捕获和冒泡

### event.stopImmediatePropagation() 阻止捕获和冒泡,并阻止事件冒泡并且阻止相同事件的其他侦听器被调用。

### event.currentTarget 当前绑定事件的元素

### event.target 当前被点击的元素

## 自定义事件

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