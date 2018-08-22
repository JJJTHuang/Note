# http

## 特点

### 1.无连接

连接一次就断

### 2.无状态

下一次连接，服务端没办法记住你的身份(尽管你刚刚和服务次进行了一次通信)

### 3.灵活

通过请求头的信息完成各种传输

### 4.简单快速

每个资源(例如,URI)是固定的,处理简单

---

## 报文组成部分

### 请求报文

1.请求行(GET / URL / 1.1) 2.请求头(各种key:value) 3.空行 4.请求体

```javascript
GET /search?hl=zh-CN&source=hp&q=domety&aq=f&oq= HTTP/1.1
Accept: image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, application/vnd.ms-excel, application/vnd.ms-powerpoint,
application/msword, application/x-silverlight
```

### 响应报文

1.状态行 2.响应头 3.空行 4.响应体

```javascript
HTTP/1.1 200 OK
Date: Sat, 31 Dec 2005 23:59:59 GMT
Content-Type: text/html;charset=ISO-8859-1
Content-Length: 122

＜html＞
＜head＞
＜title＞Wrox Homepage＜/title＞
＜/head＞
＜body＞
＜!-- body goes here --＞
＜/body＞
＜/html＞
```

---

## http常见方法

1.GET 2.POST 3.PUT(更新) 4.DELETE(资源删除) 5.HEAD(获得报文首部) 6.PATCH

## GET 和 POST的区别

### 1.浏览器回退的话,GET请求是无害的,而POST会再次发起

### 2.GET请求数据会显示在URL上,POST请求放在Request header中

### 3.请求参数:GET请求参数有大小限制2K左右,POST请求无限制

### 4.GET请求只能进行URL编码,POST请求可以为多种类型的编码

### 5.GET产生的URL是可以被收藏的,而POST不可以

### 6.GET请求会被浏览器主动缓存,而POST不会

### 7.GET请求的参数只能为ASCII码,而POST没有限制

## http状态码

### 1xx 指示信息 -- 请求发起,服务端已接收,继续处理

### 2xx 成功发起请求,得到服务器回应

### 3xx 资源重定向 -- 要完成请求需更进一步工作

### 4xx 客户端错误 -- 请求语法错误 or 请求无法实现

### 5xx 服务器错误 -- 服务器未能实现合法请求

常见的状态码:

101 协议升级

200 成功返回请求资源

204 返回请求头(不携带请求体)

206 Partial Content:客户端发送了一个带有range头的GET请求

301 永久重定向

302 临时重定向

304 使用缓存资源

403 身份认证失败,未授权

404 资源不存在

500 服务器内部错误