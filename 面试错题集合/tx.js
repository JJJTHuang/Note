// 巧克力 0 1 最多方案

// var arr = '1 0 1 0'.split(' ')
// var res = 0
// arr.forEach(item => {
//   if (item === '1') res++
// })
// if (res === 1) console.log(1)
// else {
//   res = 0
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === '1') {
//       res++
//       lastIndex = i
//       console.log(i, res)
//       while (arr[++i] !== '1' && i < arr.length) {
//         res++
//         console.log('---', i, res)
//       }
//     }
//   }
//   //    res - arr.length-lastIndex
//   //if(count>2) res+=(count-2)
//   console.log(res,arr.length,lastIndex)
//   console.log(res - (arr.length - lastIndex))
// }

// 作者：随心cjh
// 链接：https://www.nowcoder.com/discuss/110833
// 来源：牛客网

/*
题目：一块巧克力有若干巧克力球组成，每个巧克力球上可能有坚果，
现在要把这块巧克力掰成若干块，
每块巧克力至少含一个巧克力球且有且仅有一个巧克力球上有坚果，
问有多少种方法
思路：巧克为0 0 1 0 0 1 0 1 0，去掉空格变成：001001010
左右两边的零不影响结果，去掉变成100101，
搜索连续的零变成arr = [00,0],
结果为1 * (arr[0].length + 1) * (arr[1].length + 1)
输入：
4           //表示有多少个巧克力球
1 0 1 1     //表示每个巧克力球上是否有坚果：0：没有，1：有
*/

var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var curLine = 0;
var N = 0;
var input = [];
rl.on('line', function (line) { // javascript每行数据的回调接口
  console.log(line,typeof line)
  if (curLine === 0) {
    N = parseInt(line.trim());
  } else {
    input = line.trim().split(' ');
    func(input);
    rl.close();
  }
  curLine++;
});

function func(input) {
  var cnt = 1;
  var tmp = input.join('').replace(/(^0+)|(0+$)/g, '');   //去掉首尾的零
  var arr = tmp.match(/0+/g); //匹配所有连续的零
  if (arr == null) {    //只有一个坚果，返回1
    console.log(cnt);
    return;
  }
  for (var i = 0; i < arr.length; i++) {    //总共能有的方法
    cnt = cnt * (arr[i].length + 1);
  }
  console.log(cnt);
}

/*
题目：一个字符串S表示矿石，一个字符串P表示最小能量石，
    若干个最小能量石可组成打的能量石，
    如：aabaa可组成{/aabaa+/,/aabaa(abaa)+/,/aabaa(baa)+/}(用正则表示的，
    +表示一个或多个，前缀与后缀相同则可合并)，
    能量石所含能量为P.length的平方，
    求该矿石开采出能源石后所含最多能源
思路：从最长的/aabaa(abaa)+/开始搜索S，搜索到则替换为空字符，且累计能源，
    然后是/aabaa(baa)+/，/aabaa+/
输入：
xyzabababxyz    // 矿石
ab              // 最小能量石
输出：
36              // 最多含多少能量
*/

var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var curLine = 0;
var S = '';
var P = '';
rl.on('line', function (line) { // javascript每行数据的回调接口
  if (curLine === 0) {
    S = line.trim();
  } else {
    P = line.trim();
    func(S, P);
    rl.close();
  }
  curLine++;
});

function func(s, p) {
  var cnt = 0;    // 计数能量
  var suffix = [];
  var r;

  // 获得所有后缀
  for (var i = 0, len = p.length; i < (len - 1) / 2; i++) {
    if (p[i] === p[len - 1 - i]) {
      suffix.push(p.slice(i + 1));
    }
  }

  // p与后缀组合成正则，用空字符替换s中所有匹配到的字符穿且累计能量
  for (var i = 0, len = suffix.length; i < len; i++) {
    r = new RegExp(p + '(' + suffix[i] + ')+', 'g');
    s = s.replace(r, (word) => {
      cnt += word.length * word.length;
      return '';
    });
  }

  // p无后缀组合成正则，用空字符替换s中所有匹配到的字符穿且累计能量
  r = new RegExp('(' + p + ')+', 'g');
  s = s.replace(r, (word) => {
    cnt += word.length * word.length;
    return '';
  });
  console.log(cnt);
}