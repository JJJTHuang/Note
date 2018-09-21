//1.fib层数

function fib(n) {
  if (n === 1 || n===2) return 1
  return fib(n - 1) + fib(n - 2)
}
function sum(n) {
  var sum = 0
  while (n) {
    sum += fib(n)
    n--
  }
  return sum
}

// function count(n){
//   if (n === 1) print(0)
//   if (n === 2) print(1)
//   var i = 3
//   while (n < sum(i)) i++
//   console.log(sum(i))
// }

// 2.蓄水池总量

var arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

function count(arr) {
  var start = 0, end = 1, sum = 0, len, max, S = 0,temp

  while (end < arr.length) {
    
    while (arr[start] <= arr[start + 1]) start++
    console.log('start:', start)

    end = start + 1

    while (arr[end] < arr[start]) end++
    console.log('end:',end)
    
    if(end===arr.length){
      var endIndex = end
      while(arr[endIndex-2]>arr[endIndex-1]) endIndex--
      temp = arr.slice(start, endIndex)
    }else{
      temp = arr.slice(start, end + 1)
    }
    console.log('蓄水区域:',temp)

    temp = temp.sort()
    len = temp.length
    max = temp[len - 2]
    
    for (var i = 0; i < len; i++) {
      if (temp[i] !== 0)
        if(temp[i] <= max) S += temp[i]
        else S+= max
    }

    // 两端比较矮一处为高,数组长度为宽,盛水量=总面积-方块占用面积
    sum += ((len * max) - S)
    console.log(sum,len,max,S)

    start = end
    S = 0
    end = start + 1
  }

  console.log(sum)
}

count(arr)