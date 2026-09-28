//1.Palindrome number
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
else{
    console.log(temp1+" is not a palindrome.");
}

//2.Armstrong number
num2=153
temp2=num2
sum=0
while(num2>0){
    digit=num2%10
    sum+=digit**3
    num2=parseInt(num2/10)
}
if(sum==temp2){
    console.log(temp2+" is a Armstrong number.");
}
else{
    console.log(temp2+" is not a Armstrong number.");
    
}

//3.Perfect number
num3=6
sum1=0
for(i=1;i<num3;i++){
    if(num3%i==0){
     sum1+=i 
    }
}
if(sum1==num3){
    console.log(num3+" is a perfect number.");
}
else{
    console.log(num3+" is not a perfect number.");
}

//4.Strong number
// (sum of factorial of digits is equal to its number)
//ex:145 {1!+4!+5!=145}
num4=145
temp4=num4
sum=0
while(num4>0){
    digit=num4%10
    fact=1
    for(i=1;i<=digit;i++){
        fact*=i
    }
    sum+=fact
    num4=parseInt(num4/10)
}
if(temp4==sum){
    console.log(temp4+" is a Strong number");
}
else{
    console.log(temp4+" Not a Strong number");
}

//5.Neon number
// (sum of digits in a sqr number of its number equals to itself)
//{ex:9^2=81 and 8+1=9}
num5=9
sqr_num=num5**2
sum2=0
while(sqr_num>0){
    digit=sqr_num%10
    sum2+=digit
    sqr_num=parseInt(sqr_num/10)
}
if(sum2==num5){
    console.log(num5+" is Neon number");
}
else{
    console.log(num5+" is not a Neon number");
}

//6.Automorphic number
let num6=25
let sqr=num6**2
let temp=num6
let div=1
while(num6>0){
    div=div*10
    num6=parseInt(num6/10)
}
if(sqr%div==temp){
    console.log(temp+" is a Automorphic number");
}
else{
    console.log(temp+" is not a Automorphic number");
}

