let a = (()=>{
  var a = []
  function go(){
    var n = 10
    while (n) {
      a.push(n)
      n--
    }
  }
  go()
  return a
})()

console.log(a)