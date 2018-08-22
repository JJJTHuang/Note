let timeout = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

let ajax1 = () => timeout(2000).then(() => {
  console.log('1');
  return 1;
});

let ajax2 = () => timeout(1000).then(() => {
  console.log('2');
  return 2;
});

let ajax3 = () => timeout(2000).then(() => {
  console.log('3');
  return 3;
});

let mergePromise = ajaxArray => {
  // 在这里实现你的代码
  let a, b, c
  async function a1() {
    a = await ajaxArray[0]()
    b = await ajaxArray[1]()
    c = await ajaxArray[2]()
  }

  async function b1() {
    await a1()
    return Promise.all([timeout(0).then(() => { return a }), timeout(0).then(() => { return b }), timeout(0).then(() => { return c })])
  }

  return b1()
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log('done');
  console.log(data); // data 为 [1, 2, 3]
});

// 分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]

// 答案:
// let a,b,c
// async function a1() {
//   a = await ajaxArray[0]()
//   b = await ajaxArray[1]()
//   c = await ajaxArray[2]()
// }

// async function b1 () {
//   await a1()
//   return Promise.all([timeout(0).then(() => { return a }), timeout(0).then(() => { return b }), timeout(0).then(() => { return c })])
// }

// return b1()