// 1

// var s = '[10, 2, 12, 7, 8, 9]'
// var arr = s.substring(1,s.length-1).split(',')

// arr = arr.map(item => { return parseInt(item) })
// function getMaxProfit(arr) {
//   return Math.max(...arr) - Math.min(...arr)
// }


// console.log(getMaxProfit(arr))

// 2 url

// var url = 'https://www.pingan.com?key1=welcome&key2=to&key3=china'
// var res = {}
// function check(url){
//   var query = url.split('?')[1]
//   console.log(query)
//   var arr = query.split('&')
//   arr = arr.map(item=>{
//     return item.split('=')
//   })

//   arr.forEach(item=>{
//     res[item[0]] = item[1]
//   })
//   return JSON.stringify(res)
// }

// console.log(check(url))

// 3 归并排序