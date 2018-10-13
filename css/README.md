# Css🌈

[Grid布局](https://output.jsbin.com/zudase)(拉伸一下浏览器)

[宽随高变动](https://output.jsbin.com/totiqus)(拉伸一下浏览器)

[水平垂直居中](https://jsbin.com/hurobez/edit?html,css,output)

[清除浮动](https://jsbin.com/pakumec/2/edit?html,css,output)

[水平垂直自适应](https://jsbin.com/dejavec/edit?html,css,output)

[获取元素样式](#获取元素样式)

[BFC](#BFC)

[Css瀑布流](https://www.w3cplus.com/css/pure-css-create-masonry-layout.html)

[nth-child与nth-of-type](https://www.zhangxinxu.com/wordpress/2011/06/css3%E9%80%89%E6%8B%A9%E5%99%A8nth-child%E5%92%8Cnth-of-type%E4%B9%8B%E9%97%B4%E7%9A%84%E5%B7%AE%E5%BC%82/)

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

## BFC

>块格式化上下文（Block Formatting Context，BFC） 是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。 --mdn

如何形成一个BFC?

1.根元素或其他包含它的元素

2.float不为none

3.绝对定位的元素(position:absolute|relative|fixed)

4.块级元素overflow不为hidden

5.非块级元素display:display: inline-block，table-cell, table-caption, flex, inline-flex

&nbsp;

参考:

[未来之星Grid布局](https://juejin.im/post/59c722b35188257a125d7960)

[BFC](https://segmentfault.com/a/1190000009545742)

(不断完善中...)