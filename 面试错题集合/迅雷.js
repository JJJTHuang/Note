// 1.触发器
function EventEmitter() {
  this.eventObj = {}
}

EventEmitter.prototype.on = function (name,fn) {
  if (!this.eventObj[name]){
    this.eventObj[name] = []
  }
  this.eventObj[name].push(fn)
}

EventEmitter.prototype.once = function (name,fn) {
  if (!this.eventObj[name]){
    //console.log(this.eventObj[name])
    this.eventObj[name] = fn
  }else{
    throw new Error(name + 'is existes')
  }
}

EventEmitter.prototype.emit = function (name) {
  var eventObj = this.eventObj[name]
  var args = Array.from(arguments)
  args.shift()
  if (typeof eventObj === 'function'){
    eventObj.apply(this,args)
    delete this.eventObj[name]
  }else{
    var fn = this.eventObj[name].shift()
    fn.apply(this,args)
  }
}

EventEmitter.prototype.remove = function (name,fn) {
  var eventObj = this.eventObj[name]
  if(typeof eventObj === 'function'){
    console.log(this.eventObj)
    delete this.eventObj[name]
    console.log(this.eventObj)
  }else{
    var index = eventObj.indexOf(fn)
    console.log(index)
    this.eventObj[name] = eventObj.splice(0,index).concat(eventObj.splice(index))
  }
}


var e = new EventEmitter();
var count = 0;
e.on('test', function (num1, num2) { count = num1 + num2; console.log(count) });
e.on('test', function (num1, num2) { count = num1 * num2; console.log(count) });
e.once('test1', function (num1, num2) { count = num1 / num2; console.log(count) });
e.emit('test', 1, 2);
e.emit('test', 1, 2);




// 2.排序表
let a = '[{ "name": "张三", "class": 3, "score": 64 }, { "name": "李四", "class": 1, "score": 80 }, { "name": "王五", "class": 1, "score": 80 }, { "name": "赵六", "class": 4, "score": 94 }]'

let students = JSON.parse(a)

function sortStudents(students) {
  var arr = students.sort(function (a,b) {
    return a.class - b.class
  })

  var temp = [arr[0]]
  var v
  for(var i =1;i<arr.length-1;i++){
    v = arr[0].class
    
    if(arr[i].class === v){
      temp.push(arr[i])
    }else{
      v = arr[i].class
      var t = temp.sort(function(a,b){
        return a.score - b.score
      })

      arr = t.concat(arr.splice(i))

      temp = [arr[i]]
    }
  }

  var r = arr

  return r
}

console.log(sortStudents(students))