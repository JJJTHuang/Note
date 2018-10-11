// var arr = ['33','111','0']
// console.log(arr.sort(),arr.slice(0,2))

var min = '1000', max = '10000', minlen = min.length, maxlen = max.length
var res = 0
console.log(maxlen,minlen)
while (maxlen > minlen + 1) {
    res += 9 * Math.pow(10, maxlen - 3)
    console.log(res)
    maxlen--
}
min = parseInt(min)
while (min < Math.pow(10, minlen)) {
    if (check(min)) res++
    min++
}

function check(n) {
    n = String(n)
    if (n[0] === n[n.length - 1]) return true
    else return false
}

console.log(res)