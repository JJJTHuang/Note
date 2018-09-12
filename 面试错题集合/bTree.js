function a(n){
  var sum = 1
  while(n){
    sum+=Math.pow(3,n)
    n--
  }
  console.log(sum)
}

a(5)