// var n = 4,m = 12

// var res = 0
// if (n === 1) console.log(1)

// while (n && m) {
//   res++
//   n--
//   m -= 2
// }

// console.log(Boolean(0 && 0))

// if(0 && 0)


function mergesort(arr){
  if(arr.length<2) return arr
  var mid = parseInt(arr.length/2)
  var left = arr.slice(0,mid)
  var right = arr.slice(mid)
  return merge(mergesort(left),mergesort(right))
}

function merge(l,r){
  var res = []
  while(l.length && r.length){
    if(l[0] > r[0]){
      res.push(r.shift())
    }else{
      res.push(l.shift())
    }
  }

  if(l.length){
    res = res.concat(l)
  }else{
    res = res.concat(r)
  }
  return res
}

console.log(mergesort([3,2,1,5]))