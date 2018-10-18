function search(arr) {
  var maxSum = arr[0],
    sum = arr[0],res = []
  for (var i = 0, l = arr.length; i < l; i++) {
    if (sum < 0) {
      sum = arr[i];
      res = [arr[i]]
    } else {
      sum += arr[i];
    }

    if (sum > maxSum) {
      maxSum = sum;
      
    }
  }
  return res;
}

var arr = [-2, -6, 1, 5, -4, -7];
console.log(search(arr));  