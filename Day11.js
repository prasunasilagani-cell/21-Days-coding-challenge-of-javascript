//1.Number triangle
console.log("Number triangle:");
for(i=1;i<=5;i++){
    output=""
    for(j=1;j<=i;j++){
        output+=j+" "
    }
    console.log(output);
}
console.log();

//2.Star triangle
console.log("Inverted Star Triangle:");
for(i=5;i>=1;i--){
    output=""
    for(j=1;j<=i;j++){
        output+="*"+" "
    }
    console.log(output);
}
console.log();

//3.Right-aligned triangle
console.log("Right-aligned triangle:");
for(i=5;i>=1;i--){
    output=""
    for(j=1;j<=i;j++){
output+=" "
}
for(k=5;k>=i;k--){
    output+=k
}
console.log(output);
}
console.log();

//4.Repeated number pattern
console.log("Repeated number pattern:");
for(i=5;i>=1;i--){
    output=""
    for(j=1;j<=i;j++){
        output+=i+" "
    }
    console.log(output);
}
console.log();

//5.Character pattern
console.log("Character pattern:");
for(i=5;i>=1;i--){
    output=""
    for(j=1;j<=i;j++){
       output+=String.fromCharCode(65+i)+" "
    }
    console.log(output);
}
console.log();

//6.Continuous number pattern
console.log("continuous number pattern:");
let num=1
for(i=1;i<=5;i++){
    output=""
    for(j=1;j<=i;j++){
        output+=num+" ";
        num++;
    }
    console.log(output);
}
console.log();