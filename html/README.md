# HTML

[DOCTYPE](#DOCTYPE)

[Viewport](#Viewport)

---

## DOCTYPE

>了解DOCTYPE前,需知道DTD(Document type definition),DTD的作用是告诉浏览器该文档类型,浏览器根据文档类型决定使用何种协议来解析,而DOCTYPE的作用就是指明文档类型和DTD规范的,它是用来告知 Web 浏览器页面使用了哪种 HTML 版本。\
\
>另外,H5不是基于[SGML](https://zh.wikipedia.org/wiki/SGML),所以不需指明DTD --[来源](http://www.runoob.com/tags/tag-doctype.html)

### H5

```javascript
<!DOCTYPE html>
```

### Html 4.01 Strict

```javascript
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

### Html 4.01 Transitional

```javascript
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

---

## Viewport

```javascript
name = "viewport"

//content
1."width=device-width,initial-scale=1"
2."maximum-scale = "1",minimum-scale="1"
3.user-scalable = "no"(默认yes)
```

---

(不断完善中...)