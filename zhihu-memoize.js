var readline = require('readline');

var  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on('line',function (line) {
  var n = parseInt(line)
  B = memoize(A)
  while(n){
    console.log(B())
    n--
  }
  process.exit(0);
})

function A() { 
  console.log('executing')
  return 'output'
}

// function memoize(A) {
//   var store = {}
//   // if (res=A() in store) {
//   //   //return res
//   // } else {
//   //   store[res] = res
//   //   // return res
//   // }
//   return function () {
//     if(res in store){
//       return res  
//     }else{
//       store[res] = res
//       return res
//     }
//   }
// }

function memoize(A) {
  var store = {}
  var res = A()
  store[res] = res
  return function () {
    if (res in store) {
      return res
    } else {
      store[res] = res
      return store[res]
    }
  }
}