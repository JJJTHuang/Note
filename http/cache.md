# 缓存(简单总结)

缓存的过程其实就是两位兄弟打交道的过程。

浏览器第一次跟服务器取资源,服务器会给浏览器一些缓存相关信息(http1.0和http1.1所携带的信息是不同的)

## 缓存的类型分**强制缓存**和**协商缓存**

### 强制缓存

(以前用的)http1.0:

第一次

浏览器(大兄弟给我点资源) -> 服务器(如果成功接收请求:好的,小兄弟接着(xxx一些资源),请求头部携带expires,pragma)

浏览器接收到资源后会缓存资源

第二次交流

浏览器(浏览器根据***expires:<>***日期,pragma字段,若expires时间大于当前时间,且pragma值不为no-store,则直接在缓存里面取得资源,否则,找服务器请求资源)

***✨另外:命中强制缓存的情况下，不会向服务器发起请求,资源是from disk cache(具体可看底部参考文章)***

> expires:GMT Date 表示资源的过期时间\
\
> pragma:no-cache  表示强制要求缓存服务器在返回缓存的版本之前将请求提交到源头服务器进行验证。与 Cache-Control: no-cache 效果一致。--引自[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Pragma)

### 协商缓存

(现在用的)http1.1:

第一次

浏览器(大兄弟给我点资源) -> 服务器(如果成功接收请求:好的,小兄弟接着(xxx一些资源),请求头部携带expires,pragma,**cache-control**,**Last-modified**,**Etag**)

浏览器接收到资源后同样会缓存资源

第二次

浏览器(大兄弟给我点资源,附带**cache-control:\<xxx(no-cache/max-age/public...)\>**,**if-modified-since:\<Last-modified-time(GMT)\>**,**if-none-match:\<Etag-value\>**头信息,如果**cache-control**为no-store则不缓存) -> 服务器(如果成功接收请求:我来看看你请求的资源改动的时间是否和**if-modified-since**一致或者**ETag**(修改标识符)是否一致,若一致则返回http304,表示使用缓存资源)

***✨另外:若发起协商缓存的情况下,资源是from memory cache(具体可看底部参考文章)***

> cache-control(优先级大于expires): 通用消息头被用于在http 请求和响应中通过指定指令来实现缓存机制。缓存指令是单向的, 这意味着在请求设置的指令，在响应中不一定包含相同的指令。--引自[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)
\
\
> Last-modified-since: If-Modified-Since 是一个条件式请求首部，服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回，状态码为 200  。如果请求的资源从那时起未经修改，那么返回一个不带有消息主体的  304  响应，而在 Last-Modified 首部中会带有上次修改时间。 不同于  If-Unmodified-Since, If-Modified-Since 只可以用在 GET 或 HEAD 请求中。当与 If-None-Match 一同出现时，它（If-Modified-Since）会被忽略掉，除非服务器不支持 If-None-Match。--引自[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/If-Modified-Since)
\
\
>Etag:ETagHTTP响应头是资源的特定版本的标识符。这可以让缓存更高效，并节省带宽，因为如果内容没有改变，Web服务器不需要发送完整的响应。而如果内容发生了变化，使用ETag有助于防止资源的同时更新相互覆盖（“空中碰撞”）。如果给定URL中的资源更改，则一定要生成新的Etag值。 因此Etags类似于指纹，也可能被某些服务器用于跟踪。 比较etags能快速确定此资源是否变化，但也可能被跟踪服务器永久存留。--引自[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag)

(以后用的)http2.0(暂不知道，可查看RFC文档提案)

参考:

[缓存了解一下](https://excaliburhan.com/post/things-you-should-know-about-browser-cache.html)

----非官方总结,错误请指出，谢谢。----