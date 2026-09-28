//1.Reverse a number
n=123
rev=0
while(n>0){
    digit=n%10
    rev=rev*10+digit
    n=parseInt(n/10)
}
console.log("The reverse of a number is "+rev);

//2. Sum of digits in a number
n=12345
sum=0
while(n>0){
    digit=n%10
    sum+=digit
    n=parseInt(n/10)
}
console.log("The sum of digits in a number is "+sum);

//3.Count of digits in a number
n=64738302984
count=0
while(n>0){
    digit=n%10
    count+=1
    n=parseInt(n/10)
}
console.log("The count of digits in a number is "+count);

//4.Product of digits
n=12345
product=1
while(n>0){
    digit=n%10
    product*=digit
    n=parseInt(n/10)
}
console.log("The product of number is "+product);

//5.First digit of a number
n=23256
while(n>0){
    digit=n%10
    n=parseInt(n/10)
}
console.log("First digit of a number is "+digit);

//6.Last digit of a number
n=1234
while(n>0){
    digit=n%10
    console.log("The last digit of a number is "+digit);
    break
    n=parseInt(n/10)
}