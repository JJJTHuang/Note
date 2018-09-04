// function quickSort(arr, l, r){
//   if(l >= r) return
//   var p = partition(arr,l,r)
//   quickSort(arr,l,p-1)
//   quickSort(arr,p+1,r)
// }

// function partition(arr, l, r){
//   var v = arr[l]
//   var i = l+1, j = r

//   while (true) {
    
//     while (i <= j && arr[i] < v) i++

//     while (i <= j && arr[j] > v) j--

//     if(i > j) break

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

// var arr = [2,3,5,0,8,1,9]

// quickSort(arr,0,arr.length-1)

// console.log(arr)





// function quickS(arr,l,r){
//   if(l>=r) return
//   console.log(l, r)
//   var p = par(arr,l,r)
//   quickS(arr,l,p-1)
//   quickS(arr,p+1,r)
// }

// function par(arr,l,r) {
//   var v = arr[l]
//   var i = l+1,j=r
//   while(true){
//     while(i <= j && arr[i] < v) i++
//     while(i <= j && arr[j] > v) j--

//     if(i>j) break

//     var temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp

//   }

//   var temp = arr[j]
//   arr[j] = arr[l]
//   arr[l] = temp

//   return j
// }


function quicksort3ways(arr, l, r) {
  if (l >= r) return
  var v = arr[l]
  var i = l, j = r + 1
  var cur = i + 1
  while (cur < j) {
    if (arr[cur] > v) {
      var temp = arr[cur]
      arr[cur] = arr[j - 1]
      arr[j - 1] = temp
      j--
    } else if (arr[cur] < v) {
      var temp = arr[cur]
      arr[cur] = arr[i + 1]
      arr[i + 1] = temp
      i++
      cur++
    } else {
      cur++
    }
  }

  var temp = arr[i]
  arr[i] = arr[l]
  arr[l] = temp

  quicksort3ways(arr, l, i - 1)
  quicksort3ways(arr, j, r)
}

var arr = [2,3,5,0,8,1,9]

quicksort3ways(arr,0,arr.length-1)

console.log(arr)