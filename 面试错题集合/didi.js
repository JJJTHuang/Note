// 1.return this

// var Sub = function (initValue) {
//   //请在此处编写你的代码，其他部分请勿修改，否则不记分。
//   //begin
//   this.sum = initValue
//   this.add = function (val) {
//     if (typeof val === 'number') {
//       this.sum += val
//     }
//     return this
//   }

//   this.getResult = function () { return this.sum }
//   //end
// }
// // 以下代码请勿修改
// var s = read_line()
// print(eval(s))


// 2
var line1 = '6 3'.split(' ')
var n = line1[0], m = line1[1]
var line2 = '1 7 2 2 5 9'.split(' '),
line2 = line2.map(item => { return parseInt(item) })

var arr = new Array(...line2).sort(),i = 0
var min, max, index = line2.indexOf(arr[i])
while (m--) {
  console.log(line2, '--', arr)
  if (index > -1) {
    if (index === 0) {
      line2[index] = line2[index] + line2[index + 1]
      line2.splice(index + 1, 1)
    } else {
      if (line2[index - 1] > line2[index + 1]){
        line2[index] = line2[index] + line2[index + 1]
        line2.splice(index + 1, 1)
    }else {
      line2[index] = line2[index] + line2[index - 1]
      line2.splice(index - 1, 1)
    }
  }
    arr.shift()
    index = line2.indexOf(arr[i])
    while(index === -1) index = line2.indexOf(arr[++i])
    i=0
  }
}

line2.sort()

console.log(line2[0])