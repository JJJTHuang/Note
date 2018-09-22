# 综合🔍

[1.性能优化](#1性能优化)

[2.错误监控](#2错误监控)

[3.防抖与节流](#3防抖与节流)

[4.内容安全策略](#4内容安全策略)

&nbsp;

## 1.性能优化

(网络层面)

### 1.1 资源压缩

1.1.1 Css siprit

1.1.2 Html、Js、Css压缩(不影响文档结构与页面渲染的前提下)

### 1.2 异步加载

1.2.1 异步加载的三种方式 : ️

①动态脚本加载 : document.createElement('script')

②defer : ```<script defer src='xxx.com/api'></script>```
若有多个脚本,在加载完后,会按顺序执行

③async : ```<script async src='xxx.com/api'></script>```
若有多个脚本会不一定按顺序执行,只要请求完成便立刻加载

### 1.3 资源缓存

1.3.1 缓存的分类:

[强制缓存](../Http/cache.md#强制缓存)

这里提及一下强制缓存常用的头部字段

Expires: Thu, 23 Aug 2018 08:10:13 GMT (这里的时间是绝对时间)

Cache-Control: max-age=300 (这里的时间是相对客户端的时间,且此字段优先级高于Expires)

[协商缓存](../Http/cache.md#协商缓存)

### 1.4 善用[CDN](https://www.zhihu.com/question/36514327?rf=37353035)(Content Delivery Network)

### 1.5 DNS预解析

```html
<meta http-equiv="x-dns-prefetch-control" content="on" />
<link rel="dns-prefetch" href="http://eiv.baidu.com" />
```

注意:dns-prefetch需慎用,多页面重复会进行多次解析

(解析层面)

### 1.6 减少reflow与repaint

**reflow**触发条件(基本分三类):

* 盒模型相关的属性: width，height，margin，display，border，etc

* 定位属性及浮动相关的属性: top,position,float，etc

* 改变节点内部文字结构也会触发回流: text-align, overflow, font-size, line-height, vertival-align，etc

**repaint**触发条件:

* 只要发生reflow就发生repaint

* 改变元素位置color,部分background,visibility,etc

&nbsp;

## 2.错误监控

### 2.1 错误类型与捕获方式

错误类型包括 **运行时错误** 与 **资源加载错误**

#### 2.1.1 运行时错误处理

①try{} catch{} finally{}

②window.onerror

#### 2.1.2 资源加载错误处理

①Object.onerror (这里要注意,此处的Object是一个dom对象,比如script,且,onerror方法是不会冒泡的,所以需要单独绑定onerror方法)

②performance.getEntires() (此方法返回一个成功加载资源数组,获取后可与理想情况需加载资源的集合进行对比)

③Error事件捕获 (这里的重点是捕获,通过window.addEventListener('error',funciton (e) {},true),可捕获资源加载错误,若改为false则无效),那么这是为什么呢？

解释③:[参考1.6](https://techblog.toutiao.com/2017/05/09/cdn/)

#### 2.1.3 跨域脚本错误处理

① script标签加crossorigin属性
② 服务端设置Cross-Access-Origin-Allow: * || 指定域名

### 2.2 错误上报

① Ajax上报(一般不用)
② Image上报(new Image().src = "xxx") xxx指的是上报路径

&nbsp;

## 3.防抖与节流

**起源:** 屏幕抖动(或者称为闪屏)的原因:我们在上下滚动页面的时候,触发了scroll事件,每次滚动页面触发scroll事件的频率是很高的,当我们有在scroll时操作dom的需求时,由于dom对象的体量巨大,就会引起性能问题,浏览器可能在上一次scroll还未处理(渲染页面)完前,又触发了下一次,这样的事件不断的发生就可能会引起闪屏or屏幕抖动。(补充:我认为我们看到的抖动和闪屏是layout+painting的过程)

### **措施:** 知道了问题的来源就解决了问题的一半,因此这里我们可以采用防抖和节流的措施

```javascript
// 防抖(主要思想是如果在time毫秒内触发了2次或以上的scroll事件,那么最终fn只会执行一次)
function debounce (fn, time) {
  var timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(function () {
      return fn()
    },time)
  }
}

// 优化
function _debounce(fn,time,immediate) {

}
```

```javascript
// 节流(主要思想是控制Fn每time毫秒执行一次)
function throttle(fn,wait,mustRun) {
  var timer,
      before = new Date()

  return function () {
    var now = new Date(),
        context = this,
        args = [...arguments]

    clearTimeout(timer)

    if(now - before > mustRun){
      fn.apply(context,args)
      before = now
    }else{
      timer = setTimeout(fn,wait)
    }
  }
}

function touch () {
  console.log('touch')
}

window.onscroll = throttle(touch,1000,2000)
```

&nbsp;

## 4.内容安全策略

>内容安全策略(Content Security Policy),是一个额外安全层,用于检测并削弱某些特定类型的攻击,包括XSS和数据注入等攻击。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要手段。

如何设置？

1.设置http头部Content-Security-Policy

2.设置```<meta http-equiv="Content-Security-Policy" content="default-src 'self';child-src 'none';">```

&nbsp;

参考:

[域名劫持资源重载方案](https://techblog.toutiao.com/2017/05/09/cdn/)

[reflow & repaint](https://juejin.im/post/5a9372895188257a6b06132e)

[高性能滚动 scroll 及页面渲染优化](https://www.cnblogs.com/coco1s/p/5499469.html)

[内容安全策略-CSP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)