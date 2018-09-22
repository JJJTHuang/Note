# Css

[Demo](https://codepen.io/Timm515/pen/wEgMRv)(拉伸一下浏览器)

[获取元素样式](#获取元素样式)

[清除浮动](#清除浮动的方式)

[Grid](./grid.html)

[水平垂直居中](./水平垂直居中.html)

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