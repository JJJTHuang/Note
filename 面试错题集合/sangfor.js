// // 1.url查参数
// var url = 'http://www.google.com/?q=sangfor&a=123'
// var v = 'san'

// var arr = url.split('?')
// arr = arr[1].split('&')
// arr = arr.map(item => { return item.split('=') })
// // console.log(arr)
// var res = false
// arr.forEach(item => {
//   if (item[1])
//     if (item[1] === v) {
//       res = true
//       return
//     }
// })

// // 2.辨识端口
// var str = '80-99,30,90-234'
// var arr = str.split(',')
// var temp
// arr = arr.map(item => {
//   if (item.includes('-')) {
//     temp = item.split('-')
//     return [parseInt(temp[0]), parseInt(temp[1])]
//   } else {
//     return parseInt(item)
//   }
// })
// var res = true
// // for
// // arr.forEach(item=>{
// //   if(typeof item!== 'number'){
// //     if(item[1] - item[0] > 1024) {
// //       res = false
// //       return
// //     }
// //   }else{
// //     if(item>65535) {
// //       res = false
// //       return
// //     }
// //   }
// // })

// arr.forEach((item,index)=>{
//   // console.log(item)
//   switch (index) {
//     case 0:
//       if(Math.abs(item[1]-item[0])>1024) res = false
//       break;
//     case 1:
//       if(item>65535 || item<1) res = false
//       break;
//     case 2:
//       if(item[0]>item[1]) res = false
//       break;
//   }
// })

// // console.log(res)

// // 'ajksdnk'.inc
// var arr = [1,2,3,3]
// console.log(arr.includes(5))
// var s = 'abc'
// console.log(s.split(','))


// 这是我自己的答案，今天重新写的。
// 如果不对，请轻打。
function Queue(name) {
  this.name = name
  this.queue = []
  this.timer = null
  this.next = function () {
    var fn = this.queue.shift()

    fn && fn()

    return this
  }

  var _this = this
  setTimeout(function () {
    // console.log(_this.queue)
    _this.next()
  })
}

Queue.prototype.sleep = function (time) {
  var _this = this
  var sleep_fn = function () {
    console.log('I need sleep ' + time + 's')

    _this.timer = setTimeout(function () {
      _this.next();
    }, time * 1000)
  }
  this.queue.push(sleep_fn)
  return this
}
Queue.prototype.task = function () {
  var _this = this

  var task_fn = function () {
    console.log('Talk....')
    _this.next()
  }

  this.queue.push(task_fn)
  return this
}
Queue.prototype.cancel = function () {
  var _this = this
  var isTask = this.queue.pop()

  var cancel_fn = function () {
    if (!isTask) {
      console.log('no task')
    } else {
      console.log('cancel')
    }
    _this.next()
  }

  this.queue.push(cancel_fn)
  return this
}

function AI() {
  return new Queue()
}

AI().task().sleep(3).task()