function fibbonacciSeries(n,a,b){
    if(n==0) return;
    console.log(a);
    fibbonacciSeries(n-1,b,a+b);
}
-
console.log(fibbonacciSeries(5,0,1));