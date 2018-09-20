function test (){
  
  setTimeout(() => {
    console.log(4)
  }, 0);

  return new Promise((resolve, reject) => {
    console.log(2)
    resolve()
  })
}

test().then(()=>{
  console.log(1)
})

console.log(3)