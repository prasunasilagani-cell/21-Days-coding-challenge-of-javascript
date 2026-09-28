//1.Reverse number
let reverse=function (n){
rev=0
while(n>0){
    digit=n%10
    rev=rev*10+digit
    n=parseInt(n/10)
}
return "The reverse of a number is "+rev
}
console.log(reverse(23456));
console.log();

//2.Perfect number
let perfect=function(n){
    sum=0
    for(i=1;i<n;i++){
        if(n%i==0){
            sum+=i
        }
    }
    if(sum==n){
        return n+" is a perfect number"
    }
    else{
        return n+" is not a perfect number"
    }
} 
console.log(perfect(6));
console.log();


//3.Armstrong number
let Armstrong=function (){
n=153
temp=n
sum1=0
while(n>0){
    digit=n%10
    sum1+=digit**3 
    n=parseInt(n/10)
}
if(sum1==temp){
    console.log("153 is a Armstrong number");
}
}
Armstrong()
console.log();

//4.Palindrome
let palindrome=function (){
let num=121
temp1=num
rev=0
while(num>0){
    digit=num%10
    rev=rev*10+digit
    num=parseInt(num/10)
}
if(rev==temp1){
    console.log(temp1+" is a palindrome.");
}
}
palindrome()
console.log();

//5.Print factors
let factors=function(m){
    console.log("The factors of given "+m+" are");
    for(i=1;i<=m;i++){
        if(m%i==0){
            process.stdout.write(i+" ")
        }
    }
}
factors(21)
console.log();
console.log();

//6.Return leap year
let leapyear=function (){
    n=2024
  if(n%400==0||(n%4==0&&n%100!=0)){
   return n+" is leap year"
  }
  else{
   return n+" is not a leap year"
  }
}
console.log(leapyear());
console.log();