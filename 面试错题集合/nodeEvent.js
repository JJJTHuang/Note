// setTimeout(() => {
//   console.log('timeout')
// }, 0)


// setImmediate(() => {
//   console.log('immediate')
// },0)

// function a(){
//   var t = new Date()
//   return t
// }

// console.log(a().toGMTString())

var fs = require('fs');

function someAsyncOperation(callback) {
    // 假设这个任务要消耗 95ms
    fs.readFile('./nodeEvent.js', callback);
}

var timeoutScheduled = Date.now();

setTimeout(function() {

    var delay = Date.now() - timeoutScheduled;

    console.log(delay + "ms have passed since I was scheduled");
}, 100);


// someAsyncOperation要消耗 95 ms 才能完成
someAsyncOperation(function() {

    var startCallback = Date.now();

    // 消耗 10ms...
    while (Date.now() - startCallback < 10) {
        ; // do nothing
    }

});