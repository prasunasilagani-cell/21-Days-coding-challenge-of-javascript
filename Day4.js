//1.Print 1-N numbers
n=10
for(i=1;i<=n;i++){
    process.stdout.write(i+" ")
}
console.log();


//2.print the numbers in reverse(N-1)
n=10
for(i=10;i>=1;i--){
    process.stdout.write(i+" " )
}
console.log();

//3.Print Even numbers
n=10
for(i=1;i<=n;i++){
    if(i%2==0){
        process.stdout.write(i+" ")
    }
}
console.log();

//4.Print odd numbers and sum of them
n=30
sum=0
for(i=1;i<=n;i++){
    if(i%2!=0){
        sum+=i
        process.stdout.write(i+" ")
    }
}
console.log();
console.log("The sum of odd numbers in the given range is "+sum);


//5.Sum of even numbers
n=50
sum=0
for(i=20;i<=n;i++){
    if(i%2==0){
        sum+=i
    }
}
console.log("The multiplication of even numbers in the given range is "+sum);


//6.Multiplication of n numbers
n=20
mul=1
for(i=1;i<=n;i++){
    mul*=i
}
console.log("The Multiplication of "+n+" numbers is "+mul);
