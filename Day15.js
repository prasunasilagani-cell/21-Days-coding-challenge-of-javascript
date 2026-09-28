//1.Print 1-10
function printnum(){
    for(i=1;i<=10;i++){
        process.stdout.write(i+" ")
    }
}
printnum()
console.log();
console.log();

//2.Check positive or negative
function posneg(n){
 if(n>0){
    console.log("Positive");
 }
 else{
    console.log("Negative");
 }
}
posneg(43)
console.log();

//3.Find largest of 2
function largestvthinput(n1,n2){
    if(n1>n2){
        console.log(n1+" is largest");
    }
    else{
        console.log(n2+" is largest");
    }
}
largestvthinput(50,100)
console.log();

//4.Return square
function square(){
   n=23
   sqr_num=n**2
    return "The square of "+n+" is "+sqr_num
}
let squares=square()
console.log(squares);
console.log();

//5.Sum of digits
function sumofdigits(n){
let add=0
while(n>0){
    digit=n%10
    add+=digit
    n=parseInt(n/10)
}
return "The sum of digits in a given number are "+add
}
let digitssum=sumofdigits(456)
console.log(digitssum);
console.log();

//6.Factorial
function factorial(x){
    fact=1
    for(i=1;i<=x;i++){
        fact*=i
    }
    return "The factorial of "+x+" is "+fact
}
let factnum=factorial(5)
console.log(factnum);
console.log();