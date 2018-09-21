// 1.url查参数
var url = 'http://www.google.com/?q=sangfor&a=123'
var v = 'san'

var arr = url.split('?')
arr = arr[1].split('&')
arr = arr.map(item => { return item.split('=') })
// console.log(arr)
var res = false
arr.forEach(item => {
  if (item[1])
    if (item[1] === v) {
      res = true
      return
    }
})

// 2.辨识端口
var str = '80-99,30,90-234'
var arr = str.split(',')
var temp
arr = arr.map(item => {
  if (item.includes('-')) {
    temp = item.split('-')
    return [parseInt(temp[0]), parseInt(temp[1])]
  } else {
    return parseInt(item)
  }
})
var res = true
// for
// arr.forEach(item=>{
//   if(typeof item!== 'number'){
//     if(item[1] - item[0] > 1024) {
//       res = false
//       return
//     }
//   }else{
//     if(item>65535) {
//       res = false
//       return
//     }
//   }
// })

arr.forEach((item,index)=>{
  // console.log(item)
  switch (index) {
    case 0:
      if(Math.abs(item[1]-item[0])>1024) res = false
      break;
    case 1:
      if(item>65535 || item<1) res = false
      break;
    case 2:
      if(item[0]>item[1]) res = false
      break;
  }
})

// console.log(res)

// 'ajksdnk'.inc
var arr = [1,2,3,3]
console.log(arr.includes(5))
var s = 'abc'
console.log(s.split(','))