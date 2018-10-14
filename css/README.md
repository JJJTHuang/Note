# Css🌈

[Grid布局](https://output.jsbin.com/zudase)(拉伸一下浏览器)

[宽随高变动](https://output.jsbin.com/totiqus)(拉伸一下浏览器)

[水平垂直居中](https://yanhaijing.com/css/2018/01/17/horizontal-vertical-center/)

[清除浮动](https://jsbin.com/pakumec/2/edit?html,css,output)

[水平垂直自适应](https://jsbin.com/dejavec/edit?html,css,output)

[获取元素样式](#获取元素样式)

[BFC](#BFC)

[Css瀑布流](https://www.w3cplus.com/css/pure-css-create-masonry-layout.html)

[nth-child与nth-of-type](https://www.zhangxinxu.com/wordpress/2011/06/css3%E9%80%89%E6%8B%A9%E5%99%A8nth-child%E5%92%8Cnth-of-type%E4%B9%8B%E9%97%B4%E7%9A%84%E5%B7%AE%E5%BC%82/)

[em & rem](#em&rem)

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

## em & rem

### em

若该元素没有定义font-size,在**顶层节点**1em == 16px,在随后的子节点中,若定义了font-size,em的大小参照font-size的值,否则,em的大小参照父元素的font-size,若无元素也没有设定font-size的值,会根据dom的层级网上找，直到顶层节点。

[em - Demo](https://jsbin.com/qicasezora/edit?html,css,js,output)

### rem

我们知道rem是css3的产物，在mdn中,它是这样被定义的

>这个单位代表根元素的 font-size 大小（例如 html 元素的font-size）。当用在根元素的font-size上面时 ，它代表了它的初始值(译者注:默认的初始值是html的默认的font-size大小,比如当未在根元素上面设置font-size大小的时候,此时的1rem==1em,当设置font-size=2rem的时候,就使得页面中1rem的大小相当于html的根字体默认大小的2倍,当然此时页面中字体的大小也是html的根字体默认大小的2倍)。

另外,rem布局的本质是等比缩放，一般基于宽度

&nbsp;

参考:

[未来之星Grid布局](https://juejin.im/post/59c722b35188257a125d7960)

[BFC](https://segmentfault.com/a/1190000009545742)

[em & rem](https://yanhaijing.com/css/2017/09/29/principle-of-rem-layout/)

[水平垂直居中](https://yanhaijing.com/css/2018/01/17/horizontal-vertical-center/)

(不断完善中...)