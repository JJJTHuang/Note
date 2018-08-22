let n = 2, m=2, k=6

let arr = []

function main () {
  dfs(n,m,arr,'')
  if(k>arr.length) return -1
  else return arr[k-1]
}

function dfs (n,m,arr,s) {
  if(n === 0 && m === 0){
    arr.push(s)
    return
  }

  if (n>0) {
    dfs(n-1,m,arr,s+'a')
  }

  if (n > 0) {
    dfs(n, m-1, arr, s + 'z')
  }
}

main()//爆栈