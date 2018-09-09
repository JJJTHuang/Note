// var n = readInt()

// var arr1 = ('3 2 9 10 4 5').split(' ')
// var arr = arr1.map(item=>{
//   return Number(item)
// })
// console.log(arr.sort((a,b)=>{return a-b}))
// console.log(arr,arr1)
// var res
// if (arr.length % 2 === 0) {
//   var arr1 = arr.slice(0, arr.length / 2), arr2 = arr.slice(arr.length / 2)
//   console.log(arr1,arr2)
//   res = (Number(arr1[arr1.length-1]) + Number(arr2[0])) / 2
// } else {
//   res = arr[parseInt(arr.length / 2)]
//   console.log(arr)
// }

// console.log(res)


// let m = new Map()
// console.log(m)
// m.set('1',[1,2])
// m.set('2',[2,3])

// m.has('1')


// for(let item of m.entries()){
//   console.log(item[0],item[1])
// }

// m.get('1').push(3)
// console.log(m.get('1'))

// // console.log(m.get('1'),m.entries())

var m=3
var arr = [4,5,3,1,2]
arr = arr.splice(0, arr.indexOf(3)).concat(arr.splice(arr.indexOf(4)))
arr.sort()
console.log(arr)