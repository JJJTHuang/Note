// 巧克力 0 1 最多方案

var arr = '1 0 1 0'.split(' ')
var res = 0
arr.forEach(item => {
  if (item === '1') res++
})
if (res === 1) console.log(1)
else {
  res = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '1') {
      res++
      lastIndex = i
      console.log(i, res)
      while (arr[++i] !== '1' && i < arr.length) {
        res++
        
        console.log('---', i, res)
      }
    }
  }
  //    res - arr.length-lastIndex
  //if(count>2) res+=(count-2)
  console.log(res,arr.length,lastIndex)
  console.log(res - (arr.length - lastIndex))
}

// var a = [1,2,3]
// a = a.concat([3])
// console.log(typeof [1,2,3].toString(),[1,2,3].slice(0,1),a)
// console.log(Math.random(1,2))