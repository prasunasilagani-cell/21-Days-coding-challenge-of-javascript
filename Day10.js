//1.Fibonacci series
n=10
a=0
 b=1
  console.log("The febonacci series till "+n+" is " );
 for(i=1;i<=n;i++){
   process.stdout.write(a+" ")
    c=a+b
    a=b
    b=c
 }
   console.log();
   
//2.Factorial series
n=10
fact=1

for(i=1;i<=n;i++){
    fact*=i
    console.log("The factorial of "+i+" numbers is "+fact);
}
console.log();

//3.Powers 
n=10
for(i=1;i<=n;i++){
    square=i**2
    console.log("The power of "+i+" is "+square);
}
console.log();

//4.Fibonacci nth term
n=10
a=0
 b=1
if (n == 1) {
    console.log(a);
} 
else if (n == 2) {
    console.log(b);
}
 else {
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
  }
    console.log(b);
    console.log();
    
//5.sum of fibonacci
n=10
sum=0
a=0
 b=1
 for(i=1;i<=n;i++){
   sum+=a
    c=a+b
    a=b
    b=c
 }
  console.log("The febonacci series till "+n+" is "+sum);
   console.log();

//6.Factorial sum
n=10
fact=1
add=0
for(i=1;i<=10;i++){
    fact*=i
    add+=fact
}
console.log("The factorial sum of "+n+" numbers is "+add);

