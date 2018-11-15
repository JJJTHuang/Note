function sleep(delay){
  return function cb(fn) {
    setTimeout(() => {
      fn()
    }, delay);
  }
}

function* gen(){
  const t1 = +new Date()
}