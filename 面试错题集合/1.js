let op = new Promise((resolve,reject)=>{
  resolve()
  console.log(1)
  return this
})

op.then(()=>{console.log(2)}).then(async ()=>{
  await setTimeout(async () => {
    console.log(3)
  }, 3000);
  console.log(5)
  // return this
}).then(()=>{
  console.log(4)
})