// 二分/归并排序
// function mergeSort(arr){
//   if(arr.length<2) return arr
//   var v = parseInt(arr.length/2)
//   var left = arr.slice(0,v)
//   var right = arr.slice(v)
//   return merge(mergeSort(left),mergeSort(right))
// }

// function merge(l,r){
//   var res = []
//   while(l.length && r.length){
//     if(l[0] > r[0]){
//       res.push(r.shift())
//     }else{
//       res.push(l.shift())
//     }
//   }
//   if(l.length){
//     res = res.concat(l)
//   }else{
//     res = res.concat(r)
//   }
//   return res
// }

// console.log(mergeSort([3,2,5,1]))


// 快排
// function quicksort(arr,l,r){
//   if(l>r) return
//   var p = qs(arr,l,r)
//   quicksort(arr,l,p-1)
//   quicksort(arr,p+1,r)
//   return arr
// }

// function qs(arr,l,r){
//   var v = arr[l],i=l+1,j=r
//   while(true){
//     while(i<=j && arr[i] < v) i++
//     while (i <= j && arr[j] > v) j--

//     if(i>j) break

//     var temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp

//     i++
//     j--
//   }

//   var temp = arr[l]
//   arr[l] = arr[j]
//   arr[j] = temp

//   return j
// }

// let a = [3,2,1]
// let b = quicksort(a, 0, a.length - 1)
// console.log(b)

// function mergeSort(arr){
//   if(arr.length<2) return arr
//   var p = parseInt(arr.length/2)
//   var left = arr.slice(0,p)
//   var right = arr.slice(p)
//   return merge(mergeSort(left),mergeSort(right))
// }

// function merge(l,r){
//   var res = []
//   while(l.length && r.length){
//     if(l[0] > r[0]){
//       res.push(r.shift())
//     }else{
//       res.push(l.shift())
//     }
//   }

//   if(l.length){
//     res = res.concat(l)
//   }else{
//     res = res.concat(r)
//   }
//   return res
// }

// console.log(mergeSort([3,2,1]))

// 计数排序
function sort(arr){
  var C = []
  
  for(var i=0;i<arr.length;i++){
    if(C[arr[i]]) C[arr[i]]++
    else C[arr[i]]=1
  }

  var result = []
  for(var i=C.length-1;i>=0;i--){
    while(C[i]){
      result.unshift(i)
      C[i]--
    }
  }
  return result
}

var a = [8,3,2,1,2]
console.log(sort(a))

// 插入排序
function insertSort(arr) {
  var j,len=arr.length,temp
  for(var i=1;i<len;i++){
    j = i
    var temp = arr[i]
    while(j>0 && arr[j-1] > temp){
      arr[j] = arr[j-1]
      j--
    }
    arr[j] = temp
  }
  console.log(arr)
}

insertSort([3,2,1])


function countSort(arr){
  var res = [],len = arr.length
  for(var i=0;i<len;i++){
    if(res[arr[i]]) res[arr[i]]++
    else res[arr[i]]=1
  }
  var result = [],temp
  for(var i=res.length-1;i>-1;i--){
    while(res[i]){
      result.unshift(i)
      res[i]--
    }
  }
  console.log(result)
}
countSort([5,4,6,7,1])

// var a = [1,2,3,4,5]

// // a.splice(1)

// var b = a.slice(1)

// // a.shift()

// // a.unshift()

// console.log(a,b)