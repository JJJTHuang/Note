// function minCoin(coins){
//   var coin = coins
//   var cache = {}

//   this.makechange = function (amount) {
//     var me = this
//     if(!amount){
//       return []
//     }
//     if(cache[amount]){
//       return cache[amount]
//     }

//     var min = [],newMin,newAmount

//     for(var i=0;i<coins.length;i++){
//       var coin = coins[i]
//       newAmount = amount - coin
//       if(newAmount > 0){
//         newMin = me.makechange(newAmount)
//       }

//       if(
//         newAmount >= 0 &&
//         (newMin.length < min.length-1 || !min.length)
//         && (newMin.length || !newAmount)
//       ){
//         min = [coin].concat(newMin)
//         console.log('new Min ' + min + ' for ' + amount)
//       }
//     }

//     return (cache[amount] = min)
//   }
// }

var minCoinChange = new MinCoinChange([25,10,5,1])
console.log(minCoinChange.makeChange(15));

function MinCoinChange(coins) {
  var coins = coins; //{1}
  var cache = {};    //{2}
  this.makeChange = function (amount) {
    var me = this;
    if (!amount) { //{3}
      return [];
    }
    if (cache[amount]) { //{4}
      return cache[amount];
    }
    var min = [], newMin, newAmount;
    for (var i = 0; i < coins.length; i++) { //{5}
      var coin = coins[i];
      newAmount = amount - coin; //{6}
      if (newAmount >= 0) {
        newMin = me.makeChange(newAmount); //{7}
      }
      if (
        newAmount >= 0 && //{8}
        (newMin.length < min.length - 1 || !min.length)//{9}
        && (newMin.length || !newAmount)) //{10})
      {
        min = [coin].concat(newMin); //{11}
        console.log('new Min ' + min + ' for ' + amount);
        console.log(cache)
      }
    }
    return (cache[amount] = min); //{12}
  };
}