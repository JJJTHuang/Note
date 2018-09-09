// var arr = 'wbbwwbbw'

// var res = 1
// var resArr = []
// var result
// if (arr.length < 2) console.log(1)
// else {
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i - 1] === arr[i]) {
//       var arr1 = arr.slice(0, i)
//       var arr2 = arr.slice(i).reverse()
//       // console.log(arr1,arr2)
//       if (arr1[arr1.length - 1] === arr2[0]) {
//         resArr.push(res)
//         res = 1
//       } else {
//         res++
//         continue
//       }
//     } else {
//       res++
//     }
//     console.log(res,resArr)
//   }  
//   if (resArr.length > 0) result = resArr.sort()[resArr.length - 1]
//   else result = res
//   console.log(result)
// }

// console.log([1,2,3].splice(1))


// 正确答案

// var str = 'wbwbwbbw'

// str += str

// console.log(str)

// var res=0,Arr = []
// for(var i=0;i<str.length;i++){
//   if(i<str.length && str[i] !== str[i+1]){
//     res++
//   }else{
//     Arr.push(res)
//     res = 0
//   }
// }

// console.log(Arr,Arr.sort()[Arr.length-1])


// function Min(coins){
//   var coins = coins

//   this.makeChange = function (amount){
//     var change = [],total = 0
//     for(var i = coins.length;i>=0;i--){
//       var coin = coins[i]
//       while(total + coin <= amount){
//         change.push(coin)
//         total+=coin
//       }
//     }
//     return change
//   }
// }

// var res = new Min([1,10,25])
// console.log(res.makeChange(36))



// function knapSack(cap, value, weights){
//   var n = value.length,
//   load = 0,i = 0,val = 0

//   for(i=0;i<n && load < cap;i++){
//     if(weights[i] <= (cap - load)){
//       val += values[i]
//       load += weights[i]
//     }else{
//       var r = (capacity - load) / weights[i]; //{3}
//       val += r * values[i];
//       load += weights[i];
//     }
//   }
//   return w
// }


// 不重复子串
// var str = 'ccbbaa'
// var str2 = str.split('').reverse().join('')
// str += str2
// console.log(str)
// var res = 1
// var resArr = []
// var start = 0
// for (var i = 1; i < str.length; i++) {
//   var subStr = str.substring(start, i)
//   console.log(start,i)
//   if (subStr.includes(str[i])) {
//     start = i
//     if (res > 1) {resArr.push(res);res=1}
//   }
//   else {
//     res++
//   }
// }

// if (resArr.length > 0) res = resArr.sort()[resArr.length - 1]

// console.log(resArr,res)

var str = [1,2,3]

console.log(str[-1] !== '1')
