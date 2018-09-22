function mergesort(arr){
  if(arr.length<2) return arr
  var mid = parseInt(arr.length/2)
  var left = arr.slice(0,mid)
  var right = arr.slice(mid)
  
  return merge(mergesort(left), mergesort(right))
}

function merge(l,r){
  var result = []
  while(l.length && r.length){
    if(l[0] < r[0]){
      result.push(l.shift())
    }else{
      result.push(r.shift())
    }
  }
  
  if(l.length){
    result = result.concat(l)
  }else{
    result = result.concat(r)
  }
  return result
}

console.log(mergesort([2,3,5,1]))