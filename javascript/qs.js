function sort(arr,l,r){
  if(l>=r) return
  var p = qs(arr,l,r)
  console.log(p)
  sort(arr,l,p-1)
  sort(arr,p+1,r)
}

function qs(arr,l,r){
  var v = arr[l]
  var i = l+1,j = r
  while(true){
    while(i<=j && arr[i] < v) i++
    while(i<=j && arr[j] > v) j--

    if(i>j) break

    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    i++
    j--
  }

  var temp = arr[l]
  arr[l] = arr[j]
  arr[j] = temp
  return j
}

function swap(a,b){
  var temp = a
  a = b
  b = temp
}

function quickSort(arr, l, r) {
  if (l >= r) return
  var p = partition(arr, l, r)
  quickSort(arr, l, p - 1)
  quickSort(arr, p + 1, r)
}

function partition(arr, l, r) {
  var v = arr[l]
  var i = l + 1, j = r

  while (true) {

    while (i <= j && arr[i] < v) i++

    while (i <= j && arr[j] > v) j--

    if (i > j) break

    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    i++
    j--
  }

  var temp = arr[l]
  arr[l] = arr[j]
  arr[j] = temp

  return j
}

var arr = [2, 3, 5, 0, 8, 1, 9]

sort(arr, 0, arr.length - 1)

console.log(arr)