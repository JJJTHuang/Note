// xiaozhi & xiaochun

var T = 1
while(T--){
    var arr = '128 39 20 109 100 92'.split(' ')
  arr = arr.map(item=>{ return parseInt(item) })
  pk(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5])
}

function pk(x,a,c,y,b,d){
    var zHp = x - b, cHp = y - a, oldc = c,oldd = d,lessc = 0, lessd = 0, flag = false
	while(zHp || cHp){
        if(zHp <= 0){
            console.log('XIAOCHUN')
            break
        }else if(cHp <= 0){
            console.log('XIAOZHI')
            break
        }else if(zHp < b && cHp < a) {
            console.log('TIE')
            break
        }
        
        if (c === d) {
            zHp -= b
            cHp -= a
        } else if (c > d) {
            if (lessd !== 0) {
                d -= lessd
                zHp -= b
                d += oldd
            }
            console.log(lessd)
            while (d + oldd < c) {
                zHp -= b
                d += oldd
            }
            zHp -= b
            cHp -= a
            lessd = c - d
        } else {
            if (lessc !== 0) {
                c -= lessc
                cHp -= a
                c += oldc
            }

            console.log(lessd)
            while (c + oldc < d) {
                cHp -= a
                c += oldc
            }

            zHp -= b
            cHp -= a
            lessc = d - c
        }

        console.log(x, a, oldc, y, b, oldd, zHp, cHp)
        flag = false
        c = oldc
        d = oldd
    } 
}
