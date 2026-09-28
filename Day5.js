//1.Multiplication table
table=5
for(i=1;i<=10;i++){
    console.log(table+" X "+i+" = "+table*i );
}

//2.Squares of a number
for(i=1;i<=10;i++){
    process.stdout.write(i**2+" ");
}
console.log();


//3.Cubes of a number
for(i=20;i<=30;i++){
    process.stdout.write(i**3+" ");
}
console.log();


//4.Sum of squares(1-N)
let sum=0
for(i=1;i<=10;i++){
    squares=i**2
    sum+=squares
}
console.log(sum);

//5.Count of odd numbers
count=0
for(i=20;i<=50;i++){
    if(i%2!=0){
        count+=1
    }
}
console.log(count);

//6.Average of numbers
let count1=0
let add=0
for(i=20;i<=50;i++){
    count1+=1
    add+=i
}
console.log(add/count1);
