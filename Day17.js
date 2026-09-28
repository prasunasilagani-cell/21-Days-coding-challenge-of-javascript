//1.Pyramid Pattern 
let pyramid=()=>{
 for(f=1;f<=5;f++){
    output=""
                for(g=1;g<=f;g++){
                   output+=" "
                }
                for(h=5;h>=f;h--){
                    output+=h  
                }
                for(i=f+1;i<=5;i++){
                   output+=i
                }
                console.log(output);
                
            }
        }
pyramid()         
console.log();

//2.pattern 
let pattern=(n)=>{
 for(p=1;p<=n;p++){
    output=""
            for(q=p;q>=1;q--){
                output+=q
            }
            console.log(output);
        }
    }  
pattern(4)     
console.log();

//3.Strong number
let strong=(n)=>{
temp=n
sum2=0
while(n>0){
    digit=n%10
    fact=1
    for(i=1;i<=digit;i++){
        fact*=i
    }
    sum2+=fact
    n=parseInt(n/10)
}
if(sum2==temp){
    return "Given no. "+temp+" is strong number"
}
else{
    return "Given no. "+temp+" is not a strong number"
}
}
console.log(strong(145));
console.log();

//4.Square 
let square=(n)=>{
for(i=1;i<=n;i++){
    output=""
    for(j=1;j<=n;j++){
      if(i==1||i==n||j==1||j==n){
        output+="*"+" "
      }
      else{
        output+="  "
      }
    }
    console.log(output);
}
}
square(5)
console.log();

//5.Alphabet
let alphabet=()=>{
 for(t=1;t<=7;t++){
            let output=""
             for(s=1;s<=5;s++){
                 if(s==1||t==1&&s<=4||t==4&&s<=4||s==5&&t>=2&&t<=3){
                    output+="* "
                 }
                 else{
                    output+="  "
                 }
             }
           console.log(output);
         }
    }
alphabet()
console.log();

//6.Number
let number=()=>{
for(i=1;i<=7;i++){
    let output=""
    for(j=1;j<=7;j++){
        if(i==7||j==4||i+j==5&&i<=4){
            output+="* "
        }
        else{ 
            output+="  "
        }
    }
    console.log(output);
   }
}
number()