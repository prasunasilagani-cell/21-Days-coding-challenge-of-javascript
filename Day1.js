//Even or Odd
n1=20
if(n1%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

//2.Positive or Negative
n2=45
if(n2>0){
    console.log("Positive");
}
else{
    console.log("Negative");
}

//3.Largest of 2 numbers
num1=20
num2=50
if(num1>num2){
    console.log(num1,"is largest number.");
}
else{
    console.log(num2,"is largest number.");
    
}

//4.Smallest of 2 numbers
num3=450
num4=345
if(num3<num4){
    console.log(num3,"is smallest number.");
}
else{
    console.log(num4,"is samllest number.");
}

//5.Sum of 2 numbers
num1=230
num2=340
sum=num1+num2
console.log("The sum of two numbers is",sum);

//6.Swap 2numbers
//By using third variable
a=200
b=300
temp=a
a=b
b=temp
console.log(a,b);

//By not using third variable
let x=300;
let y=400;
[x,y]=[y,x]
console.log("x=",x,"y=",y);

//By not using third variable and with addition and subtraction
let u=560
let v=450
u=u+v
v=u-v
u=u-v
console.log(u,v);

//By using multiplication and division
let m=230
let n=340
m=m*n
n=m/n
m=m/n
console.log(m,n);
