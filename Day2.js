//1.Largest of 3 numbers
let a=123
let b=321
let c=673
if(a>b&&a>c){
    console.log(a+" is greater among 3 numbers.");
}
else if(b>a&&b>c){
    console.log(b+" is greater among 3 numbers.");
}
else{
    console.log(c+" is greater among 3 numbers.");
}

//2.Vowel or consonant
let ch="A"
if(ch=="A"||ch=="E"||ch=="I"||ch=="O"|ch=="U"||ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
    console.log(ch+" is vowel."); 
}
else{
    console.log(ch+" is consonant.");
}

//3.Divisible by 5 and 11
n=125
if(n%5==0&&n%11==0){
    console.log(n+" is divisible by 5 and 11");
}
else if(n%5==0){
    console.log(n+" is divisible by 5 but not by 11"); 
}
else if(n%11==0){
    console.log(n+" is divisible by 11 but not by 5");
}
else{
    console.log(n+" is not divisible by 5 and 11");
}

//4.smallest of three numbers
n=121
m=125
p=453
if(n<m&&n<p){
    console.log(n+" is smallest among 3 numbers");
}
else if(m<n&&m<p){
    console.log(m+" is smallest among 3 numbers");
}
else{
    console.log(p+" is smallest among 3 numbers");
    
}


//5.Leap year
year=2022
if(year%4==0||year%400==0&&year%100!=0){
    console.log("Leap Year.");
}
else{
    console.log("Not a leap year.");
}

//Another way
year=2024
if(year%4==0){
     if(year%100==0){
         if(year%400==0){
            console.log(year+" is Leap year");
         }
         else{
            console.log(year+" is not a leap year");
         }
     }
     else{
        console.log("Leap year")
     }
}
else{
    console.log(year+" Not a leap year.")
}

//6.Calculating Grade
marks=80
if(marks>=90){
    console.log("A+ Grade");
}
else if(marks>=70){
    console.log("A Grade");
}
else if(marks>=40){
    console.log("B Grade");
}
else if(marks>=21){
    console.log("C Grade");
}
else{
    console.log("Fail")
}