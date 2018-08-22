# Callback hell(回调地狱)

什么是回调地狱?

```javascript
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```

## 如何解决回调地狱？

1.不要多层嵌套函数。将函数命名，并且放置在程序的顶层。

2.好好利用JS的函数声明提升这一特性，将函数放置在文件末尾。

3.处理好函数回调过程中的每一个可能的报错信息，可以通过检查器比如 standard来帮助你做这件事情。

4.编写可复用的函数并将其模块化，从而降低用于阅读、理解代码的消耗；将代码拆分成多个小组件，有利于处理错误信息、编写测试程序，也有利于你编写稳定的、文档化的API以及代码重构。

避免回调地狱最重要的一方面，应该是将函数抽离出来。这么做可以让整个程序流更便于阅读和理解，也让新接触该程序的人不必在乎所有的细枝末节而把握住程序真正的目的。

[参考](https://www.jianshu.com/p/d31d2ecb4162)
