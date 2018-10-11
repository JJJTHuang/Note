// // 1
// var s = 'flight_node1.qunar.com'
// var test = s.includes('[')
// if (test) {
//   var s1 = s.match(/\[.*\]/g)[0]
//   var arr = s1.substring(1, s1.length - 1).split(',')
//   var min, max, temp, start = 'flight_node', end = '.qunar.com'
//   arr.forEach(item => {
//     if (item.length > 2) {
//       temp = item.split('-')
//       min = parseInt(temp[0])
//       max = parseInt(temp[1])
//       while (min <= max) {
//         console.log(start + min++ + end)
//       }
//     } else {
//       console.log(start + item + end)
//     }
//   })
// } else {
//   console.log(s)
// }

// 2
var n = 3
while(n--){
  
}
n = '1'
console.log((n.split(' ')[0] + '2'))

var ss = '12 3 4151'
ss = ss.substring(0,ss.length-2)

console.log(ss)

console.log('--------')

var arr = [['1'],['2','3'],['4','5','6']]
var flag = 0, len = arr.length - 1
var output = ''

function deep(flag) {
  for (var j = 0; j < arr[flag].length; j++) {
    output += (arr[flag][j] + ' ')
    console.log('---f',output)
    if (flag === len) {
      console.log(output.substring(0, output.length - 1))
      output = output.substring(0, output.length - 2)
      if (j === arr[flag].length - 1) {
        // flag--
        // len--
        // output = output.substring(0, output.length-1)
        return
      }
    } else {
      deep(++flag)
    }
  }
}

deep(flag)