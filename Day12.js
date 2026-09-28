//1.Pyramid pattern
console.log("Pyramid pattern:");
for(i=1;i<=5;i++){
    output=""
    for(k=5;k>=i;k--){
        output+="  "
    }
    for(j=i;j>=1;j--){
     output+=j+" "
    }
    for(l=2;l<=i;l++){
        output+=l+" "
    }
    console.log(output);
}
console.log();

//2.Inverted pyramid pattern
console.log("Inverted pyramid pattern:");
for(i=5;i>=1;i--){
    output=" "
    for(k=5;k>=i;k--){
        output+="  "
    }
    for(j=i;j>=1;j--){
        output+=j+" "
    }
    for(l=2;l<=i;l++){
        output+=l+" "
    }
    console.log(output);
}
console.log();

//3.Hollow Rectangle
console.log("Hollow Rectangle:");
for(i=1;i<=5;i++){
    output=""
    for(j=1;j<=8;j++){
      if(i==1||i==5||j==1||j==8){
        output+="*"+" "
      }
      else{
        output+="  "
      }
    }
    console.log(output);
}
console.log();

//4.Hollow square
console.log("Hollow Square:");
for(i=1;i<=5;i++){
    output=""
    for(j=1;j<=5;j++){
      if(i==1||i==5||j==1||j==5){
        output+="*"+" "
      }
      else{
        output+="  "
      }
    }
    console.log(output);
}
console.log();
//5.Hollow Triangle
console.log("Hollow Triangle:");
for(i=1;i<=5;i++){
    output=""
    for(j=1;j<=9;j++){
        if(i==5||i+j==6&&j<=5||i==2&&j==6||i==3&&j==7||i==4&&j==8){
            output+="*"+" "
        }
        else{
        output+="  "
    }
    }
    console.log(output);
    
}
//6.Flyod's Triangle
console.log("Flyod's Triangle pattern:");
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