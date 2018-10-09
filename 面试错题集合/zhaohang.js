var s = '1 2'
var arr = s.split(" ")
arr = arr.map(item => { return parseInt(item) })
arr.sort()

var max = parseInt(readline())
var start = 0, end = arr.length - 1

var res = 0

while (arr.length) {
  while ((arr[start] + arr[end]) > max) {
    arr.pop()
    end--
    res++
  }
  if (arr.length > 0) {
    res++
    start++
    arr.shift()
    arr.pop()
  }
}

console.log(res)