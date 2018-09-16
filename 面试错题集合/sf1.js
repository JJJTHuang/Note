// // console.log(new Date('2018-06-23 11:10'))

// // var str = 'abcsAd000'
// // var index = str.indexOf('0')

// // // console.log(str.slice(0,3),str)
// // // console.log(str.split('').sort())
// // console.log(str.substr(0,index),str.substr(index+1),str.split(''),str)

// function compare(str, str1) {
//   str1 = clean(str1)
//   str = clean(str)
//   var arr = []
//   for (var i = 0; i < str.length; i++) {
//     if (!str1.includes(str[i])) {
//       arr.push(str[i])
//     } else {
//       var index = str1.indexOf(str[i])
//       str1 = str1.substr(0, index) + str1.substr(index+1)
//     }
//   }
//   var arr2 = arr.concat(str1.split(''))
// 9
//   var res = arr2.sort(function(a,b){ return a.charCodeAt(a)-b.charCodeAt(b)})
//   // console.log(res)
//   var res2 = []
//   for(var i=0;i<res.length;i++){
//     res2[i] = res[i]
//   }
//   res2.reverse()
//   // console.log(res,res2)

//   var res3 = res.concat(res2)
//   return res3.join('')
// }

// function clean(str){
//   var res = []
//   for(var i=0;i<str.length;i++){
//     if(res.indexOf(str[i]) === -1) res.push(str[i])
//   }
//   return res.join('')
// }

// console.log(compare('asss000AAAsdf','w001qerd'))

// console.log('1'.charCodeAt('1'),'A'.charCodeAt('A'),'a'.charCodeAt('a'), ['a', 'A','1'].sort())


//相差小时数

// function compare(t1, t2) {
//   t1 = new Date(t1)
//   t2 = new Date(t2)
//   var Hour = 1000 * 60 * 60
//   var res = Math.abs((t1 - t2) / Hour)
//   var resInt = parseInt(res)
//   var resFloat = res - resInt
//   resFloat >= 0.5 ? resFloat=0.5 :resFloat = 0
//   res = resInt + resFloat

//   return res
// }

// var t1 = "2018-06-22 16:59"
// var t2 = "2018-06-23 15:29"
// var tt = new Date('ads')
// // console.log(compare(t1,t2))
// console.log(tt)



//从两个字符串（只包含0-9a-zA-Z）中获取两者不同的字符按顺序生成对称字符串
// 1.获取两个字符串中不同的字符（区分大小写，本身字符串中有重复的也要去除）（例：abc与bcd -》 ad）

// 2.得到的字符根据ASCII码从小到大排序

// 3.根据第3步的结果生成一个对称字符串（例：abc -》abccba）

function compare(str, str1) {
  str1 = clean(str1)
  str = clean(str)
  var arr = []
  for (var i = 0; i < str.length; i++) {
    if (!str1.includes(str[i])) {
      arr.push(str[i])
    } else {
      var index = str1.indexOf(str[i])
      str1 = str1.substr(0, index) + str1.substr(index + 1)
    }
  }
  var arr2 = arr.concat(str1.split(''))

  var res = arr2.sort()

  var res2 = []
  for (var i = 0; i < res.length; i++) {
    res2[i] = res[i]
  }
  res2.reverse()

  var res3 = res.concat(res2)
  return res3.join('')
}

function clean(str) {
  var res = []
  for (var i = 0; i < str.length; i++) {
    if (res.indexOf(str[i]) === -1) res.push(str[i])
  }
  return res.join('')
}

console.log(compare('asss000AAAsdf','w001qerd'))