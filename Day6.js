//1.Sum of factors of a number 
n=6
sum=0
for(i=1;i<=n;i++){
    if(n%i==0){
        sum+=i
    }
}
console.log("The sum of the factors of "+n+" is "+sum);

//2.Count of even digits in a number
num=12468975
count=0
while(num>0){
    digit=num%10
    if(digit%2==0){
     count+=1
    }
    num=parseInt(num/10)
}
console.log("The count of even numbers in the given number are "+count);


//3.Count of odd digits in a number
num=124689759
count=0
while(num>0){
    digit=num%10
    if(digit%2!=0){
     count+=1
    }
    num=parseInt(num/10)
}
console.log("The count of odd numbers in the given number are "+count);

//4.Print factors in a range
for(j=1;j<=10;j++){
    console.log("The factors of "+j+" are ");
for(i=1;i<=j;i++){
    if(j%i==0){
        process.stdout.write(i+" ");
    }
}
console.log();
}

//5.Prime check in given range
 console.log("The prime numbers from 1 to 20 are ");
for(l=1;l<=20;l++){ 
n=l
count=0
for(k=1;k<=n;k++){
    if(n%k==0){
        count+=1
    }
}
if(count==2){
    process.stdout.write(l+" ");
}    
}
console.log();


//6.Count factors in given range

for(j=1;j<=20;j++){
count=0
for(i=1;i<=n;i++){
    if(j%i==0){
        count+=1
    }
}
console.log("The factor count of "+j+" is "+count );
}


