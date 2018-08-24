# HTTP(HyperText Transfer Protocol)

[DNS解析](#dns解析)

&nbsp;

## DNS解析

典型的一次DNS解析耗费20-120 毫秒

浏览器对网站第一次的域名DNS解析查找流程依次为:

**浏览器缓存**-**系统缓存**-**路由器缓存**-**ISP DNS缓存**-**递归搜索**

![DNS](../Img/dns.jpg)

注意:dns-prefetch需慎用,多页面重复会进行多次解析

参考:

[DNS预解析提高性能](http://skyhome.cn/div_css/301.html)

(不断完善中...)