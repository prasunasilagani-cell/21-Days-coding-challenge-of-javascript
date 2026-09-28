//1.X pattern
console.log("X Pattern:");
for(i=1;i<=7;i++){
output=""
for(j=1;j<=7;j++){
    if(i+j==8||i==j){
        output+="* "
    }
    else{
       output+="  "
    }
}
console.log(output);
}

//2.Z pattern
console.log("Z pattern:");
for(i=1;i<=7;i++){
    output=""
    for(j=1;j<=7;j++){
        if(i==1||i==7||i+j==8){
            output+="* "
        }
        else{
            output+="  "
        }
    }
    console.log(output);
}

//3.Diamond pattern
console.log("Diamond pattern:");
for(i=1;i<=5;i++){
    output=""
    for(k=5;k>=i;k--){
        output+="  "
    }
    for(j=1;j<=i;j++){
        output+="* "
     }
     for(l=i-1;l>=1;l--){
        output+="* "
     }
    console.log(output);
}
 for(i=1;i<=4;i++){
    output=""
    for(k=1;k<=i+1;k++){
        output+="  "
    }
    for(j=4;j>=i;j--){
        output+="* "
    }
     for(l=i+1;l<=4;l++){
        output+="* "
     }
     console.log(output);
}
//4.Butterfly pattern
console.log("Butterfly pattern:");
for(i=1;i<=5;i++){
    output=""
    for(j=1;j<=i;j++){
        output+="*"
    }
    for(k=i;k<=4;k++){
        output+=" "
    }
    for(l=i;l<=4;l++){
        output+=" "
    }
    for(m=i;m>=1;m--){
        output+="*"
    }
    console.log(output);
}
for(i=4;i>=1;i--){
    output=""
    for(j=1;j<=i;j++){
        output+="*"
    }
    for(k=i;k<=4;k++){
        output+=" "
    }
    for(l=i;l<=4;l++){
        output+=" "
    }
    for(m=i;m>=1;m--){
        output+="*"
    }
console.log(output);
}
//5.Hourglass pattern
console.log("Hourglass pattern:");
for(i=5;i>=1;i--){
    output=""
    for(l=5;l>=i;l--){
        output+=" "
    }
    for(k=i;k>=2;k--){
        output+="*"
    }
    for(j=1;j<=i;j++){
        output+="*"
    }
    console.log(output);
}
for(i=4;i>=1;i--){
    output=""
    for(k=1;k<=i;k++){
        output+=" "
    }
    for(j=5;j>=i;j--){
        output+="*"
    }
    for(l=5;l>i;l--){
        output+="*"
    }
    console.log(output);
}
//6.0-1 triangle
console.log("0-1 triangle:");
for(i=1;i<=5;i++){
    output=""
    for(j=1;j<=i;j++){
        if((i+j)%2==0){
            output+="0"
        }
        else{
            output+="1"
        }
    }
    console.log(output);
    
}
