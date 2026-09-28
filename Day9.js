//1.Prime in range
console.log("The prime numbers from 1-100 are ");
for(j=1;j<=100;j++){
n=j
count=0
for(i=1;i<=n;i++){
    if(n%i==0){
        count+=1
    }
}
if(count==2){
    process.stdout.write(j+" ")
  }  
  }
  console.log();
  
//2.Palindrome in range
console.log("The palindromes from 10-500 are ");
for(j=1;j<=500;j++){
n=j
rev=0
temp=n
while(n>0){
    digit=n%10
    rev=rev*10+digit
    n=parseInt(n/10)
}
if(rev==temp){
    process.stdout.write(j+" ")
}}
console.log();

//3.Perfect number in range
console.log("The perfect numbers in range 1-10,000 are ");
for(k=1;k<=10000;k++){
n=k
sum=0
for(i=1;i<n;i++){
    if(n%i==0){
      sum+=i
    }
}if(sum==n){
    process.stdout.write(k+" ")
}
}
console.log();

//4.Neon numbers in range
console.log("The neon numbers in range 1-10000 are ");
for(k=1;k<=10000;k++){
n=k
sqr_num=n**2
sum2=0
while(sqr_num>0){
    digit=sqr_num%10
    sum2+=digit
    sqr_num=parseInt(sqr_num/10)
}
if(sum2==n){
    process.stdout.write(k+" ")
}
}
console.log();

//5.Numbers with 3 factors
console.log("The numbers which have exactly 3 factors are ");
for(i=1;i<=1000;i++){
    count=0
    for(j=1;j<=i;j++){
        if(i%j==0){
            count+=1
        }
    }
    if(count==3){
        process.stdout.write(i+" ")
    }
}
console.log();

//6.Strong number in range
console.log("The strong numbers in the range of 1-100000 are ");
for(x=1;x<=100000;x++){
n=x
temp=n
add=0
while(n>0){
    digit=n%10
    fact=1
    for(i=1;i<=digit;i++){
        fact*=i
    }
    add+=fact 
    n=parseInt(n/10)
}
if(add==temp){
    process.stdout.write(x+" ");
}
}
