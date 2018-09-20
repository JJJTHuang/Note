var arr = [3,2,1]
function map(fn){
  var res = []
  for(var i=0;i<arr.length;i++){
    res.push(fn(arr[i],i))
  }
  return res
}

var r = map((item,index)=>{
  console.log(index)
  return item*2
})

var r2 = arr.map((item, index) => {
  console.log(index)
  return item * 2
})

console.log(r,r2)