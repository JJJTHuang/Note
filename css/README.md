# Css🌈

[Grid布局](https://output.jsbin.com/zudase)(拉伸一下浏览器)

[宽随高变动](https://jsbin.com/totiqus/edit?js,output)(拉伸一下浏览器)

[水平垂直居中](https://jsbin.com/hurobez/1/edit?html,css,output)

[清除浮动](https://jsbin.com/pakumec/2/edit?html,css,output)

[获取元素样式](#获取元素样式)

&nbsp;

## 获取元素样式

```javascript
let oDiv = document.querySelector('#div')

// 以获取宽度为例子
// 获取行内样式
oDiv.style.width

// 获取非行内样式

// 获取经过计算后的样式(即渲染后)
window.getComputedStyle(oDiv).width

//IE
oDiv.currentStyle().width

// 获取该元素的位置
oDiv.getBoundingClientRect().width
```

&nbsp;

参考:

[未来之星Grid布局](https://juejin.im/post/59c722b35188257a125d7960)

(不断完善中...)