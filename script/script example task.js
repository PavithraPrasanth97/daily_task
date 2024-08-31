//Task:1 Given an integer n,return true if n is divisible by 3,otherwise return false

let n1=6;
console.log(typeof(n1)) //"typeof" used to know what type of var initialized 
if(n1%3===0){
    console.log("True");
}
else{
    console.log("false");
}


//Task:2 Given a non-negative integer n, return the sum of its digits

let n2=1234;
let n3=0;
while(n2>0)
{
  n3=n3+(n2%10);
  n2=Math.floor(n2/10);
}
console.log(n3);