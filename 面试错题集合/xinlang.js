// var str = '1,2,3,5|10'
// var sum = parseInt(str.split('|')[1])
// var arr = str.split('|')[0].split(',')
// var res = 0

// for(var i=0;i<arr.length;i++){
//   for(var j=i;j<arr.length;j++){
//     if(parseInt(arr[i])+parseInt(arr[j]) === sum) res++
//   }
// }

// var a = {a:1,b:2}
// var b = [1,2,3]
// for(var i in b){
//   console.log(i)
// }
// // console.log(sum,arr,res)
// console.log(!'',!0,!null,!undefined,!'1',[].length,parseInt('0'))

function parse(arr) {
  var res = { isEmpty: [], likeNumber: [] }
  if (arr.includes('undefined')) {
  // arr.replace('undefined', '"undefined"')
  // console.log(arr)
    var i = arr.indexOf('undefined')
    arr = arr.substring(0, i) + arr.substring(i + 10)
    res.isEmpty.push('undefined')
  }
  arr = JSON.parse(arr)
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'object') {
      if (!isNaN(parseInt(arr[i]))) res.likeNumber.push(arr[i])
      else if (!arr[i]) res.isEmpty.push(arr[i])
      else if (arr[i] === 'undefined') res.isEmpty.push("undefined")
    } else {
      var n = 0
      for (var j in arr[i]) {
        n++
        break
      }
      if (!n) res.isEmpty.push(arr[i])
    }
  }
  var l = res.isEmpty.length
  res = JSON.stringify(res)
  for (var i = 0; i < l;i++){
    // if(res["isEmpty"][i] === 'undefined') res.isEmpty[i] = undefined
  }
  
  console.log(res.replace('"undefined"',undefined))
}

var arr = '["", 0, { "name": "sina" }, [1, 2], "me", "15.8", null, {}]'
arr = '["",0,{"name":"sina"},[],"moblie","11",null,undefined,{}]'
parse(arr)

var s = '123undefined,132'
var i = s.indexOf('undefined')
// console.log(s.substring(0,i)+s.substring(i+10))
// console.log(s.replace('undefined','"undefined"'))
