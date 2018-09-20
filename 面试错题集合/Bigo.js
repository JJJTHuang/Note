// 数组查重 空间O(1),时间0(n) , 类基数排序可以解决

function check(arr,len){
  for(var i=0;i<len;i++){
    var index = arr[i]
    if(index >= len){
      index -= len
    }
    if(arr[index]>=len) {
      return (arr[index]-len)
    }
    arr[index] += len
  }
}

var arr = [3,2,2,0]

console.log(check(arr,4))
