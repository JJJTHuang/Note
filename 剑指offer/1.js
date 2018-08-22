// 23 
function FindPath(root,expectNumber){

  let result = []
  let temp = []

  dfs(root,0)

  return result

  function dfs(root,sum){
    if(!root) return

    temp.push(root.val)

    sum += root.val

    if(!root.left && !root.right && sum === expectNumber){
      result.push(temp.concat())
    }

    if(root.left){
      dfs(root.left,sum)
    }

    if (root.right) {
      dfs(root.right, sum)
    }

    temp.pop()
  }
}

// 24
function VerifySquenceOfBST(sequence) {
  var len = sequence.length
  if (!len) {
    return false;
  }
  return adjustSequence(0, len - 1);

  function adjustSequence(start, end) {
    if (start >= end) {
      return true;
    }
    var root = sequence[end];
    for (var i = start; i < end && sequence[i] < root; i++);
    var index = i;
    for (i = i + 1; i < end; i++) {
      if (sequence[i] < root) {
        return false;
      }
    }
    return adjustSequence(start, index - 1) && (adjustSequence(index, end - 1));
  }
} 


function VerifySquenceOfBST(sequence) {
  // write code here
  var len = sequence.length
  if (!len) return false
  return check(0, len - 1)

  function check(start, end) {
    if (start >= end) return true

    var root = sequence[end]

    for (var i = start; i < end && sequence[i] < root; i++) { var index = i }
    for (i = i + 1; i < end; i++) {
      if (sequence[i] < root) {return false}
    }

    return check(start, index - 1) && check(index, end - 1)
  }
}


// 26
function Convert(pRootOfTree) {
  if (!pRootOfTree) {
    return null;
  }
  var lastNode = null;
  lastNode = ConvertNode(pRootOfTree);
  var head = lastNode;
  while (head && head.left) {
    head = head.left;
  }
  return head;


  function ConvertNode(node) {
    if (!node) {
      return;
    }

    if (node.left) {
      lastNode = ConvertNode(node.left);
    }
    node.left = lastNode;

    if (lastNode) {
      lastNode.right = node;
    }
    lastNode = node;

    if (node.right) {
      lastNode = ConvertNode(node.right);
    }
    return lastNode;
  }


}

// 27
function Permutation(str) {
  if (!str || str.length === 0) {
    return [];
  }
  var result = [];
  var arr = str.split('');
  var temp = '';
  ordering(arr);
  result = result.filter(function (item, index) {  //去重
    return result.indexOf(item) === index;
  });
  return result;
  function ordering(tempArr) {
    if (tempArr.length === 0) {
      result.push(temp);
      return;
    }
    for (var i = 0; i < tempArr.length; i++) {
      temp += tempArr[i];
      insideArr = tempArr.concat();
      insideArr.splice(i, 1);
      ordering(insideArr);
      temp = temp.substring(0, temp.length - 1);   //回溯
    }
  }
}


// or

function Permutation(str) {
  var result = [];
  if (str.length <= 0) {
    return [];
  }
  var sortTemp = "";
  var arr = str.split("");
  result = sortString(arr, sortTemp, []);
  
  return result;
}

function sortString(arr, sortTemp, res) {
  if (arr.length === 0) {
    res.push(sortTemp)
  } else {
    var repeat = {}
    for (var i = 0; i < arr.length; i++) {
      if (!repeat[arr[i]]) { // 判断是否进行过匹配
        var temp = arr.splice(i, 1)[0]
        sortTemp += temp
        sortString(arr, sortTemp, res) //
        arr.splice(i, 0, temp) // 数组复原
        sortTemp = sortTemp.slice(0, sortTemp.length - 1) // 字符串复原
        repeat[temp] = true
      }
    }
  }
  return res;
}