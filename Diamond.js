function designDiamond(n){
    for(var i=1; i <= 2*n-1; i++){
        var s = '';
        for(var j=1; j <= Math.abs(n-i); j++){
            s += ' ';
        }
        var m = i;
        if(i > n){ m = n-(i-n); }
        for(var k=1; k <= m; k++){
            s += k;
        }
        for(var l = m-1; l >= 1; l--){
           s += l;
        }
        console.log(s);
    }
}
