function knapSack(capcity,weights,values,n){
  var i, w, a, b, kS = [];
  for (i = 0; i <= n; i++) {
    kS[i] = [];
  }

  for(i=0;i<n;i++){
    for(w=0;w<=capcity;w++){
      if(i==0 || w==0){
        kS[i][w] == 0
      }else if(weights[i-1] <= w){
        a = values[i-1] + kS[i-1][w-weights[i-1]]
        b = kS[i-1][w]

        kS[i][w] = (a>b) ? a:b
      }else{
        ks[i][w] = ks[i-1][w]
      }
    }
  }

  return kS[n][capcity]
}